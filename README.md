## ANDROID SETUP
Um die App auf einem Android-Gerät zum Laufen zu bringen, bitte folgende Schritte befolgen:

1. Repository klonen

2. Android Studio installieren (z.B. Wie das geht, steht <a href="https://developer.android.com/studio/install">hier</a>.)

3. Im root-Ordner des Projekts das Terminal öffnen

4. Alle erforderlichen packages installieren mit `npm install`

5. Die Android-App mit `npx ionic cap build android` erstellen (Daraufhin sollte sich Android Studio mit dem Projekt öffnen.)

6. Die App-Icons aus dem resources-Ordner mit `npx cordova-res android --skip-config --copy` in den Android-Build einbauen und mit `npx ionic cap sync` synchronisieren

7. ```
    experiments: {
      topLevelAwait: true,
    },
8. Ein Android Handy per USB mit dem PC verbinden und in Android Studio auswählen </br>
<img src="./pictures/choosingDevice.png" width="400px">

9. App ausführen mit dem "Run"-Button in Android Studio </br>
<img src="./pictures/runApp.png" width="400px">

## WEB SETUP
1. Repository klonen

2. Im root-Ordner des Projekts das Terminal öffnen

3. Alle erforderlichen packages installieren mit `npm install`

4. Web-App starten mit `npm start`

(**Wichtig:** Die Anwendung verfügt in der Browser-Version nicht über alle wichtigen Funktionen. Sie dient ausschließlich zum Testen und Entwickeln.)