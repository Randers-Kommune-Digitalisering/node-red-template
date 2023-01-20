# node-red-template
Indeholder en basis node-red. 
Før templates bruges skal version af node-red sættes til den ønskede i `package.json` under version og dependencies.

## Udvikling
Denne template indeholder en tom node-red. For at starte node-red startes docker-compose.yaml, denne bygger og starte nod-red samt en mariadb.

Når flows udvikles og er klar til produktion eller der er behov for at genstarte nod-red. Skal flows exporteres til `flows.json` i mappen node-red. Dette gøres ved at klikke i node-red menuen -> Export -> Current Flow -> Copy to clipboard. Her efter ersates indholdet i `flow.json` filen med indholdet kopiret.

### Tilføjelse af Platte / Dependencies
Er der behov for at tilføje udvidelser til node-red, gøre dette ved at tilføje den ønskede udvidelse til `package.json` under dependencies. Her tilføjes navnet på udvidelsen og version der ønskes. Her efter genstartes node-red og udvidelsen er nu installeret.

## Logs og metrikker
Ønskes der er skrive til log, kan dette gøre med `debug` kompunentet. Denne sættes til at sende log til `system console`.  
![log.png](images%2Flog.png)

Det er muligt at udstille metrikker som Promethues kan scrape og efterfølgende vise i Grafana. Dette kan gøres med pakken `node-red-contrib-prometheus-exporter` der er tilføjet dependencies i `package.json`. Før Promethues modulet indsættes en function der beskriver metrikken.  
![metrik.png](images%2Fmetrik.png)


## Udgivelse af version
Når der push til Github, bliver der bygget et docker image indeholdene filerne `flows_cred.json`, `flows.json`, `package.json` og `settings.js`. Hvis bygget går godt bliver docker image lagt under pacges på Github med version tag svarede til commit id'et. 
Når en version er klar til test i prototypes laves der en tagget version. Dette gøres ved at oprette et git tag. Tagget skal være på formen v*.*.* fx v1.2.3. Når tagget push til Github bygges en version med tagget og gemmes under packges på Github.

