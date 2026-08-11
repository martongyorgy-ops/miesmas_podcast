# MI és más — miesmas.hu

Astro-projekt a "MI és más — közérthetően a mesterséges intelligenciáról" podcast weboldalához.

## Fejlesztés

```
npm install
npm run dev       # helyi fejlesztői szerver, http://localhost:4321
npm run build     # végleges, statikus oldal generálása a dist/ mappába
npm run preview   # az elkészült build helyi kipróbálása
```

## Struktúra

- `src/content/episodes/` — minden feldolgozott adás egy `.md` fájl (frontmatter: vendég, szerep, kategóriák, YouTube-link, idézet, kapcsolódó fogalmak; a fájl törzse az összefoglaló)
- `src/content/concepts/` — a TudásTér fogalomkártyái, ugyanígy egy fájl/fogalom
- `src/data/categories.json` — a 7 fő kategória neve és színkulcsa
- `src/pages/` — az oldalak (főoldal, epizódok, epizod/[id], tudaster, fogalom/[id], rolam, impresszum, adatkezeles)

Lásd még: `PENDING.md` a még hátralévő, döntést vagy tartalmat igénylő pontokért.

## Új adás hozzáadása

Új `.md` fájlt kell létrehozni a `src/content/episodes/` mappában, a meglévők mintája alapján (lásd pl. `piketthy.md`). A `order` mező egyelőre a feldolgozás sorrendjét jelzi — lásd `PENDING.md`.
