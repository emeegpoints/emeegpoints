EMEEG POINTS - customer phone app (PWA)
=======================================
These files are the phone app your customers use to check their points.
Put them on a free GitHub Pages site (the same way as your MG website):

1. Go to github.com and sign in.
2. Click "+" (top right) > New repository.
   Name: emeeg-points  -  Public  -  Create repository.
3. Click "uploading an existing file". Drag ALL the files and folders from
   this zip (index.html, config.js, sw.js, manifest.webmanifest, icons, img)
   into the page. Click "Commit changes".
4. Open Settings > Pages. Under "Branch" choose "main" and "/ (root)", Save.
5. After 1-2 minutes your app is online at:
      https://YOUR-GITHUB-NAME.github.io/emeeg-points/
6. Paste that link in the EMEEG Loyalty app:
   Settings > Customer phone app > step 4, then "Save & sync now".

Giving it to customers
- Member page > "Print app slip": a slip with a QR code, the card number and
  the customer's PIN. They scan the QR, type the PIN, and tap "Install app"
  (Android) or Share > "Add to Home Screen" (iPhone).

Notes
- config.js holds your Supabase Project URL and publishable key. These are
  meant to be public; customers still only see THEIR card, and only with the
  right PIN. Never put the Supabase "secret" / service_role key here.
- If you change the Supabase project, download the files again from the
  Loyalty app and upload the new config.js to GitHub.
