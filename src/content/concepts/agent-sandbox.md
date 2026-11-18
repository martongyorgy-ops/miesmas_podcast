---
id: "agent-sandbox"
name: "Biztonságos környezet AI-ügynököknek (sandbox, mentés)"
cat: ["kutatas", "biztonsag"]
eps:
  - ep: "kerek2"
    t: "—"
  - ep: "szauer-pali-ficsor"
    t: "42:48"
  - ep: "kovacs"
    t: "42:45"
  - ep: "zvara"
    t: "13:55"
---

Kerek István tanulságos hibát hozott példának: két meghajtón tárolt fotók szinkronizálását bízta egy ügynökre, amely úgy értelmezte az utasítást, hogy ami csak az egyik helyen volt meg, azt onnan is törölte. Technikailag ez is „megoldás” volt, csak éppen nem az, amire a gazdája gondolt. Kerek István ezért azt javasolja, hogy kezdők soha ne a munkagépükön futtassanak agentet. A Szauer–Páli–Ficsór-adás vendégei két szabályt fogalmaztak meg. Először: mielőtt bármit egy ügynökre bízunk, főleg egyetlen példányban létező fényképeket vagy dokumentumokat, legyen róla biztonsági mentés. Másodszor: az agent kapjon saját, elzárt munkaterületet (sandboxot), ahol pontosan szabályozott, mihez férhet hozzá. Ehhez a saját gép sem kell, a Claude és az OpenAI is kínál felhős, elszeparált futtatást, de helyben Dockerrel is megoldható. Különösen indokolt az óvatosság, ha az ügynök a böngészőt vagy az egész számítógépet kezeli (computer use), és a gépen tárolt titkos kulcsokhoz is hozzáférhetne. Hétköznapi használatnál, ahol ilyen kockázat nincs, a vendégek szerint a saját gép is elfogadható.

Kovács Zoltán kiberbiztonsági szakértő az Anthropic tesztjeiből kiszabadult ügynökök kapcsán két további szabályt emel ki: a tesztkörnyezetet hermetikusan el kell zárni az internettől, az ügynök működési naplóit pedig folyamatosan figyelni kell, akár egy másik AI-jal, amely azonnal megállítja, ha rossz helyen dolgozik.

Zvara Szabolcs tréner fokozatosan engedte egyre közelebb az ügynököt a saját anyagaihoz. Eleinte tartott tőle, ezért magát az AI-t kérdezte meg, hogyan lehetne biztonságosan dolgozni. A javaslat egy külső meghajtón létrehozott, zárt mappa volt, ahová csak azt teszi be, amihez az ügynök hozzáférhet. Először minden alkalommal külön engedélyt adott, később állandót. Néhány hónap alatt jutott el odáig, hogy az ügynök ma átnézi az elmúlt öt év tárgyalástechnikai prezentációit a gépén, összeállít belőlük egy új anyagot, feltölti a cég közös meghajtójára, és szól, ha kész. Zvara elismeri, hogy ez sokaknak túl nagy szabadság lenne, ő ma már csak szúrópróbaszerűen ellenőriz.
