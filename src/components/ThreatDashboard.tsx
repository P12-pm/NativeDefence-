import { useEffect, useState, useRef } from 'react';
import { Terminal, Radio, Activity } from 'lucide-react';

interface LogEntry {
  time: string;
  ip: string;
  type: string;
  status: 'BLOCKED' | 'INTERCEPTED' | 'MITIGATED';
  severity: 'HIGH' | 'MEDIUM' | 'CRITICAL';
}

const ATTACK_IPS = ['103.45.12.98', '192.168.42.115', '45.122.9.204', '89.23.142.11', '210.5.88.94', '64.233.161.8'];
const INCIDENTS = [
  { type: 'Port scan attempt detected', status: 'BLOCKED', severity: 'MEDIUM' },
  { type: 'SQL Injection vector isolated', status: 'INTERCEPTED', severity: 'CRITICAL' },
  { type: 'Brute-force burst neutralized', status: 'BLOCKED', severity: 'HIGH' },
  { type: 'DDoS flow rate anomalous', status: 'MITIGATED', severity: 'CRITICAL' },
  { type: 'XSS payload filtered', status: 'INTERCEPTED', severity: 'MEDIUM' },
  { type: 'Unauthorized API query rejected', status: 'BLOCKED', severity: 'HIGH' }
];

