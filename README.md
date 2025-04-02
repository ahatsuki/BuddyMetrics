# Wedstrijd Statistieken

Een interactieve webapplicatie voor het bijhouden van statistieken voor teamsport wedstrijden. Ideaal voor coördinatoren, coaches en teams die gegevens willen bijhouden over aanwezigheid, te laat komen, overwinningen en verliezen.

> **Opmerking**: Deze applicatie is een doorontwikkeling van de oorspronkelijke "Voetbal Statistieken" app. Alle verwijzingen naar voetbal zijn verwijderd om de app geschikt te maken voor elke teamsport.

## Functionaliteiten

- Spelers toevoegen en beheren
- Aanwezigheid en te laat komen registreren
- Teams samenstellen
- Wedstrijdresultaten vastleggen
- Statistieken bijhouden en visualiseren
- Top spelers bekijken (winnaars, te laat)
- Win- en verliesreeksen bijhouden
- Maandelijkse prestaties analyseren
- Statistieken exporteren
- Gegevens opslaan en laden
- Progressive Web App (PWA) - installeerbaar op apparaten
- Offline functionaliteit

## Installatie en Gebruik

### Webapplicatie
Volg deze stappen om de Wedstrijd Statistieken webapplicatie op je computer te installeren:

1. **Maak een nieuwe map aan op je bureaublad**
   - Klik met de rechtermuisknop op je bureaublad.
   - Selecteer 'Nieuw' en vervolgens 'Map'.
   - Geef de map de naam `WedstrijdStatistieken`.

2. **Open de Opdrachtprompt (CMD)**
   - Klik op de Start-knop (Windows-logo linksonder op je scherm).
   - Typ `cmd` in de zoekbalk.
   - Klik op 'Opdrachtprompt' om het te openen.

3. **Kopieer en plak de volgende opdracht in de CMD**
   - Typ `cd Desktop\WedstrijdStatistieken` en druk op Enter om naar de map te gaan die je zojuist hebt gemaakt.
   - Kopieer de volgende opdracht:
     ```
     git clone https://github.com/jouw-gebruikersnaam/wedstrijd-statistieken.git
     ```
   - Plak het in de CMD door met de rechtermuisknop te klikken en 'Plakken' te selecteren, en druk op Enter.

4. **Open de map in de Verkenner**
   - Ga naar je bureaublad en open de map `WedstrijdStatistieken`.
   - Dubbelklik op de map `wedstrijd-statistieken` die je zojuist hebt gedownload.

5. **Open het HTML-bestand in een webbrowser**
   - Zoek het bestand `Wedstrijd statistieken.html` in de map.
   - Dubbelklik op het bestand om het in je standaard webbrowser te openen.

### Als PWA installeren
De app kan worden geïnstalleerd als een Progressive Web App op verschillende apparaten:

1. Open de app in een moderne browser (Chrome, Edge, Safari, Firefox).
2. Klik op de "Installeer App" knop in de navigatiebalk.
3. Volg de instructies om de app te installeren.
4. De app is nu beschikbaar op je startscherm/bureaublad en werkt ook offline.

### Updates en Wijzigingen

Wanneer er een nieuwe versie van de app beschikbaar is:

1. **Update Melding**: 
   - Je krijgt automatisch een pop-up melding te zien wanneer er een nieuwe versie beschikbaar is.
   - De pop-up toont:
     * Het nieuwe versienummer (bijvoorbeeld van 1.0.0 naar 1.1.0)
     * Een korte samenvatting van de belangrijkste wijzigingen
     * Knoppen voor "Nu Updaten" of "Later"
   - Bij belangrijke updates zie je een rode stip op het menu-icoon tot je de update installeert

2. **Soorten Updates**:
   - **Kleine Updates** (bijvoorbeeld 1.1.0 naar 1.1.1):
     * Kleine verbeteringen en bugfixes
     * Worden automatisch geïnstalleerd bij het verversen van de app
     * Je ziet een korte melding onderaan het scherm
   - **Grote Updates** (bijvoorbeeld 1.1.0 naar 1.2.0):
     * Nieuwe functies en belangrijke verbeteringen
     * Tonen een grote pop-up met details
     * Vragen om je toestemming voor installatie

3. **Changelog Bekijken**:
   - Klik op het menu-icoon rechtsboven in de app
   - Selecteer "Changelog" om alle recente wijzigingen te bekijken
   - Of bekijk [CHANGELOG.md](CHANGELOG.md) voor een volledig overzicht van alle updates
   - Bij elke update zie je:
     * Datum van de update
     * Versienummer
     * Lijst met nieuwe functies
     * Lijst met verbeteringen
     * Opgeloste problemen

