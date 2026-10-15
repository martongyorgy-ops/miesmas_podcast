import type { APIRoute } from 'astro';
import { renderOg } from '../../lib/og';

export const GET: APIRoute = async () => {
  const png = await renderOg({
    eyebrow: 'Ajánló',
    title: 'Ismerkedés az MI-vel',
    subtitle: 'Ha most barátkozol a mesterséges intelligenciával, ezekkel a beszélgetésekkel érdemes kezdeni.',
  });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
