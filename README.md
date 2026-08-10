# Portfolio — Abdoulaye Diallo Diogo

Portfolio personnel de **Abdoulaye Diallo Diogo**, développeur informatique.

Ce projet présente mon parcours, mes compétences, mes projets réalisés ainsi que les différentes technologies que j'utilise dans le développement web et informatique.

Le portfolio a été initialement développé avec **HTML, CSS et JavaScript**, puis refactorisé avec **Astro** afin d'améliorer sa structure, sa maintenabilité et la gestion des pages de présentation des projets.

## 🌐 Aperçu

Le portfolio contient notamment :

* une page d'accueil ;
* une présentation personnelle ;
* une section compétences ;
* une section projets ;
* une section contact ;
* un téléchargement du CV ;
* un système de thème clair/sombre ;
* une navigation responsive pour mobile ;
* des pages détaillées pour chaque projet ;
* une documentation des projets basée sur Markdown.

## 🛠️ Technologies utilisées

### Frontend

* Astro
* HTML5
* CSS3
* JavaScript
* SVG

### Outils

* Git
* GitHub
* npm
* VS Code

### Documentation des projets

Les détails de chaque projet sont stockés dans des fichiers Markdown.

Astro transforme automatiquement ces fichiers en pages web accessibles depuis le portfolio.

## 📁 Structure du projet

```text
/
├── public/
│   ├── assets/
│   ├── images/
│   └── pdf/
│       └── DialloAbdoulayeDiogo.pdf
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ArticleCard.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   └── ...
│   │
│   ├── content/
│   │   └── blog/
│   │       ├── portfolio.md
│   │       ├── gestion-scolaire.md
│   │       └── ...
│   │
│   ├── layouts/
│   │   ├── MainLayout.astro
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── merci.astro
│   │   └── blog/
│   │       └── [slug].astro
│   │
│   ├── scripts/
│   │   └── globaljs.js
│   │
│   └── styles/
│       ├── global.css
│       └── utility.css
│
├── astro.config.mjs
├── package.json
└── README.md
```

## 📄 Documentation des projets

Chaque projet possède son propre fichier Markdown dans :

```text
src/content/blog/
```

Par exemple :

```text
src/content/blog/
├── portfolio.md
├── gestion-scolaire.md
└── ...
```

Ces fichiers contiennent les informations relatives aux projets :

* présentation ;
* objectifs ;
* fonctionnalités ;
* technologies ;
* architecture ;
* difficultés rencontrées ;
* compétences mises en pratique ;
* améliorations prévues.

Une route dynamique Astro permet ensuite de transformer automatiquement chaque fichier Markdown en page web.

Par exemple :

```text
portfolio.md
      ↓
/blog/portfolio

gestion-scolaire.md
      ↓
/blog/gestion-scolaire
```

## 🚀 Installation

Cloner le dépôt :

```bash
git clone https://github.com/Diogo23-dev/porfolio.git
```

Accéder au projet :

```bash
cd porfolio
```

Installer les dépendances :

```bash
npm install
```

## 💻 Développement

Lancer le serveur de développement :

```bash
npm run dev
```

Le site sera disponible localement à :

```text
http://localhost:4321
```

## 📦 Build de production

Pour générer la version de production :

```bash
npm run build
```

Astro génère alors les fichiers statiques dans :

```text
dist/
```

Pour prévisualiser la version de production localement :

```bash
npm run preview
```

## 🌙 Thème clair / sombre

Le portfolio dispose d'un système de changement de thème permettant de basculer entre :

* mode clair ;
* mode sombre.

Les couleurs principales sont définies à l'aide de variables CSS afin de permettre aux différents composants et pages de suivre automatiquement le thème sélectionné.

## 📱 Responsive Design

Le portfolio est conçu pour fonctionner sur différentes tailles d'écran :

* ordinateur ;
* tablette ;
* smartphone.

La navigation desktop est remplacée par une navigation mobile adaptée aux petits écrans.

## 📚 Objectif du projet

Ce portfolio n'est pas uniquement une vitrine personnelle.

Il sert également de projet pratique pour mettre en œuvre et approfondir différentes compétences :

* développement frontend ;
* architecture d'un projet Astro ;
* composants réutilisables ;
* gestion des routes dynamiques ;
* génération de pages statiques ;
* Markdown ;
* Git et GitHub ;
* responsive design ;
* JavaScript ;
* gestion des thèmes ;
* déploiement web.

## 👨‍💻 Auteur

**Abdoulaye Diallo Diogo**

Développeur informatique — Guinée

GitHub : [Diogo23-dev](https://github.com/Diogo23-dev)

## 📜 Licence

Ce projet est un portfolio personnel.

Le code peut servir de référence pour l'apprentissage, mais les contenus personnels, le CV, les informations de contact et les éléments graphiques ne sont pas destinés à être réutilisés sans autorisation.