4. **Automatische Updates**:
   - Als je de app als PWA hebt geïnstalleerd, worden updates automatisch gedownload
   - Bij de volgende keer opstarten krijg je een melding dat de nieuwe versie klaar staat
   - Je kunt kiezen om direct te updaten of dit later te doen
   - Updates worden alleen gedownload via WiFi om je mobiele data te sparen

> **Tip**: Het is aan te raden om updates direct te installeren voor de beste ervaring en nieuwste functies. Bij het uitstellen van updates krijg je elke 24 uur een herinnering totdat je de update installeert.

### Waarom als PWA installeren?

Het installeren van de Wedstrijd Statistieken app als een Progressive Web App (PWA) biedt verschillende voordelen:

- **Automatische Updates**: De app wordt automatisch bijgewerkt wanneer je deze opent met een internetverbinding. Dit betekent dat je altijd de nieuwste functies en verbeteringen hebt zonder handmatig te hoeven updaten.

- **Offline Toegang**: Eenmaal geïnstalleerd, kun je de app gebruiken zonder internetverbinding. Eerder geladen gegevens blijven beschikbaar en wijzigingen worden gesynchroniseerd zodra er weer verbinding is.

- **Native App Ervaring**: De app gedraagt zich als een native applicatie op je apparaat, met een eigen pictogram op je startscherm of bureaublad.

- **Meldingen voor Updates**: We werken aan een functie die je een melding geeft wanneer er een nieuwe update beschikbaar is. Je kunt dan kiezen om de update direct te installeren voor de beste ervaring.

Door de app als PWA te installeren, profiteer je van een soepelere en meer geïntegreerde gebruikerservaring.

## Handleiding

### Spelers beheren
- Gebruik het formulier "Speler Toevoegen" om nieuwe spelers toe te voegen
- In de spelerslijst kun je statistieken bijhouden, spelers bewerken of verwijderen
- Sleep spelers om de volgorde aan te passen

### Teams en wedstrijden
- Selecteer spelers voor Team 1 en Team 2
- Gebruik "Overwinning Team 1" of "Overwinning Team 2" om het resultaat vast te leggen
- Met "Reset Teams" kun je beide teams leegmaken

### Statistieken
- De top 3 laatkomers worden weergegeven in een podium
- De top 5 winnaars worden getoond in een ranglijst
- Bekijk win- en verliesreeksen in het "Prestatie Overzicht"
- De "Speler van de Maand" wordt automatisch berekend

### Gegevensbeheer
- Gebruik "Opslaan" om gegevens op te slaan in een JSON-bestand
- Gebruik "Laden" om eerder opgeslagen gegevens te importeren
- "Ongedaan maken" en "Opnieuw" knoppen voor het herstellen van acties
- Met "Reset" kun je alle statistieken terugzetten naar 0
- "Verwijder" wist alle spelers permanent (na bevestiging)
- "Uitdraai Resultaten" maakt afbeeldingen van de statistieken

### Offline gebruik
- De app blijft werken zonder internetverbinding
- Eerder geladen gegevens blijven beschikbaar
- Wijzigingen worden lokaal opgeslagen en gesynchroniseerd wanneer er weer verbinding is

## Bijdragen

Bijdragen zijn welkom! Als je een bug vindt of een verbetering wilt voorstellen, maak dan een issue aan of stuur een pull request.

## Changelog

Zie [CHANGELOG.md](CHANGELOG.md) voor een gedetailleerde lijst van wijzigingen.

## Steun het Project

Vind je de Wedstrijd Statistieken app nuttig en wil je de ontwikkeling ondersteunen? Je kunt ons op verschillende manieren steunen:

- ☕ [Buy me a Coffee](https://buymeacoffee.com/AhatsukiStudio)
- 💝 [PayPal Donatie](https://www.paypal.com/paypalme/AhatsukiStudio)

Elke bijdrage wordt enorm gewaardeerd en helpt ons om de app te blijven verbeteren en nieuwe functies toe te voegen. Bedankt voor je steun! 🙏

## Licentie

© 2025 Wedstrijd Statistieken App | Ontwikkeld door Ahatsuki Studio

Alle rechten voorbehouden. Ongeautoriseerd gebruik of distributie is niet toegestaan. 