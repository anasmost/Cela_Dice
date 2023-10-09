# React App Frontend de lancement de dès
Cette application Démo est fixée à 2 joueurs utilisant la même interface graphique. Chaque jour à son tour, lance les mêmes dès en cliquant sur le même boutons.
Elle est initialisée avec [Create React App](https://github.com/facebook/create-react-app).

## Configuration
L'application utilise 2 variables d'environnement facultatives, à modifier dans le fichier `.env` :
1. `REACT_APP_TURN_COUNT` : détermine le nombre de tours de rôle disponible pour chaque joueur
2. `REACT_APP_RESULT_TIMEOUT` : détermine la durée (en milisecondes) de l'affichage du résultat du joueur actuelle avant de donner la main au 2ème joueur
Exemples :
REACT_APP_TURN_COUNT=3
REACT_APP_RESULT_TIMEOUT=2500

## Exécution
1. cd `path/to/root/folder`
2. `npm start` pour le mode Développement\
    `npm build` pour le mode production, puis servir le fichier `index.html` via un serveur HTTP (e.g Live Server extension de VSCode)

## React-Scripts (English)
### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
