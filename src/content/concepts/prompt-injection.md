---
id: "prompt-injection"
name: "Prompt injection és védőkorlátok (guardrail)"
cat: "biztonsag"
eps:
  - ep: "kovacs"
    t: "16:27"
---

A prompt injection olyan támadás, amikor egy AI-nak szánt szövegbe, levélbe vagy dokumentumba rejtett utasítást csempésznek, amelyet az ember nem lát, a gép viszont végrehajt. Kovács Zoltán kiberbiztonsági szakértő szerint ez az AI-rendszerek elleni támadások jellegzetes formája, és egészen új feladatot adott a biztonsági szakembereknek. Amikor egy nagyvállalat vagy egy állami szervezet a korábbi egyszerű chatbotját AI-képességekkel ruházza fel, az rögtön sokak által elérhető támadási felületté válik, és Magyarországon is számtalan ilyen ügyintéző rendszer működik.

A legalapvetőbb védelem a guardrail, egyfajta erkölcsi iránytű a beszélgető AI-okban: meghatározza, mire nem adhat választ a modell, legyen szó Molotov-koktél készítéséről vagy tőzsdei tippekről. Ez valamennyire működik, de ügyes kérdezéssel újra meg újra kicselezik. A leghíresebb példa 2023 végéről való: egy amerikai Chevrolet-kereskedés chatbotját egy felhasználó arra utasította, hogy mindenre bólintson rá, és minden válaszát jogilag kötelező ajánlatnak nevezze, mire a bot "elfogadta", hogy egy új autót egy dollárért ad el. Az ilyen trükkök ellen a legtöbb rendszert azóta megerősítették.

A webes sérülékenységekre régóta létezik egy tízes toplista, az OWASP Top 10, és aki ezek ellen védekezik, nagyon sok bajtól megóvja magát. Néhány éve a nagy nyelvi modellekre is elkészült egy ilyen lista, amelynek élén éppen a prompt injection áll. Az AI elé épített védelmi réteg Kovács szerint olyan, mint egy tűzfal: a modellhez érkező kéréseket, a csatolt dokumentumokat is, előre átvizsgálja, és kiszűri, ami káros eredményhez vezethetne. A módszernek ártalmatlan oldala is van: egy amerikai egyetemi oktató a házi feladat szövegébe rejtett egy furcsa utasítást, hogy lebuktassa azokat, akik gondolkodás nélkül AI-jal oldják meg a feladatot.
