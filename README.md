# Projet AAW · Troc et vente entre étudiants

Le projet du [sujet 15](sujet-15-troc-vente.md) centralise les petites annonces de la promo dans un site React et un bot Discord. Le frontend utilise Vite, le backend Node.js et Express, et les données seront stockées dans le tableur du groupe.

## Démarrage local

Avec Docker et Docker Compose, depuis la racine du dépôt, créer le fichier `.env` s’il n’existe pas, puis démarrer les deux conteneurs.

```sh
test -f .env || cp .env.example .env
docker compose up --build -d
```

- Frontend sur [localhost:5173](http://localhost:5173).
- Vérification du backend sur [localhost:3000/api/health](http://localhost:3000/api/health).
- `FRONTEND_PORT` et `BACKEND_PORT` configurent les ports locaux. `BACKEND_URL` indique à Vite l’adresse interne de l’API.
- `APP_ENV=development` lance le serveur Vite. `APP_ENV=production docker compose up --build -d` construit le frontend et lance son aperçu local.
- `docker compose down` arrête les conteneurs.

## Fonctionnalités

L’interface de navigation et la route de vérification de l’API sont en place. Le sujet prévoit une liste filtrable par catégorie, prix et statut (disponible ou vendu), ainsi qu’une fiche indiquant le vendeur et la dernière mise à jour. Après connexion via Discord OAuth2, chaque étudiant pourra publier, modifier et retirer ses propres annonces.

Les sessions du site et du bot utiliseront des jetons avec expiration. L’administration pourra gérer les annonces, invalider une session, retirer une annonce non conforme et suspendre un vendeur.

Le tableur initial, les identifiants Discord de test et les règles métier (catégories, plafond de prix et nombre d’annonces actives) sont fournis en séance.

## Bot Discord

Le bot et ses commandes sont à implémenter. Chaque commande sera préfixée par le trigramme du groupe, comme `/abc-annonces` dans le sujet.

| Action prévue | Paramètres attendus |
| --- | --- |
| Consulter les annonces d’une catégorie | Catégorie |
| Publier une annonce | Objet, catégorie, prix, état |
| Marquer une annonce comme vendue | Identifiant de l’annonce |
