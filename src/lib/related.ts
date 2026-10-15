// Kapcsolódó tartalmak kiválasztása az oldalak aljára.
// Az epizódok és a fogalmak közötti kapcsolatokból (közös fogalmak, közös adások, közös kategóriák) számol.

type Ep = { data: { id: string; cats: string[]; concepts: string[]; order: number; date?: string } };
type Concept = { data: { id: string; cat: string | string[]; eps: { ep: string }[] } };

const asArray = (v: string | string[]) => (Array.isArray(v) ? v : [v]);
const newestFirst = (a: Ep, b: Ep) => (b.data.date ?? '').localeCompare(a.data.date ?? '') || a.data.order - b.data.order;

// Egy epizódhoz tartozó fogalmak: amit az epizód felsorol, plusz amelyik fogalom erre az epizódra hivatkozik.
function conceptIdsOf(ep: Ep, concepts: Concept[]): Set<string> {
  const ids = new Set(ep.data.concepts);
  for (const c of concepts) if (c.data.eps.some((e) => e.ep === ep.data.id)) ids.add(c.data.id);
  return ids;
}

export function relatedEpisodes(ep: Ep, episodes: Ep[], concepts: Concept[], n = 4) {
  const mine = conceptIdsOf(ep, concepts);
  const scored = episodes
    .filter((o) => o.data.id !== ep.data.id)
    .map((o) => {
      const theirs = conceptIdsOf(o, concepts);
      const sharedConcepts = [...mine].filter((id) => theirs.has(id)).length;
      const sharedCats = o.data.cats.filter((c) => ep.data.cats.includes(c)).length;
      return { o, score: sharedConcepts * 3 + sharedCats };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || newestFirst(a.o, b.o))
    .map((x) => x.o);
  // Ha kevés a kapcsolódó adás, a legújabbakkal egészítjük ki.
  const fill = episodes.filter((o) => o.data.id !== ep.data.id && !scored.includes(o)).sort(newestFirst);
  return [...scored, ...fill].slice(0, n);
}

export function relatedConcepts(c: Concept, concepts: Concept[], n = 4) {
  const myEps = new Set(c.data.eps.map((e) => e.ep));
  const myCats = asArray(c.data.cat);
  return concepts
    .filter((o) => o.data.id !== c.data.id)
    .map((o) => {
      const sharedEps = o.data.eps.filter((e) => myEps.has(e.ep)).length;
      const sharedCats = asArray(o.data.cat).filter((k) => myCats.includes(k)).length;
      return { o, score: sharedEps * 3 + sharedCats };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.o.data.id.localeCompare(b.o.data.id))
    .slice(0, n)
    .map((x) => x.o);
}

export { newestFirst };
