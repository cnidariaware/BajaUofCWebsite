# Baja Website

[![Continuous Integration Testing](https://github.com/UofCBaja/BajaUofCWebsite/actions/workflows/testAutomatic.yaml/badge.svg?branch=dev)](https://github.com/UofCBaja/BajaUofCWebsite/actions/workflows/testAutomatic.yaml)

The website is located at [BajaUofC.com](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

# How to Commit

```
<type>(scope or file that has been changed): short description
```

! for any commits that break a component or system

### Example

```
feat(api)!: send an email to the customer when a product is shipped
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **test**: Adding missing tests or correcting existing tests
- **chore**:
- **added**: Added content but not a complete feature
- **removed**: Removed files or content only
- **merged**: Used when a branch's content is merged into another branch

### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

# Starting JS templates

Uses [JSDocs](https://jsdoc.app), gives a good way to describe what a function does and needs

```js
//More prefered arrow function just need to call function and does function immediately
/**
 * @param {Object} inputVar - one argument into the function should be its name
 * @param {number} b - one argument into the function should be its name
 * @returns {Promise<number>} c - what the program returns with type
 * @description A brief description of what the function does
 * @author Name <semiperminant@exmaplemail.com>
//semi-perminant email, do not need to respond but try to be a good alumni
 */
const exampleFunct = (inputVar) => {
  const varExample0 = 0; //constant variable cannot change, not strongly typed
  let varExample1 = 0; //local varialbe, not strongly typed can be any data type
  var varExample2 = 0; //global variable, not strongly typed can be any data type
  return 0; //example function does nothing significant
};

/**
 * @param {Object} inputVar - one argument into the function should be its name
 * @param {number} b - one argument into the function should be its name
 * @returns {Promise<number>} c - what the program returns with type
 * @description A brief description of what the function does
 * @author Name <semiperminant@exmaplemail.com>
//semi-perminant email, do not need to respond but try to be a good alumni
 */
function exampleFunct2(inputVar) {
  const varExample0 = 0; //constant variable cannot change, not strongly typed
  let varExample1 = 0; //local varialbe, not strongly typed can be any data type
  var varExample2 = 0; //global variable, not strongly typed can be any data type
  return 0; //example function does nothing significant
}
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
