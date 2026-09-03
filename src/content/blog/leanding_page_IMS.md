# IMS GUINÉE — Landing Page

Landing page officielle d'**IMS GUINÉE**, une entreprise basée à Conakry spécialisée dans les **voyages, la logistique, l'envoi de colis et le transport**.

Le projet est conçu selon une approche **Mobile First**, avec pour objectif de présenter rapidement les services d'IMS GUINÉE et d'inciter les visiteurs à prendre contact avec l'entreprise.

---

## Aperçu de l'Application

![Aperçu de l'interface de l'application](/porfolio/leanding_page.png)

---

## 🎯 Objectif du projet

Cette landing page a pour objectif de :

- Présenter rapidement IMS GUINÉE
- Mettre en avant ses 3 services principaux
- Présenter ses engagements
- Rassurer les visiteurs et partenaires
- Faciliter la prise de contact
- Être parfaitement adaptée aux smartphones
- Offrir un chargement rapide
- Être optimisée pour le référencement naturel (SEO)

> Ce projet n'a pas vocation à être un site web institutionnel complet.
> Il s'agit d'une landing page courte, orientée présentation et conversion.

---

## 🏢 À propos d'IMS GUINÉE

**IMS GUINÉE** est une entreprise basée à Conakry, en République de Guinée.

Elle accompagne ses clients dans leurs besoins liés aux :

- Voyages
- Mobilité
- Études à l'étranger
- Billets d'avion
- Logistique
- Envoi de colis
- Transport de marchandises
- Transport de personnes
- Assistance à l'aéroport

### Les 3 engagements

**Rapidité**  
Nous traitons vos demandes rapidement.

**Honnêteté**  
Des informations claires et transparentes dès le départ.

**Accompagnement**  
Nous vous accompagnons étape par étape.

---

## 🚀 Services présentés

### 01 — Voyage & Mobilité

- Billets d'avion
- Études à l'étranger
- Accompagnement dans les démarches de voyage

### 02 — Logistique & Colis

- Envoi de colis
- Transport de marchandises
- Transport de bagages
- Suivi des envois

### 03 — Transport & Déplacement

- Transport de personnes
- Assistance à l'aéroport
- Déplacements professionnels et personnels

---

## 🛠️ Technologies utilisées

Le projet utilise principalement :

- [Astro](https://astro.build/)
- HTML
- CSS
- JavaScript
- SVG
- Git

### Pourquoi Astro ?

Astro a été choisi pour :

- ses excellentes performances ;
- la génération de pages statiques ;
- son faible JavaScript côté client ;
- son excellent support du SEO ;
- sa compatibilité avec une approche Mobile First ;
- sa facilité de déploiement sur des plateformes gratuites.

---

## 📱 Approche Mobile First

La conception commence par les petits écrans avant d'être adaptée aux écrans plus larges.

Les principaux formats ciblés sont :

- 360 px
- 390 px
- 430 px
- 768 px
- 1024 px
- 1440 px

L'objectif est de garantir une expérience confortable sur :

- Smartphones
- Tablettes
- Ordinateurs portables
- Écrans de bureau

---

## 🎨 Identité visuelle

L'identité visuelle du projet s'appuie principalement sur :

- Bleu IMS
- Bleu foncé
- Bleu clair
- Blanc
- Gris pour les textes secondaires

Les icônes utilisées dans le projet sont principalement au format **SVG** afin de conserver une interface légère.

---

## 🔍 SEO

La landing page intègre les éléments essentiels du référencement naturel :

- Balise `<title>`
- Meta description
- URL canonique
- Open Graph
- Twitter/X Card
- `robots.txt`
- Sitemap
- Données structurées Schema.org
- Attribut `lang="fr"`
- Texte alternatif des images
- Structure HTML sémantique

L'objectif est de fournir une base propre pour le référencement d'IMS GUINÉE.

---

## 📂 Structure du projet

```text
ims-guinee-landing/
│
├── public/
│   ├── images/
│   │   ├── logo-ims-guinee.png
│   │   ├── logo-ims-guinee-white.png
│   │   └── ...
│   │
│   ├── icons/
│   │   ├── plane.svg
│   │   ├── package.svg
│   │   ├── car.svg
│   │   ├── facebook.svg
│   │   ├── instagram.svg
│   │   ├── linkedin.svg
│   │   └── whatsapp.svg
│   │
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── WhyUs.astro
│   │   ├── WhatsApp.astro
│   │   ├── Partners.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       └── global.css
│
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json