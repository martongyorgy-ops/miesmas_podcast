import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';
import { excerpt } from '../../../lib/text';

export async function getStaticPaths() {
  const concepts = await getCollection('concepts');
  return concepts.map((c) => ({ params: { id: c.data.id }, props: { c } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { c } = props as any;
  const png = await renderOg({ eyebrow: 'TudásTér', title: c.data.name, subtitle: excerpt(c.body, 120) });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
