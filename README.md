# react-electron-webpack
A boilerplate for a React, Electron, Webpack application 

## Overview
- Electron - Desktop app javascript framework
- React - View templating framework
- Babel - ES6/JSX transformation
- Webpack - Asset manager/bundler
- npm - Javascript package manager
- Jest - Javascript test runner written for React
- Enzyme - Javascript testing utilities written for React

## Installation
- Clone this repo: `https://github.com/Thomascountz/react-electron-webpack.git`
- `cd` into `react-electron-webpack`
- Run `npm install`
- Hack away!

## Script Usage
```
npm run-script start   # - or - #   npm start
````

Runs both `webpack --mode development` to package app into `/dist`, and `electron .` to serve the app, in parallel

```
npm run-script rebuild
```

Runs `electron-packager`, for `darwin` only, and outputs/**overwrites** results into `/builds`

```
npm test  # - or - #  jest --watchAll
```

Runs Jests and watches for file changes before automatically rerunning specs

## Configuration Choices
Running `npm start` in development will create webpack output in `/dist` and, using `HotModuleReplacementPlugin`, Webpack will create hotswap `.json` files in the `/dist` directory for every file change/save. This directory can quickly become bloated, which is why it's `.gitignore`d. The alternative is to setup `webpack-dev-server`, which is included in `package.json`. `electron-reload` is used to patch this hotswaps live when a file is changed.

## File Structure
```
.
├── README.md                                 // This document  
├── __mocks__                                 // Configured mocks used by Jest (https://jestjs.io/docs/en/webpack)  
├── builds                                    // Output of electron-packager
├── dist                                      // Output of Webpack; served by Electron 
├── main.js                                   // Entry point for Electron
├── package-lock.json
├── package.json
├── builds                                    // Output of electron-packager
├── public                                    // Top-level html where app is plugged in
│   └── index.html
├── src
│   ├── assets                                // Images, et.al.
│   │   ├── electron.png
│   │   ├── react.png
│   │   └── webpack.png
│   ├── components                            // Components
│   │   ├── HelloWorld                        // All components share a common structure
│   │   │   ├── index.jsx                     // .jsx holds the React component
│   │   │   ├── index.test.jsx                // .test.jsx holds the Enzyme/Jest tests
│   │   │   └── styles.css                    // .css holds the styling for that component
│   │   └── Logo
│   │       ├── index.jsx
│   │       └── styles.css
│   └── index.js                              // Main React component/entry point
└── webpack.config.js                         // Webpack configuration for all evnvironments
```
