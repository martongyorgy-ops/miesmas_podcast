import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { renderOg } from '../../../lib/og';
import { excerpt } from '../../../lib/text';

export async function getStaticPaths() {
  const posts = await getCollection('gondolatok');
  return posts.map((post) => ({ params: { id: post.id }, props: { post } }));
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as any;
  const date = new Date(post.data.date).toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' });
  const png = await renderOg({
    eyebrow: 'Gondolatok',
    title: post.data.title,
    subtitle: post.data.lead ?? excerpt(post.body, 130),
    meta: date,
    footer: 'Márton György írása',
  });
  return new Response(png, { headers: { 'Content-Type': 'image/png' } });
};
