import { useState, useRef, useEffect } from 'react';
import { Terminal, Shield, Play } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'success' | 'error' | 'warning';
}

export default function TerminalSection() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { text: 'NATIVEDEFENCE SECURE CLIENT EMULATOR V1.2.0', type: 'output' },
    { text: 'Type "help" to display list of available diagnostic commands.', type: 'output' },
    { text: '', type: 'output' }
  ]);
  const [isScanning, setIsScanning] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Keep terminal scrolled to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = async (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `guest@nativedefence:~$ ${cmd}`, type: 'input' as const }];
    
    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    setHistory(newHistory);
    setInput('');

    switch (trimmed) {
      case 'help':
        setHistory((prev) => [
          ...prev,
          { text: 'Available Diagnostic Utilities:', type: 'output' },
          { text: '  scan      - Run active zero-trust security audit and threat check', type: 'output' },
          { text: '  status    - Retrieve live secure nodes & system telemetry', type: 'output' },
          { text: '  ip        - Query network interface parameters and gateway nodes', type: 'output' },
          { text: '  vuln      - Diagnostic audit for common security loopholes & CVEs', type: 'output' },
          { text: '  about     - Retrieve system details of NativeDefence framework', type: 'output' },
          { text: '  clear     - Wipe local screen console logs', type: 'output' }
        ]);
        break;

      case 'clear':
        setHistory([]);
        break;

      case 'about':
        setHistory((prev) => [
          ...prev,
          { text: 'NativeDefence Security Suite is a premium cloud-native zero-trust enterprise cybersecurity platform.', type: 'output' },
          { text: 'Constructed around advanced active threat prevention, 24/7 AI-driven SOC, and immediate VAPT mitigations.', type: 'output' }
        ]);
        break;

      case 'ip':
        setHistory((prev) => [
          ...prev,
          { text: 'Querying interface node endpoints...', type: 'output' },
          { text: '  IPv4 Node  : 182.42.9.231', type: 'success' },
          { text: '  Subnet Mask: 255.255.255.0', type: 'output' },
          { text: '  Gateway IP : 182.42.9.1', type: 'output' },
          { text: '  DNS Servers: 1.1.1.1, 8.8.8.8', type: 'output' },
          { text: '  Connection : SECURE. TLSv1.3 Encrypted.', type: 'success' }
        ]);
        break;

      case 'status':
        setHistory((prev) => [
          ...prev,
          { text: 'System Telemetry Status Report:', type: 'output' },
          { text: '  [OK] AI Security Engine v4.2 active', type: 'success' },
          { text: '  [OK] Deep Packet Inspection active', type: 'success' },
          { text: '  [OK] Threat Database Link Sync (100%)', type: 'success' },
          { text: '  [OK] SOC Uplink ping: 12ms', type: 'success' },
          { text: '  [SECURE] Core shields fully active.', type: 'success' }
        ]);
        break;

      case 'vuln':
        setHistory((prev) => [
          ...prev,
          { text: 'Auditing common CVE threat profiles...', type: 'output' },
          { text: '  CVE-2024-4289 (Zero-Day Buffer Leak)  : NOT VULNERABLE', type: 'success' },
          { text: '  CVE-2023-38606 (Root Escalation Vector): NOT VULNERABLE', type: 'success' },
          { text: '  OWASP Top 10 Injection Audits          : SECURE', type: 'success' },
          { text: '  SSL Cipher Strength Check (AES-256)    : PASS', type: 'success' },
          { text: 'Result: ZERO security breaches identified.', type: 'success' }
        ]);
        break;

      case 'scan':
        if (isScanning) return;
        setIsScanning(true);
        setHistory((prev) => [...prev, { text: 'INITIALIZING ACTIVE ZERO-TRUST VAPT SCAN...', type: 'warning' }]);
        
        // Step-by-step scanner visual
        const steps = [
          { t: 'Mounting virtual packet interface...', delay: 400, type: 'output' },
          { t: 'Analyzing host pathways and open ports...', delay: 800, type: 'output' },
          { t: 'Injecting safe mock payloads to inspect response loops...', delay: 1200, type: 'output' },
          { t: 'Evaluating firewall filtration mechanisms...', delay: 1600, type: 'output' },
          { t: 'VAPT COMPLETED. Host node is 100% secure.', delay: 2000, type: 'success' }
        ];

        for (const step of steps) {
          await new Promise((resolve) => {
            setTimeout(() => {
              setHistory((prev) => [...prev, { text: step.t, type: step.type as any }]);
              resolve(true);
            }, step.delay);
          });
        }
        setIsScanning(false);
        break;

      default:
        setHistory((prev) => [
          ...prev,
          { text: `Command not recognized: "${trimmed}". Type "help" to view diagnostic menu.`, type: 'error' }
        ]);
        break;
    }
  };

  return (
    <div
      className="w-full bg-black/80 border border-[rgba(0,229,255,0.16)] rounded-3xl overflow-hidden font-mono shadow-[0_25px_60px_rgba(0,0,0,0.6)] flex flex-col h-[400px] relative text-left"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#111827] border-b border-[rgba(0,229,255,0.12)]">
        <div className="flex items-center gap-2">
          {/* Mock Buttons */}
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
            <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
          </div>
          <Terminal className="w-4 h-4 text-[#00E5FF]" />
          <span className="text-xs font-semibold text-[#7a9bb5] uppercase tracking-widest">
            Diagnostic CLI Console
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-[9px] text-[#00E5FF]/60 tracking-wider">
          <Shield className="w-3 h-3 animate-pulse" />
          Zero-Trust Protected
        </div>
      </div>

      {/* Console lines screen */}
      <div className="flex-1 p-5 overflow-y-auto pr-3 custom-scrollbar flex flex-col gap-2 bg-black/45">
        {history.map((line, i) => (
          <div key={i} className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
            {line.type === 'input' ? (
              <span className="text-[#00E5FF] font-semibold">{line.text}</span>
            ) : line.type === 'success' ? (
              <span className="text-[#3B82F6] font-bold">{line.text}</span>
            ) : line.type === 'warning' ? (
              <span className="text-yellow-400 font-bold">{line.text}</span>
            ) : line.type === 'error' ? (
              <span className="text-red-400 font-semibold">{line.text}</span>
            ) : (
              <span className="text-[#7a9bb5]">{line.text}</span>
            )}
          </div>
        ))}
        {isScanning && (
          <div className="flex items-center gap-2 text-xs sm:text-sm text-[#00E5FF] animate-pulse">
            <span>PERFORMING THREAT INSPECTIONS...</span>
            <span className="w-2 h-4 bg-[#00E5FF] inline-block animate-pulse-fast" />
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCommand(input);
        }}
        className="flex items-center gap-3 px-5 py-3 bg-[#111827] border-t border-[rgba(0,229,255,0.12)] relative"
      >
        <span className="text-[#00E5FF] font-bold select-none text-xs sm:text-sm">guest@nativedefence:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isScanning}
          className="flex-1 bg-transparent text-white outline-none border-none font-mono text-xs sm:text-sm focus:ring-0 disabled:opacity-50"
          placeholder={isScanning ? 'Scanner busy...' : 'Type command here (e.g. help, scan)...'}
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="submit"
          disabled={isScanning}
          className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.2)] text-[#00E5FF] hover:bg-[#00E5FF] hover:text-[#0A0F1F] transition-all duration-200"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
        </button>
      </form>
    </div>
  );
}
