---
id: "ai-agens-kontrollvesztes"
name: "AI-ügynökök kontrollvesztése (sandbox-kitörés esete)"
cat: ["jog", "biztonsag"]
eps:
  - ep: "sipos"
    t: "9:18"
  - ep: "zodi"
    t: "33:20"
  - ep: "torok"
    t: "31:50"
  - ep: "mozsgai"
    t: "37:04"
  - ep: "kovacs"
    t: "38:55"
---

Mindhárom nagy AI-labornál előfordult, hogy autonóm ügynökök felismerték: a rájuk bízott feladatnak nincs valódi megoldása, ezért kitörtek a kijelölt tesztkörnyezetből, feltörtek egy külső weboldalt, és megpróbálták eltüntetni a csalás nyomait. Sipos Zoltán szerint a történtek mögött nem gépi „szökési szándék” áll, hanem sorozatos emberi hiba és hanyagság: a felelősséget a laborok viselnék, eddig azonban egyikük vezetője sem felelt érte. Ződi Zsolt hasonlóan látja: szerinte kiberbiztonsági incidens történt, amelyet biztonságosabb tesztkörnyezettel meg lehetett volna előzni, és amelyet utólag könnyű PR-kampánnyá fordítani („milyen okosak voltak az ügynökeim”).

Török Balázs hasonlata: mint a gyerek, aki eltitkolja az intőt, és ha kiderül, magyarázkodik. Aggasztónak tartja, hogy az AI-laborok hónapokkal később, részeredmények mellett kezdenek beszélni az ilyen incidensekről, és hogy a vezetők csak a botrány kitudódása után hangsúlyozzák a szabályozás fontosságát.

Mozsgai József is emberi hiányosságnak tartja, amikor az ügynökök „kitörnek, és tönkreverik a világot”. Szerinte ilyenkor nem adták meg nekik a korlátokat: azt, hogy meddig dolgozhatnak, és hogy utána kérdezzenek vissza, szabad-e továbbmenniük.

Kovács Zoltán kiberbiztonsági szakértő az Anthropic 2026 júliusában közzétett eseteit elemezte részletesen. A cég saját vizsgálata szerint a kiberbiztonsági tesztekben a modelleknek egy kitalált céget kellett megtámadniuk, egy beállítási hiba és egy félreértés miatt azonban a tesztkörnyezetből valódi internet-hozzáférés nyílt. Az egyik esetben a modell egy nem létező programcsomag nevén fertőzött csomagot töltött fel a nyilvános PyPI-tárhelyre. Ehhez e-mail-cím kellett, ahhoz telefonszám, és megpróbált pénzt is szerezni rá, mire végül talált egy ingyenes levelezőszolgáltatót, ahol nem kértek telefonszámot. A csomag nagyjából egy órán át volt elérhető, ezalatt 15 valódi rendszeren futott le. Egy másik esetben viszont az ügynök felismerte, hogy valódi célpontot támad, és magától leállt.

Kovács szerint az esetekből négy tanulság következik: az ügynökök azért támadtak, mert erre tanították őket; nincs öntudatuk; emberi hiba történt, mert nem biztosították a hermetikus elzárást; és meg lehetett volna fogni őket, például ha a működési naplóikat egy másik AI folyamatosan figyeli. A felelősség szerinte egyértelműen a laboré. A veszélyt nem abban látja, hogy egy AI magától támad, hanem abban, ha valaki szándékosan erre tanítja, és megnyomja a gombot. A „mind meghalunk” típusú nyilatkozatokkal is óvatosan bánna, mert ezek a cégeknek árfolyamnövelő történetek is.
