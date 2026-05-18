# Portfolio - Matthias Holzschneiders

Stack : **React 18 + Vite + Tailwind CSS + Framer Motion**

## Démarrage rapide

```bash
npm install
npm run dev
```

## Build & Déploiement sur GitHub Pages

### 1. Installer les dépendances
```bash
npm install
```

### 2. Mettre à jour `vite.config.js`
Dans `vite.config.js` base doit avoir le nom exact du repo GitHub :
```js
base: '/nom-de-ton-repo/',
```

### 3. Initialiser GitHub Pages
Dans `package.json`, la propriété `homepage` doit pointer vers :
```
https://Matthias2007.github.io/nom-de-ton-repo
```

### 4. Déployer
```bash
npm run deploy
```
Cette commande build le projet et push le dossier `dist/` sur la branche `gh-pages`.

### 5. Configurer GitHub
Dans les settings du repo → Pages → Source : branche `gh-pages`, dossier `/ (root)`.

---

## Structure du projet

```
src/
├── components/
│   ├── Layout.jsx        # Header + Footer + Nav
│   └── PageTransition.jsx
├── pages/
│   ├── Home.jsx
│   ├── Projects.jsx
│   ├── CV.jsx
│   └── Contact.jsx
├── App.jsx               # Router
├── main.jsx              # Entry point
└── index.css             # Tailwind + custom styles
```

## Ajouter un projet

Dans `src/pages/Projects.jsx`, ajoute un objet dans le tableau `projects` :

```js
{
  num: '004',
  title: 'Nom du projet',
  subtitle: 'Courte description',
  description: 'Description longue...',
  tags: ['Python', 'React'],
  github: 'https://github.com/...',
  accent: '#00e5ff',
  status: 'En cours',
}
```
