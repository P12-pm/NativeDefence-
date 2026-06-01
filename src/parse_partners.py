import re

with open('/Users/preyasmevada/.gemini/antigravity-ide/brain/1cf07cd1-855c-42ed-8677-ef086474caf3/.system_generated/steps/264/content.md', 'r') as f:
    content = f.read()

print("--- REGEX SEARCH FOR JSON MEDIA ALT/TITLE ---")
matches = re.findall(r'("alt"\s*:\s*"[^"]+?"|"title"\s*:\s*"[^"]+?")', content)
for m in list(set(matches))[:50]:
    print("- JSON PROP:", m)
