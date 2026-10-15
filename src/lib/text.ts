// Rövid, keresőbarát leírás (meta description) készítése a markdown szövegből.
export function excerpt(markdown: string | undefined, max = 155): string {
  if (!markdown) return '';
  const plain = markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')       // képek
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')    // linkek -> szöveg
    .replace(/[*_`#>]/g, '')                     // markdown jelölők
    .replace(/\s+/g, ' ')
    .trim();
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max + 1);
  const lastSpace = cut.lastIndexOf(' ');
  return cut.slice(0, lastSpace > 80 ? lastSpace : max).replace(/[,;:.\s-]+$/, '') + '…';
}
