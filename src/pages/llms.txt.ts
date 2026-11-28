import { getCollection } from 'astro:content';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const linhas = posts.map((p) => '- [' + p.data.title + '](https://marcoshenrique.me/' + p.id + '/): ' + p.data.description).join('\n');
  const corpo = '# Marcos Henrique\n\n' +
    '> Blog de tráfego pago e anúncios, com artigos práticos sobre Meta Ads, Google Ads, YouTube Ads e uso de IA no marketing digital. Escrito por Marcos Henrique, especialista em tráfego pago e funis de vendas com IA.\n\n' +
    '## Artigos\n\n' + linhas + '\n\n' +
    '## Páginas\n\n- [Blog](https://marcoshenrique.me/blog/): lista de todos os artigos.\n';
  return new Response(corpo, { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
}
