# 🛍️ Shop Manager

## 📌 Présentation du projet

**Shop Manager** est une application web Frontend permettant de consulter, rechercher et filtrer les produits disponibles dans une boutique.

Les données des produits sont récupérées dynamiquement depuis une API REST à l'aide de la Fetch API.

Ce projet est développé avec **HTML5, CSS3 et JavaScript natif (Vanilla JS)**, sans utiliser de framework.

## 🎯 Objectifs du projet

- Consulter le catalogue des produits disponibles.
- Rechercher un produit par son nom ou sa description.
- Filtrer les produits selon plusieurs critères.
- Afficher dynamiquement les catégories disponibles.
- Proposer une interface responsive et facile à utiliser.

## ✨ Fonctionnalités

### 1. 📦 Catalogue des produits (List)

- Récupération des produits depuis l'API REST.
- Affichage dynamique des produits sous forme de cartes.
- Présentation des informations suivantes :
  - Nom du produit.
  - Description.
  - Prix.
  - Quantité disponible en stock.
  - Catégorie.
- Gestion des erreurs API et réseau.
- Affichage d'un message lorsque le catalogue est vide.

### 2. 🔍 Recherche des produits (Search)

- Recherche par nom du produit.
- Recherche par description.
- Actualisation dynamique des résultats.
- Affichage d'un message lorsqu'aucun produit ne correspond à la recherche.

### 3. 🎛️ Filtrage des produits (Filter)

- Filtrage par catégorie.
- Filtrage selon un prix maximum.
- Affichage uniquement des produits disponibles en stock.
- Combinaison de plusieurs critères de filtrage.
- Réinitialisation des filtres avec un bouton Reset.

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|---|---|
| HTML5 | Structure de l'application |
| CSS3 | Design et responsive |
| JavaScript (Vanilla JS) | Logique et interactions |
| Fetch API | Communication avec l'API |
| Async / Await | Gestion des opérations asynchrones |
| REST API | Récupération des données JSON |
| Git & GitHub | Gestion de versions |

## 🌐 API REST

Le projet utilise **Shop Practice API**.

- **URL de base :** `http://localhost:3000`
- **Documentation :** `http://localhost:3000/#start`

L'API permet de récupérer les produits, rechercher des articles et appliquer les paramètres de filtrage disponibles.

## 📁 Structure du projet

```text
Shop-Manager/
│
├── index.html
├── README.md
│
├── assets/
│   ├── images/
│   └── icons/
│
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── style.css
│   └── responsive.css
│
└── js/
    ├── main.js
    ├── api.js
    ├── products.js
    ├── search.js
    ├── filters.js
    └── ui.js
```

## 🚀 Installation et lancement

### 1. Cloner le repository

```bash
git clone https://github.com/boubkerhabib/Shop-Manager-.git
```

### 2. Accéder au dossier

```bash
cd Shop-Manager-
```

### 3. Lancer l'API

Assurez-vous que le serveur Shop Practice API est démarré sur :

```text
http://localhost:3000
```

### 4. Lancer le projet

Ouvrir le fichier `index.html` dans un navigateur, de préférence avec l'extension Live Server de VS Code.

## 📱 Responsive Design

L'interface est conçue pour s'adapter à différents appareils :

- Desktop.
- Tablette.
- Mobile.

## 📦 Livrables attendus

- Une interface web fonctionnelle et responsive.
- Un catalogue de produits connecté à l'API.
- Un système de recherche fonctionnel.
- Un système de filtrage multicritère.
- Un menu de catégories alimenté dynamiquement.
- Un code JavaScript organisé et maintenable.

## 👨‍💻 Auteur

**Boubker Habib**

Projet réalisé dans le cadre d'un exercice pratique de développement Frontend.

---

⭐ **Shop Manager — Discover, Search and Filter Products.**
