# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


# Keeping libraries updated
We're using yarn, which has a bunch of nice things, but not automatic audit fixing (unlike npm).

There are a few different commands in yarn to help keep dependencies up to date, and security-vulnerability free.

- `npm ls <package>` - tells you exactly which versions of <package> are used by each dependency!
- `yarn upgrade` - this will update all dependencies to new versions that still satisfy the sematic versioning declared in package.json
- `yarn audit` - tells us if there are any security vulnerabilities in our dependencies (GitHub does too in the security tab - dependabot).  If we want to fix them, first see if the packages are outdated, and try upgrade first. If our direct dependency hasn't upgraded their dependency, we can add an override for them in the "resolutions" field in package.json
- `yarn outdated` - this will indicate libraries that have updates available (even if they are higher than the sematic versioning declared in package.json), along with how breaking the upgrade is
- `yarn upgrade-interactive latest` - like yarn outdated, but with interactive selection of which ones to upgrade. 
