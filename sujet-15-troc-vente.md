# Projet AAW – Sujet 15 : Troc et vente entre étudiants

**Groupe :** ________ · **Trigramme :** ___ (préfixe de toutes vos commandes) · **Pile :** NodeJS + React · **Données :** un spreadsheet propre au groupe

## 1. Contexte

Les étudiants revendent des manuels, du matériel et des meubles, et les annonces se perdent dans les conversations. Votre application centralise les petites annonces de la promo. Elle a deux points d'entrée : le site web et un bot Discord.

## 2. Ressource gérée

Chaque utilisateur gère **ses annonces** : objet, prix, état, statut (disponible ou vendu).

## 3. Exigences

### 3.1 Site non connecté
- Page d'accueil avec menu et présentation du site.
- Lien de connexion et lien vers la liste des annonces dans le menu.
- Liste des annonces, filtrable par catégorie, par prix et par statut.
- Fiche d'une annonce : détails, vendeur et date de dernière mise à jour.

### 3.2 Connexion
- Authentification via l'API Discord (OAuth2). Aucun mot de passe local.

### 3.3 Site connecté
- Un lien « Modifier » apparaît dans le menu.
- L'utilisateur publie, modifie et retire **uniquement ses propres annonces**.

### 3.4 Bot Discord
- Commande de consultation : les annonces d'une catégorie.
- Commande de mise à jour : publier une annonce ou la marquer comme vendue.
- Toutes les commandes sont préfixées par votre trigramme (exemple : `/abc-annonces`).
- Le bot est ajouté au serveur Discord de test du module.
- Le README liste toutes les commandes avec leurs paramètres.

### 3.5 Sécurité
- Un token de session stocké en base de données, avec une date d'expiration.
- Un token expiré est refusé par le site comme par le bot.

### 3.6 Administration
- Un rôle administrateur, géré dans vos données.
- L'administrateur modifie ou retire les annonces de n'importe quel utilisateur.
- L'administrateur déconnecte un utilisateur (invalidation de son token).
- **Action propre au sujet :** retirer une annonce non conforme et suspendre un vendeur.

## 4. Éléments remis en cours

Le projet ne peut être ni démarré ni validé sans les éléments ci-dessous. Ils ne sont pas diffusés par écrit : venez les chercher en séance.

| Élément | Remis le |
| --- | --- |
| Spreadsheet de départ : structure des colonnes et annonces d'exemple | ________ |
| Identifiants du serveur Discord de test et de l'application bot | ________ |
| Règle métier du sujet : catégories autorisées, plafond de prix et nombre d'annonces actives par personne | ________ |
| Scénarios de démonstration à jouer lors de la soutenance | ________ |

## 5. Jalons

| Jalon | Contenu attendu | Date |
| --- | --- | --- |
| J1 | Schéma de données et maquettes du site | ________ |
| J2 | Connexion Discord et liste des annonces | ________ |
| J3 | Bot Discord fonctionnel | ________ |
| J4 | Backoffice administrateur | ________ |
| Soutenance | Démonstration et questions individuelles | ________ |

## 6. Livrables et évaluation

- Dépôt Git avec un historique de commits régulier et lisible, auquel chaque membre contribue.
- README : installation, configuration, liste des commandes du bot.
- Soutenance individuelle : démonstration en direct, puis modification de code demandée en séance sur votre propre projet.
