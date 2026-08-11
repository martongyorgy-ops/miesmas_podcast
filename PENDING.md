# Hátralévő, döntést vagy tartalmat igénylő pontok

## Fontos, technikai jellegű
- **Epizódok sorrendje**: MEGERŐSÍTVE — a leiratok mindig időben visszafelé (legújabbtól a legrégebbi felé) lettek feltöltve, csomagonként is és csomagon belül is. Emiatt a `order` mező NÖVEKVŐ sorrendje = az adások CSÖKKENŐ időrendje (kisebb `order` = újabb adás). A rendezés ez alapján javítva (2026-08-10-én). Eddig 5 epizódnál van megerősített, valódi dátum is (`date:` mező): Pikéthy Árpád (2026-07-15), Dalos-Kovács Gabriella (2026-07-08), Molnár László (2026-07-01), Borbély Imre (2026-06-24), Dr. Völgyesi Gabriella (2026-06-17). A többi epizódnál egyelőre nincs pontos dátum, csak a feldolgozási sorrend — ha küldesz továbbiakat, ugyanígy be lehet írni őket.
- **Spotify-link a legutóbbi adásnál**: a főoldalon egy helyőrző van („link hozzáadásra vár”) — ide kell majd az aktuális adás Spotify-linkje. Megbeszéltük, hogy a régebbi epizódoldalakon marad a YouTube-only megoldás.
- **"Kövess minket" linkek** (Facebook, LinkedIn, YouTube) a lábjegyzetben egyelőre `#` helyőrzők — ide kellenek a valódi URL-ek.

## Tartalmi, jogi
- **Impresszum** — placeholder oldal, vár a jogász barátod visszatérésére. Amit már tudunk: TKP Consulting Kft, martongyorgy@tkpconsulting.hu — hiányzik: székhely, cégjegyzékszám, adószám.
- **Adatkezelési tájékoztató** — szintén placeholder, jogi felülvizsgálatra vár.
- **Hírlevél-feliratkozás** — szándékosan nincs a mockupban/oldalon, amíg a szabályok és a szolgáltató (pl. Mailchimp, Brevo) nincs eldöntve.

## Hiányzó epizód
- Dietz Ferenc adása egyelőre nincs feldolgozva (a leirat elveszett/nincs fent a csatornán).

## Amit tudni érdemes a `order` mezőről
Az epizódok `.md` fájljaiban lévő `order` szám a feldolgozás sorrendjét tükrözi. Márton György megerősítette, hogy a leiratokat mindig visszafelé, a legújabbtól a legrégebbi felé töltötte fel — ezért a NÖVEKVŐ `order` a CSÖKKENŐ időrendnek felel meg (0 = legújabb). A rendezés ez alapján van beállítva. Ahol pontos dátum is ismert (`date:` mező), az az epizódoldalon és a listákban is megjelenik.

## Spotify-linkek (2026-08-11-én kapott lista, egyelőre nem beépítve)
A `mi-es-mas-epizodok-v2.xlsx` alapján 73 sorból 12-nél van valódi, közvetlen Spotify epizód-link (`open.spotify.com/episode/...`), a többi 61-nél csak kereső-link (`open.spotify.com/search/...`) — ez utóbbi nem visz konkrét epizódra. Döntés még nem született arról, hogyan kezeljük ezt a vegyes minőséget — a nyers lista elmentve: `data/spotify-linkek-nyers.json`. Amikor visszatérünk rá, el kell dönteni:
- csak a 12 valódit építsük be, vagy
- a keresőlinkeket is, más felirattal ("Keresd meg Spotify-on"), vagy
- várjunk, amíg mindegyikhez lesz valódi link.

Emellett 8 feldolgozott epizódnak (Márton András, Eigner György, Flakstad Emőke, Forgács Mariann, Marosi Gergely, Turcsán Tamás, Németh Gábor) nincs sora az xlsx-ben — ezekhez majd külön kell Spotify-linket gyűjteni, ha eljutunk odáig.
