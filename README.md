> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)


<img width="1196" alt="Screenshot 2023-04-05 at 19 39 59" src="https://user-images.githubusercontent.com/94745953/230168091-ae712b81-02d5-4e43-97f6-ac8433530fbd.png">






# <img width="408" alt="logo-oba" src="https://user-images.githubusercontent.com/94745953/225242980-92f7cab6-c465-4705-b821-de7962871d18.png">



## Inhoudsopgave

  * 📝 [Beschrijving van opdracht](#beschrijving)
  * 🖇 [Kenmerken](#kenmerken)
  * ⬇️ [Installatie](#installatie)
  * 🖥 [Gebruik](#gebruik)
  * 📚 [Bronnen](#bronnen)
  * 👾 [Licentie](#licentie)

## 📝 Beschrijving
Userstory: Als oba lid wil ik de zoekresultaten kunnen filteren of sorteren, zodat ik gericht kan zoeken naar interessante boeken, cursussen en activiteiten.

Voor deze opdracht heb ik de optie om te reserveren gekoppeld aan de website, hierdoor kunnen leden boeken, cursussen en activiteiten reserveren. Met gebruik van Post Api van oba heb ik de api kunnen koppelen waardoor nu leden op de detail pagina een boek, activiteit en cursus kunnen reserveren. 


link: https://tricky-shawl-fawn.cyclic.app
## 🖇 Kenmerken

- Rest Api
- Node.js
- Javascript
- HTML & CSS
- dotenv( bescherming Api key)
- VScode
- Cyclic

## ⬇️ Installatie

### NPM

Voordat ik aan dit project ging werken heb ik eerst NPM install gedaan omdat we gaan werken met rest api en databases.
Wanneer je npm install uitvoert, leest npm het package.json-bestand in de hoofdmap van je project, dat de afhankelijkheden voor het project vermeldt. Vervolgens downloadt en installeert het die afhankelijkheden in de node_modules map in het project.

Express is een webframework voor Node.js dat wordt gebruikt voor het bouwen van webapplicaties en API's. EJS is een templating engine die wordt gebruikt voor het genereren van dynamische HTML-pagina's op basis van gegevens vanuit een server. In combinatie worden Express en EJS vaak gebruikt voor het bouwen van dynamische websites

### .gitignore en .env

Voor dit project heb ik .env gebruikt omdat wij met echte data gingen werken. Om Api key te beschermen heb ik een .env mapje aangemaakt en daar API key aangekoppeld. Api key van Oba is hierdoor beschermd. Door .env in de gitignore mapje te plaatsen gaat de API key niet mee naar github en is dit niet zichtbaar online. 


### Progressive Enhancement
Om ervoor te zorgen dat iedereen toegang heeft tot het project, heb ik de methode "progressive enhancement" gebruikt. Hierbij heb ik eerst de inhoud van de webpagina opgebouwd met behulp van HTML, geïntegreerd in EJS. Vervolgens heb ik functionaliteit toegevoegd door middel van een formulier dat de POST-methode gebruikt. Voor CSS heb ik  diverse CSS-stijlen gebruikt om de website te stijlen in de huisstijl van OBA. Ten slotte heb ik een zoekbalk gemaakt met behulp van JavaScript en Node gebruikt om data van OBA api op te halen. 


## 🖥 Gebruik
- Oba API
- Json file: boeken, cursussen en activiteiten

## 📚 Bronnen
- MDN docs
- Youtube
- google
- can i use website

## 👾 Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
