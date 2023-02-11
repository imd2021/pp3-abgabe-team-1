# BOB
Diese App ist ein Prototyp für **BOB** (Bahnfahren ohne Belästigung). Es handelt sich hierbei um ein System, welches Opfern von Belästigung im ÖPNV ermöglicht, sich schnell Hilfe zu holen. Der Prototyp wurde vorerst nur für Android optimiert.

<br />

## ANDROID SETUP
Um die App auf einem Android-Gerät zum Laufen zu bringen, bitte folgende Schritte befolgen:

1. Repository klonen

2. Android Studio installieren (z.B. Wie das geht, steht <a href="https://developer.android.com/studio/install">hier</a>.)

3. Im root-Ordner des Projekts das Terminal öffnen

4. Alle erforderlichen Packages installieren mit `npm install`

5. Die Android-App mit `npx ionic cap build android` erstellen (Daraufhin sollte sich Android Studio mit dem Projekt öffnen.)

6. Die App-Icons aus dem resources-Ordner mit `npx cordova-res android --skip-config --copy` in den Android-Build einbauen (über das Terminal) und alle 5 Ordner unter `/resources/android/notification-icons/` in `/android/app/src/main/res/` hineinkopieren

7. Um der App Zugriff auf Standortdienste zu geben, folgende Zeilen über Android Studio in "AndroidManifest.xml" unter "<!- Permissions ->" einfügen (Die Datei befindet sich in Android Studio unter `/app/manifest/AndroidManifest.xml`)
```
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-feature android:name="android.hardware.location.gps" />
```

8. Ein Android Handy per USB mit dem PC verbinden und in Android Studio auswählen </br>
<img src="./pictures/choosingDevice.png" width="400px">

9. App ausführen mit dem "Run"-Button in Android Studio </br>
<img src="./pictures/runApp.png" width="400px">

<br />
<br />

## WEB SETUP
1. Repository klonen

2. Im root-Ordner des Projekts das Terminal öffnen

3. Alle erforderlichen Packages installieren mit `npm install`

4. Web-App starten mit `npm start`

(<span style="color: orange">**Wichtig:**</span> Die Anwendung verfügt in der Browser-Version nicht über alle wichtigen Funktionen. Sie dient ausschließlich zum Testen und Entwickeln.)