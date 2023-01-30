## ANDROID SETUP
Um die App zum laufen zu bringen, bitte folgende Schritte befolgen:

1. Repository klonen

2. Android Studio installieren (z.B. Wie das geht, steht <a href="https://developer.android.com/studio/install">hier</a>.)

3. Im root-Ordner des Projekts das Terminal öffnen

4. Alle erforderlichen packages installieren mit `npm install`

5. Die App für Android bauen mit `ionic cap build android` (Daraufhin sollte sich Android Studio mit dem Projekt öffnen.)

6. App icons in das Android Projekt übertragen mit `npx cordova-res` im root-Ordner

7. Ein Android Handy per USB mit dem PC verbinden und in Android Studio auswählen </br>
<img src="https://i.stack.imgur.com/Cc4Zi.jpg" width="350px">

8. App ausführen mit dem "Run"-Button in Android Studio </br>
<img src="https://blog.fidel.uk/content/images/2020/08/run_app.png" width="350px">
