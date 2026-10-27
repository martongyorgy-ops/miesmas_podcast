// Megosztási képek (1200×630 PNG) generálása build közben, a TudásTér-oldalak és epizódok számára.
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// A betűkészletek a latin és a közép-európai (ő, ű) karaktereket is tartalmazzák.
const font = (file: string) => readFileSync(join(process.cwd(), 'src/assets/og-fonts', file));

const fonts = [
  { name: 'Montserrat', data: font('montserrat-latin-800-normal.woff'), weight: 800 as const, style: 'normal' as const },
  { name: 'Montserrat', data: font('montserrat-latin-ext-800-normal.woff'), weight: 800 as const, style: 'normal' as const },
  { name: 'Inter', data: font('inter-500.ttf'), weight: 500 as const, style: 'normal' as const },
  { name: 'Inter', data: font('inter-700.ttf'), weight: 700 as const, style: 'normal' as const },
];

// Az oldal arculata (éjkék alap, meleg narancs kiemelés), sötét változatban
const C = { paper: '#080C26', ink: '#FFFFFF', soft: '#B4BADB', amber: '#FF9A55', amberSoft: '#43281A', line: '#232B60' };

// Egyszerű elemkészítő a satori számára (JSX nélkül)
const h = (type: string, style: Record<string, unknown>, children?: unknown) => ({ type, props: { style, children } });

function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:\s-]+$/, '') + '…';
}

export interface OgCard {
  eyebrow: string;   // pl. "Epizód" vagy "TudásTér"
  title: string;     // vendég neve vagy fogalom neve
  subtitle?: string; // szerep vagy rövid leírás
  meta?: string;     // pl. dátum
  footer?: string;   // bal alsó felirat (alapértelmezés: a műsor szlogenje)
}

export async function renderOg({ eyebrow, title, subtitle, meta, footer = 'Közérthetően a mesterséges intelligenciáról' }: OgCard): Promise<Uint8Array> {
  const titleSize = title.length > 60 ? 54 : title.length > 34 ? 64 : 80;
  const tree = h('div', {
    // satori content-box méretezést használ: 1200 - 2×72 = 1056, 630 - 14 - 50 - 44 = 522
    width: 1056, height: 522, display: 'flex', flexDirection: 'column',
    background: C.paper, padding: '50px 72px 44px', fontFamily: 'Inter', borderTop: `14px solid ${C.amber}`,
  }, [
    h('div', { display: 'flex', width: 1056, alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }, [
      h('div', { display: 'flex', fontFamily: 'Montserrat', fontWeight: 800, fontSize: 42, color: C.ink }, 'MI és más'),
      h('div', { display: 'flex', fontSize: 24, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: C.amber,
        background: C.amberSoft, padding: '8px 22px', borderRadius: 40 }, eyebrow),
    ]),
    h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 1056, flexGrow: 1, flexShrink: 1 }, [
      h('div', { display: 'flex', fontFamily: 'Montserrat', fontWeight: 800, fontSize: titleSize, lineHeight: 1.12, letterSpacing: -1, color: C.ink }, clamp(title, 90)),
      subtitle ? h('div', { display: 'flex', fontSize: 32, lineHeight: 1.35, color: C.soft, marginTop: 24 }, clamp(subtitle, 150)) : null,
    ].filter(Boolean)),
    h('div', { display: 'flex', width: 1056, justifyContent: 'space-between', alignItems: 'center', borderTop: `2px solid ${C.line}`, paddingTop: 22, flexShrink: 0,
      fontSize: 26, color: C.soft }, [
      h('span', {}, footer),
      h('span', { color: C.amber, fontWeight: 700 }, meta ? `${meta} · miesmas.hu` : 'miesmas.hu'),
    ]),
  ]);
  const svg = await satori(tree as any, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
