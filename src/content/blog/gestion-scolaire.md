---

title: "Application de gestion scolaire"
description: "Application web destinée à centraliser la gestion des élèves, des classes, des matières et des résultats scolaires."
category: "Développement Web"
status: "Projet en développement"


---

# Application de gestion scolaire

## Présentation

Cette application a pour objectif de faciliter la gestion quotidienne d'un établissement scolaire en centralisant les informations relatives aux élèves, aux classes, aux matières et aux résultats scolaires.

Le projet est basé sur une application web permettant de remplacer une partie des traitements réalisés manuellement avec des fichiers Excel.

L'objectif est de disposer d'une solution plus structurée, plus fiable et plus facile à maintenir.

## Aperçu du portfolio

![Aperçu de mon portfolio](../../../public/departement.jpg)


## Objectifs du projet

L'application doit permettre notamment de :

* gérer les élèves ;
* gérer les classes ;
* gérer les matières ;
* enregistrer les notes ;
* gérer les coefficients des matières ;
* calculer les moyennes ;
* consulter les résultats des élèves ;
* rechercher rapidement un élève ;
* organiser les données scolaires dans une base de données ;
* réduire les erreurs liées aux calculs manuels.

## Technologies:

* Laravel
* PHP
* MySQL
* Blade
* HTML
* CSS
* JavaScript


## Organisation scolaire

Le projet a été pensé à partir d'un modèle d'établissement comprenant plusieurs classes.

La structure utilisée dans le projet comprend notamment :

* 6 classes ;
* 7 matières par classe ;
* des matières avec des coefficients différents ;
* des notes évaluées sur 10.

Certaines matières possèdent un coefficient de **2**, tandis que les autres possèdent un coefficient de **1**.

Cette organisation permet de prendre en compte le poids réel de chaque matière dans le calcul des résultats.


## Gestion des élèves

L'application permet d'enregistrer les informations principales concernant les élèves.

Chaque élève est associé à une classe et peut avoir plusieurs notes correspondant aux différentes matières étudiées.

L'organisation des données permet ainsi de retrouver rapidement les informations d'un élève et son historique de résultats.


## Gestion des matières

Les matières sont enregistrées dans la base de données avec leur coefficient.

Exemple :

| Matière       | Coefficient |
| ------------- | ----------: |
| Mathématiques |           2 |
| Français      |           2 |
| Anglais       |           2 |
| Histoire      |           1 |
| Géographie    |           1 |
| Sciences      |           1 |
| Informatique  |           1 |

Les matières et leurs coefficients peuvent être utilisés lors du calcul automatique des moyennes.


## Gestion des notes

Les notes sont enregistrées pour chaque élève et pour chaque matière.

Le système prend en compte le coefficient associé à la matière afin de calculer les résultats pondérés.

La logique générale du calcul est :

```text
Note × Coefficient
```

Puis :

```text
Somme des notes pondérées
÷
Somme des coefficients
```

Cette méthode permet d'obtenir une moyenne qui respecte l'importance de chaque matière.


## Base de données

L'utilisation d'une base de données relationnelle permet de mieux organiser les informations.

Les principales entités du projet sont notamment :

```text
Élèves
   │
   └── Classes

Élèves
   │
   └── Notes
          │
          └── Matières
```

Cette organisation permet d'éviter la duplication inutile des informations et facilite les recherches et les calculs.


## Architecture technique

L'application est développée avec **Laravel**, un framework PHP permettant de structurer l'application selon une architecture claire.

Les différentes parties du projet sont organisées autour de plusieurs éléments :

* routes ;
* contrôleurs ;
* modèles ;
* migrations ;
* vues Blade ;
* base de données ;
* validation des données.

Cette architecture permet de séparer la logique métier, l'accès aux données et l'interface utilisateur.


## Fonctionnement général

Le fonctionnement de l'application peut être résumé ainsi :

```text
Utilisateur
     ↓
Interface Web
     ↓
Route Laravel
     ↓
Contrôleur
     ↓
Modèle / Eloquent
     ↓
Base de données MySQL
     ↓
Résultat
     ↓
Interface Web
```

Lorsqu'une action est effectuée depuis l'interface, Laravel traite la requête, récupère ou modifie les données nécessaires dans la base de données puis retourne le résultat à l'utilisateur.


## Pourquoi remplacer Excel ?

Le projet part notamment d'un besoin de modernisation d'une gestion scolaire réalisée avec Excel.

Excel peut être pratique pour commencer, mais la gestion devient plus complexe lorsque le nombre d'élèves, de classes et de notes augmente.

Une application dédiée permet notamment de :

* centraliser les données ;
* limiter les erreurs de saisie ;
* automatiser les calculs ;
* faciliter les recherches ;
* contrôler les relations entre les données ;
* préparer l'évolution future de l'application.


## Difficultés rencontrées

La conception de l'application nécessite notamment de réfléchir à la structure de la base de données.

Il faut déterminer correctement les relations entre :

* les élèves ;
* les classes ;
* les matières ;
* les notes ;
* les coefficients.

Le calcul des moyennes constitue également une partie importante du projet puisqu'il doit respecter les coefficients associés aux différentes matières.


## Améliorations prévues

Plusieurs fonctionnalités peuvent être ajoutées progressivement :

* authentification des utilisateurs ;
* gestion des enseignants ;
* gestion des années scolaires ;
* gestion des périodes et trimestres ;
* génération automatique des bulletins ;
* export PDF ;
* export Excel ;
* classement des élèves ;
* statistiques scolaires ;
* tableau de bord administrateur ;
* gestion des absences ;
* historique des résultats.


## Compétences mises en pratique

Ce projet permet de mettre en pratique plusieurs compétences en développement web :

* conception d'une base de données relationnelle ;
* développement avec Laravel ;
* programmation PHP ;
* utilisation d'Eloquent ORM ;
* création de migrations ;
* création de routes et contrôleurs ;
* manipulation de données MySQL ;
* création d'interfaces Blade ;
* validation des données ;
* conception d'une application métier.


## Conclusion

L'application de gestion scolaire constitue un projet pratique permettant de transformer un processus de gestion basé sur des fichiers Excel en une application web structurée.

Le projet met particulièrement l'accent sur la modélisation des données, la gestion des relations entre les différentes entités et l'automatisation des calculs scolaires.

Il constitue également une base pouvant évoluer vers une solution complète de gestion d'établissement scolaire.
