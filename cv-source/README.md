# Source du CV

`cv.html` est la **source unique** du CV publié en `public/cv.pdf`.
Modifier le HTML, puis régénérer le PDF :

```bash
npx --yes playwright@latest --version >/dev/null   # si playwright n'est pas déjà installé
node -e "
const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + process.cwd() + '/cv-source/cv.html', { waitUntil: 'networkidle' });
  await p.pdf({ path: 'public/cv.pdf', format: 'A4', printBackground: true });
  await b.close();
})();
"
```

## Contrainte à respecter

Le CV doit tenir sur **une seule page A4**. La taille de corps est calibrée à
`8.7pt` : au-delà de `8.8pt`, le contenu déborde sur une deuxième page.
Après toute modification, vérifier :

```bash
pdfinfo public/cv.pdf | grep Pages   # doit afficher : Pages: 1
```

## À mettre à jour

L'URL du portfolio apparaît dans l'en-tête (`portfolio-powerbi.vercel.app`).
La remplacer par l'URL Vercel réelle une fois le site déployé.