export default function ThreatDashboard() {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [threatCount, setThreatCount] = useState(128470);
  const [load, setLoad] = useState(4);
  const [points, setPoints] = useState<number[]>([30, 45, 32, 64, 45, 80, 52, 40, 75, 60, 55]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generate real-time log activity
  useEffect(() => {
    const makeLog = (): LogEntry => {
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', { hour12: false });
      const ip = ATTACK_IPS[Math.floor(Math.random() * ATTACK_IPS.length)];
      const inc = INCIDENTS[Math.floor(Math.random() * INCIDENTS.length)];
      return {
        time,
        ip,
        type: inc.type,
        status: inc.status as any,
        severity: inc.severity as any
      };
    };

    // Initial log stack
    setLogs([makeLog(), makeLog(), makeLog(), makeLog()]);

    const interval = setInterval(() => {
      setLogs((prev) => [makeLog(), ...prev.slice(0, 5)]);
      setThreatCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
      setLoad(Math.floor(Math.random() * 12) + 3);
      setPoints((prev) => [...prev.slice(1), Math.floor(Math.random() * 55) + 20]);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // Draw active dynamic wave graph on HTML5 Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let offset = 0;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw Grid lines
      ctx.strokeStyle = 'rgba(0, 229, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let i = 0; i < w; i += 30) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, h);
        ctx.stroke();
      }
      for (let j = 0; j < h; j += 20) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(w, j);
        ctx.stroke();
      }

      // Draw active threat waves
      ctx.beginPath();
      ctx.strokeStyle = '#00E5FF';
      ctx.lineWidth = 2;
      
      const step = w / (points.length - 1);
      ctx.moveTo(0, h - (points[0] / 100) * h);
      
      for (let k = 1; k < points.length; k++) {
        const x = k * step;
        const y = h - (points[k] / 100) * h;
        // Cubic bezier curves
        const px = (k - 1) * step;
        const py = h - (points[k - 1] / 100) * h;
        ctx.bezierCurveTo(px + step / 2, py, x - step / 2, y, x, y);
      }
      ctx.stroke();

      // Fill beneath wave
      ctx.lineTo(w, h);
      ctx.lineTo(0, h);
      const gradient = ctx.createLinearGradient(0, 0, 0, h);
      gradient.addColorStop(0, 'rgba(0, 229, 255, 0.15)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0.00)');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Dynamic scanning beacon line
      offset = (offset + 1.5) % w;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.35)';
      ctx.lineWidth = 1.5;
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset, h);
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [points]);

  return (
    <div
      className="w-full bg-[rgba(11,18,31,0.7)] border border-[rgba(0,229,255,0.16)] rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-6"
    >
      {/* Title & Live Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[rgba(0,229,255,0.1)] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] text-[#00E5FF]">
            <Radio className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Threat Intelligence Hub</h3>
            <p className="text-[10px] text-[#7a9bb5] uppercase tracking-widest">Active SOC Monitoring Stream</p>
          </div>
        </div>
        
        {/* Dynamic status badge */}
        <div className="flex items-center gap-2 bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.25)] rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping-cyber" />
          <span className="text-[10px] font-bold text-[#00E5FF] tracking-widest uppercase">LIVE SECURE</span>
        </div>
      </div>

      {/* Grid of Microstats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        
        <div className="p-4 rounded-2xl bg-[#111827]/60 border border-[rgba(0,229,255,0.08)] flex flex-col gap-1">
          <span className="text-[9px] text-[#7a9bb5] uppercase font-bold tracking-widest">Intercepted Attacks</span>
          <span className="text-lg sm:text-xl font-bold font-mono text-[#00E5FF] tracking-wider">
            {threatCount.toLocaleString()}
          </span>
        </div>
        
        <div className="p-4 rounded-2xl bg-[#111827]/60 border border-[rgba(0,229,255,0.08)] flex flex-col gap-1">
          <span className="text-[9px] text-[#7a9bb5] uppercase font-bold tracking-widest">Gateway Latency</span>
          <span className="text-lg sm:text-xl font-bold font-mono text-[#3B82F6] tracking-wider">
            12.84 ms
          </span>
        </div>
        
        <div className="col-span-2 lg:col-span-1 p-4 rounded-2xl bg-[#111827]/60 border border-[rgba(0,229,255,0.08)] flex flex-col gap-1">
          <span className="text-[9px] text-[#7a9bb5] uppercase font-bold tracking-widest">System Load</span>
          <div className="flex items-center gap-3">
            <span className="text-lg sm:text-xl font-bold font-mono text-[#00E5FF] tracking-wider">
              {load}%
            </span>
            {/* Progress Microbar */}
            <div className="h-1.5 flex-1 bg-black/40 rounded-full overflow-hidden p-[1px]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#00E5FF]"
                style={{ width: `${load * 5}%` }}
              />
            </div>
          </div>
        </div>

      </div>

      {/* Canvas Dynamic Wave Monitor */}
      <div className="relative w-full rounded-2xl border border-[rgba(0,229,255,0.12)] overflow-hidden bg-black/35 h-32 flex items-center justify-center">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" width={480} height={128} />
        
        {/* Decorative elements */}
        <div className="absolute top-2 left-3 flex items-center gap-1.5 text-[8px] font-mono text-[#00E5FF]">
          <Activity className="w-3.5 h-3.5 animate-pulse" />
          FLOW PACKET MONITOR
        </div>
        <div className="absolute top-2 right-3 text-[8px] font-mono text-[#7a9bb5]">
          SCAN FREQ: 5.8 GHz
        </div>
      </div>

      {/* Scrolling Threat log lists */}
      <div className="flex flex-col gap-2">
        <h4 className="text-[10px] font-bold text-white uppercase tracking-widest flex items-center gap-1.5 mb-1">
          <Terminal className="w-3.5 h-3.5 text-[#00E5FF]" />
          Real-time Packet Interceptions
        </h4>
        <div className="flex flex-col gap-2 max-h-36 overflow-y-auto custom-scrollbar pr-1">
          {logs.map((log, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-black/30 border border-white/5 text-[10px] sm:text-xs font-mono transition-all duration-300 hover:border-[rgba(0,229,255,0.12)]"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[#7a9bb5]">{log.time}</span>
                <span className="text-white font-semibold">{log.ip}</span>
                <span className="text-[#7a9bb5]">{log.type}</span>
              </div>
              
              <div className="flex items-center gap-2 mt-1 sm:mt-0 self-end sm:self-auto">
                <span
                  className={`text-[9px] px-2 py-0.5 rounded font-bold ${
                    log.severity === 'CRITICAL'
                      ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                      : log.severity === 'HIGH'
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}
                >
                  {log.severity}
                </span>
                
                <span
                  className={`text-[9px] font-extrabold tracking-widest ${
                    log.status === 'BLOCKED'
                      ? 'text-[#00E5FF]'
                      : 'text-[#3B82F6]'
                  }`}
                >
                  {log.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
