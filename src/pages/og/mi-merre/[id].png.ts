import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';

export async function getStaticPaths() {
  const digests = await getCollection('newsdigests');
  return digests.map((d) => ({ params: { id: d.data.id }, props: { d } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { d } = props as any;
  const date = new Date(d.data.date).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' });
  const png = await renderOg({ eyebrow: 'MI Merre?', title: 'A világ AI-hírei', subtitle: d.data.items[0]?.title, meta: date });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
