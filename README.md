# Node-RED template-projekt
Template til nye Node-RED projekter.
Projekt indeholder en tom Node-RED og paletterne
* node-red-contrib-mysql-config
* node-red-contrib-prometheus-exporter

# Brug af node-red-template
1. Klik "use this template -> create a new repository"
2. Udfyld skærmbillede med information om den nye service
3. Åbn dit nye git projekt

# NytNode-RED projekt
Nedenstående relaterer sig til et nyt Node-RED projekt der er baseret på denne template.

## Udvikling i et Codesspace:

> docker-compose up --build

Starter et lokalt docker-compose miljø, der bygger og starter Node-RED og en mariadb.

Ved byg af Node-RED kopieres følgende filer ind i containeren:
* [node-red/package.json](node-red/package.json)
* [node-red/settings.js](node-red/settings.js)
* [node-red/flows_cred.json](node-red/flows_cred.json)
* [node-red/flows.json](node-red/flows.json)
