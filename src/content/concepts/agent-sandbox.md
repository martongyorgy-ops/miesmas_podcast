---
id: "agent-sandbox"
name: "Biztonságos környezet AI-ügynököknek (sandbox, mentés)"
cat: "kutatas"
eps:
  - ep: "kerek2"
    t: "—"
  - ep: "szauer-pali-ficsor"
    t: "42:48"
---

Kerek István tanulságos hibát hozott példának: két meghajtón tárolt fotók szinkronizálását bízta egy ügynökre, amely úgy értelmezte az utasítást, hogy ami csak az egyik helyen volt meg, azt onnan is törölte. Technikailag ez is „megoldás” volt, csak éppen nem az, amire a gazdája gondolt. Kerek István ezért azt javasolja, hogy kezdők soha ne a munkagépükön futtassanak agentet. A Szauer–Páli–Ficsór-adás vendégei két szabályt fogalmaztak meg. Először: mielőtt bármit egy ügynökre bízunk, főleg egyetlen példányban létező fényképeket vagy dokumentumokat, legyen róla biztonsági mentés. Másodszor: az agent kapjon saját, elzárt munkaterületet (sandboxot), ahol pontosan szabályozott, mihez férhet hozzá. Ehhez a saját gép sem kell, a Claude és az OpenAI is kínál felhős, elszeparált futtatást, de helyben Dockerrel is megoldható. Különösen indokolt az óvatosság, ha az ügynök a böngészőt vagy az egész számítógépet kezeli (computer use), és a gépen tárolt titkos kulcsokhoz is hozzáférhetne. Hétköznapi használatnál, ahol ilyen kockázat nincs, a vendégek szerint a saját gép is elfogadható.
