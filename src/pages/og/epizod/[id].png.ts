import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';

export async function getStaticPaths() {
  const episodes = await getCollection('episodes');
  return episodes.map((ep) => ({ params: { id: ep.data.id }, props: { ep } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { ep } = props as any;
  const date = ep.data.date
    ? new Date(ep.data.date).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })
    : undefined;
  const png = await renderOg({ eyebrow: 'Epizód', title: ep.data.guest, subtitle: ep.data.role, meta: date });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
