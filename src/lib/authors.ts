import { SELF_AUTHORS } from "../consts";

export function isSelf(name: string): boolean {
  const norm = name.replace(/,$/, "").trim();
  return SELF_AUTHORS.map((s) => s.replace(/,$/, "").trim()).includes(norm);
}

// "Last, First" -> "First Last" (handles parenthetical middle like "Zhuohao (Jerry)")
export function flipName(name: string): string {
  const cleaned = name.replace(/,\s*$/, "").trim();
  const idx = cleaned.indexOf(",");
  if (idx === -1) return cleaned;
  const last = cleaned.slice(0, idx).trim();
  const first = cleaned.slice(idx + 1).trim();
  return `${first} ${last}`;
}
