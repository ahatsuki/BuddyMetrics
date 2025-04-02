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
1. Clone de repository:
   ```
   git clone https://github.com/jouw-gebruikersnaam/wedstrijd-statistieken.git
   ```

2. Open de map:
   ```
   cd wedstrijd-statistieken
   ```

3. Open het HTML-bestand in een webbrowser:
   ```
   open "Wedstrijd statistieken.html"
   ```

### Als PWA installeren
De app kan worden geïnstalleerd als een Progressive Web App op verschillende apparaten:

1. Open de app in een moderne browser (Chrome, Edge, Safari, Firefox)
2. Klik op de "Installeer App" knop in de navigatiebalk
3. Volg de instructies om de app te installeren
4. De app is nu beschikbaar op je startscherm/bureaublad en werkt ook offline

> **Opmerking**: Voor volledige PWA-functionaliteit moeten de app-iconen in de icons/ map worden aangevuld met echte afbeeldingen.

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

## Licentie

© 2025 Wedstrijd Statistieken App | Ontwikkeld door Ahatsuki Studio

Alle rechten voorbehouden. Ongeautoriseerd gebruik of distributie is niet toegestaan. 