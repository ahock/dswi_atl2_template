# DSWI ATL2 Template

> Erzeugt ein neues Verzeichnis von dem die Template-Dateien kopiert werden können.

# Online Nachschlagewerke
Code for class Application Engineering ATL 2
Git-Befehle:https://rogerdudler.github.io/git-guide/index.de.html
MarkDown-Hilfe:https://help.github.com/categories/writing-on-github/
[Dillinger Online Editor](http://dillinger.io)
JSON-Online Editor:http://www.jsoneditoronline.org/

> Beschreibung der Komponente, welche vom Dozenten bereitgestellt wird.

# APPL ATL2 – Bereitgestellte Komponenten

# 1.	Installation
## 1.1	Voraussetzung
-	In C9.io wurde ein neuer Workspace von Typ node.js angelegt.
-	Es sind die Verzeichnisse „client/js“ und „data“ vorhanden
## 1.2 Vor dem ersten Start
bash
```sh
$ npm install
```
- Doppelklick auf das File **server.js**
- Runner auf **Node 0.10.x** umstellen
- Auf **RUN** klicken
- Angegebene URL + /test.html aufrufen
- **Open the App** - Meldung bestätigen
Der folgende Text wird ausgegeben, als Bestätigung, dass die Logik funktioniert:
>Unterrischtspräsenz
>DSWI 13H - APPL
>08.09.2014
>Roman Arocker[true,true]; Aris Arslani[true,false]; Karin Bächli[true,true]; Marko Buric[true,false]; Hasan Calik[true,true]; Roman Gerber[true,false]; Tobias Guillemin[true,true]; Nathalie Imark[false,false]; Yves >Lüdin[false,true]; Sven Meier[false,true]; Fabian Messmer[true,true]; Mümine Palandizlar[true,true]; Sandro Scherrer[false,true]; Andreas Schmid[false,false]; Jennifer Meier[true,false]; 
>10.09.2014
>Roman Arocker[true,true]; Aris Arslani[true,true]; Karin Bächli[true,true]; Marko Buric[true,true]; Hasan Calik[true,true]; Roman Gerber[true,true]; Tobias Guillemin[true,true]; Nathalie Imark[true,true]; Yves Lüdin[true,true]; >Sven Meier[true,true]; Fabian Messmer[true,true]; Mümine Palandizlar[true,true]; Sandro Scherrer[true,true]; Andreas Schmid[true,true]; Jennifer Meier[true,true]; 
>DSWI 12H - APPL
>13.09.2014 ...


```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

## 1.2	Dateien
Die Dateien sind auf der Lernplattform unter ATL2/C9.io-Dateien_ zu finden.
### 1.2.1	logic.js
Enthält die Business-Logic und muss entsprechend in der HTML-Datei eingebunden werden.
### 1.2.2	server.js
Enthält den eigentlichen Web-Server zum Ausliefern von HTML-Seiten im Unterverzeichnis „client“. Es wird die node.js-Bibliothek „express“ verwendet, welche installiert sein muss.
### 1.2.3	dataset.json
Enthält die eigentlichen Daten und kann in C9.io eingesehen und verändert werden. 
## 1.3	Installation
<workspace> steht für den Namen des individuell angelegten Workspace in C9.io.
-	Die Datei „logic.js“ wird in das Verzeichnis „<workspace>/client/js“ kopiert.
-	Die Datei „server.js“ wird in das Verzeichnis „<workspace>“ kopiert.
-	Die Datei „dataset.json“ wird in das Verzeichnis „<workspace>/data“ kopiert.

# 2.	Verwendung Klasse „praesenzen“
## 2.1	praesenzen() - Initialisierung
praesenzen(callback)

Konstruktor der Klasse praesenzen.

callback
Die Funktion, die aufgerufen wird, wenn das Objekt vollständig angelegt wurde.

## 2.2	save(callback)

Speichert das Objekt auf dem Server.

callback
Die Funktion, die aufgerufen wird, nachdem das Objekt vollständig gesichert wurde.

## 2.3	getFachListe()

Liefert das Array der Fächer mit allen Einträgen.

## 2.4	setFachById(id)

Setzt das aktuell ausgewählte Fach auf die Id.

id
Die Id, auf die das aktuell ausgewählte Fach gesetzt wird.

## 2.5	setFachByName(name)

Setzt das aktuell ausgewählte Fach auf das Fach mit dem Namen „name“.

name
Name des Faches, welches zum aktuellen Fach wird.

## 2.6	getEventListe()

Liefert ein Array mit allen Events (Daten, Teilnehmern,...) zum aktuellen Fach.

## 2.7	setEventById(id)

Setzt den aktuell ausgewählten Event des aktuellen Faches auf den Event mit der Id „id“.

id
Die Id des zu wählenden Event des aktuellen Fachs.


## 2.8	getTeilnehmerListe()

Liefert ein Array mit allen Teilnehmern (Namen, Präsenzen,...) zum aktuellen Event.

## 2.9	setPraesenzById( id, part, prae)

Setzt die Anwesenheit eines Teilnehmers mit der Id id. Über part wird die erste oder die zweite Hälfte des Events ausgewählt. Über prae wird gesteuert, ob anwesend (TRUE) oder abwesend (FALSE).

id
Die id des betroffenen Teilnehmers.

part
Bestimmt, welche Hälfte des Events betroffen ist.
"H1" = Erste Hälfte des Events.
"H2" = Zweite Hälfte des Events.

prae
Bestimmt, ob anwesend oder abwesend.
TRUE = Anwesend.
FALSE = Abwesend.

## 2.10	setAllPraesenz()

Setzt alle Präsenzen aller Teilnehmer dieses Events auf „anwesend“ (TRUE).

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md] [PlDb] |
| Github | [plugins/github/README.md] [PlGh] |
| Google Drive | [plugins/googledrive/README.md] [PlGd] |
| OneDrive | [plugins/onedrive/README.md] [PlOd] |
| Medium | [plugins/medium/README.md] [PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md] [PlGa] |
