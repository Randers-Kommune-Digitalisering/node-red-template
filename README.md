# Node-RED template-projekt
Template til nye Node-RED projekter.
Projekt indeholder en tom Node-RED og paletterne
* node-red-contrib-mysql-config
* node-red-contrib-prometheus-exporter

## Opdatering af version og/eller standard palette
Paletter kan tilføjes/fjernes eller opdateres under 'dependencies' i filen [node-red/package.json](node-red/package.json).
<br>
Node-RED er selv en dependency til Node JS projektet og opdateres derfor på samme måde.

# 'Mit' Node-RED projekt
Nedenstående relaterer sig til et nyt Node-RED projekt der er baseret på denne template.

## Lokalt udviklingsmiljø
> docker-compose up --build

Starter et lokalt docker-compose miljø, der bygger og starter Node-RED og en mariadb.

Ved byg af Node-RED kopieres følgende filer ind i containeren:
* [node-red/package.json](node-red/package.json)
* [node-red/settings.js](node-red/settings.js)
* [node-red/flows_cred.json](node-red/flows_cred.json)
* [node-red/flows.json](node-red/flows.json)
<br>

### Udvikling
Når flowet er færdigudviklet skal det eksporteres til [node-red/flows.json](node-red/flows.json).
<br>
Dette gøres ved at klikke i node-red menuen
* menu -> Export -> Current Flow -> Copy to clipboard. 

Herefter erstattes indholdet i 'flows.json' med det kopierede indhold.

### Tilføjelse af Platte / Dependencies
Er der behov for at tilføje udvidelser ifm. det udviklede flow, kan disse installeres dynamisk via Node-RED menuen
* menu -> Manage palette.

For at gøre tilføjelsen permanent skal den tilføjes til filen [node-red/package.json](node-red/package.json) under 'dependencies'. Her tilføjes navnet på udvidelsen og version der ønskes.
<br>

### Logs og metrikker
Skrivning til log gøres med 'debug'-noden, der sættes til at sende log til 'system console'.
<br>
![log.png](images/log.png)

Udstilling af metrik gøres med 'prometheus out'-noden, som er en del af paletten 'node-red-contrib-prometheus-exporter'.
<br>
Det er muligt at udstille metrikker som Prometheus kan scrape og efterfølgende vise i Grafana. 
Input til metrikken kommer fra en function-node der beskriver metrikken.
<br>
![metrik.png](images/metrik.png)


## Udgivelse af version
Ved push til Github, bliver der bygget et docker image. Hvis bygget går godt bliver docker imaget pushet til [GitHub packages](https://github.com/orgs/Randers-Kommune-Digitalisering/packages) med version tag svarede til commit id'et. 

### Release
```
git tag v1.0.0
git push origin --tags
```

Når der skal laves en release oprettes et git tag. Tagget skal være på formen v*.*.* fx v1.2.3.
<br>
Når et tag pushes til Github bygges en version med tagget og gemmes under packges på Github.
