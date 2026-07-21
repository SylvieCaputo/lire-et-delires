# Guide de mise en ligne — Lire et délire

Ce guide suppose que tu n'as jamais fait ça. Suis les étapes dans l'ordre,
aucune ne nécessite d'installer quoi que ce soit sur ton ordinateur.

## Étape 1 — Mettre le projet sur GitHub

1. Va sur [github.com](https://github.com) et crée un compte gratuit si tu n'en as pas.
2. Clique sur le bouton vert **New** (nouveau dépôt).
3. Nomme-le `lire-et-delires`, laisse-le en **Public**, ne coche aucune case
   supplémentaire, puis clique **Create repository**.
4. Sur la page qui apparaît, clique sur le lien **uploading an existing file**.
5. Dézippe le fichier que je t'ai donné sur ton ordinateur, puis fais glisser
   **tout le contenu du dossier** (pas le dossier lui-même, ce qu'il y a dedans)
   dans la zone de dépôt de GitHub.
6. Clique sur **Commit changes** en bas de page.

## Étape 2 — Créer la base de données (Supabase)

1. Va sur [supabase.com](https://supabase.com) et crée un compte gratuit
   (tu peux te connecter directement avec ton compte GitHub).
2. Clique **New project**. Choisis un nom, un mot de passe (note-le
   quelque part), et une région proche de toi.
3. Une fois le projet créé, va dans l'onglet **SQL Editor** dans le menu
   de gauche, clique **New query**, colle ce code puis clique **Run** :

   ```sql
   create table vues_articles (
     slug text primary key,
     compteur integer not null default 0
   );
   ```

4. Va dans **Settings** (roue crantée) puis **API**. Tu y trouveras deux
   informations à garder de côté pour l'étape 4 :
   - **Project URL**
   - **service_role key** (clique sur "Reveal" pour l'afficher)

## Étape 3 — Créer la newsletter (Buttondown)

1. Va sur [buttondown.email](https://buttondown.email) et crée un compte
   gratuit.
2. Une fois inscrit·e, note ton identifiant : il apparaît dans l'adresse
   de ton tableau de bord, par exemple `buttondown.email/TON-IDENTIFIANT`.
3. Ouvre le fichier `components/Newsletter.js` sur GitHub (clique dessus
   dans la liste des fichiers, puis sur l'icône crayon pour éditer),
   remplace les deux occurrences de `TON-NOM-BUTTONDOWN` par ton
   identifiant réel, puis clique **Commit changes**.

## Étape 4 — Mettre le site en ligne (Vercel)

1. Va sur [vercel.com](https://vercel.com) et crée un compte gratuit en
   te connectant avec ton compte GitHub.
2. Clique **Add New** puis **Project**.
3. Trouve `lire-et-delires` dans la liste et clique **Import**.
4. Avant de cliquer sur Deploy, déplie la section **Environment Variables**
   et ajoute les deux variables notées à l'étape 2 :
   - `SUPABASE_URL` → colle le Project URL
   - `SUPABASE_SERVICE_ROLE_KEY` → colle le service_role key
5. Clique **Deploy**. Après une minute ou deux, ton site est en ligne à
   une adresse du type `lire-et-delires.vercel.app`.

## Étape 5 — Ajouter un article

Sur GitHub, ouvre `lib/contenu.js`, clique sur l'icône crayon pour
éditer, copie un bloc d'article existant (entre accolades `{ }`),
colle-le juste après, et modifie les champs (`slug`, `rubrique`, `titre`,
etc.). Clique **Commit changes** : Vercel republie le site automatiquement
en une minute.

## Étape 6 — Nom de domaine (facultatif)

Depuis le tableau de bord Vercel de ton projet, onglet **Domains**, tu
peux relier un nom de domaine que tu achètes séparément (par exemple
chez Google Domains ou OVH), ou simplement garder l'adresse
`.vercel.app` gratuite pour commencer.

---

Si une étape bloque, reviens me voir avec le message d'erreur exact —
je t'aiderai à le résoudre.
