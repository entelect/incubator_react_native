# Entelect React Native

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Prerequisites

-   Node v[`8.3.X`](https://nodejs.org/en/) or higher
-   JDK v[`8.X`](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) or higher
-   Python v[`2.7.X`](https://www.python.org/downloads/)
-   React Native v[`0.57.X`](https://facebook.github.io/react-native/) or higher

## Getting Started

Please have a look at the [guides](./guides/) attached to this repository - they contain a detailed breakdown on getting started with React Native.

## Install

To install this projects dependencies, navigate to it's root directory in console and execute one if the following commands:

```
yarn install
```

```
npm install
```

Yarn is faster and more reliable - so it should take preference. NPM, however, is needed to setup Git hooks - so make sure to run it at least once on your machine.

_IMPORTANT NOTE:_

_Make sure to only add one dependency lock file to your repo. Either `package-lock.json` or `yarn.lock` - not both. This project has been configured to ignore the `package-lock.json` file, so make sure to always commit the `yarn.lock` file after installing new dependencies._

## Navigation Framework (React Navigation)

This project utilises [`react-navigation`](https://reactnavigation.org/en/) as its navigation framework. It is extremely powerful and it does a lot of heavy lifting for you. It might seem a bit complicated at first, but once you get used to it you'll realize how easy it makes navigation and navigation related aspects for you. It is highly recommended that you work through their [fundementals](https://reactnavigation.org/docs/en/getting-started.html) section as it does a great job at explaining the whole framework to you.

## Debugging (Android)

In order to view console logs while developing in an Android emulator, run the following command in a terminal from the same directory as the projects packager:

```
adb logcat *:S ReactNative:V ReactNativeJS:V
```

If you'd like to develop on a physical device (which will have better performance and a more accurate experience than an emulator), you'd have to connect your device to your PC and enable developer mode it. To make sure that your device is being picked up you can run the following command:

```
adb devices
```

If you see your device listed, you're good to go. If your device is not detected, or if your device is being detected but your packager does not start building to the device, running the following command and try again:

```
adb reverse tcp:8081 tcp:8081
```

## Code Generation Tools

This project utilises a scaffolding framework package which can generate React code conforming to the Redux Duck Pattern along with all the essential test code. This generated code conforms to the Air BnB naming and coding-style conventions, and it is thus highly recommended to make use of this tool when creating new components. More information on this package can be found [here](https://www.npmjs.com/package/generate-react-code).

_IMPORTANT NOTE:_

_This tool has already been configured to generate React-Native code by default._

#### Generation Command

The following command can be used to generate code:

```
yarn run gen-react-code -n example-component -d src/example/dir -r
```

#### Parameter Description:

-   `-n`: The new component's name in lower kebab case (e.g. `calendar`, `products`, `home-screen`). This parameter is required.
-   `-d`: The new component's desired director - starting at the project's root (e.g. `src/pages`, `src/components`). This parameter may be omitted, in which case the code will be placed in the default directory `src/components`.
-   `-r`: Add this parameter to generate Redux code in the duck pattern.
-   `-o`: Add this parameter is you wish to omit the comments in the generated code (not recommended as the comments contain useful information). This parameter may be omitted.

#### Generated Output Example (React)

Given the following example code generation command:

```
yarn run gen-react-code -n example-component -d src/components
```

The following file/folder structure will be generated:

```
project
└───src
    └───componets
        └───example-component
            │   example-component.view.js
            └───test
                │   example-component.view.spec.js
```

Within these files the majority of the code will be completed for you - which contains detailed comments on how to add your functionality and general best practices.

#### Generated Output Example (React with Redux)

Given the following example code generation command:

```
yarn run gen-react-code -n example-component -d src/components -r
```

The following file/folder structure will be generated:

```
project
└───src
    └───componets
        └───example-component
            │   example-component.container.js
            │   example-component.reducer.js
            │   example-component.view.js
            └───test
                │   example-component.container.spec.js
                │   example-component.reducer.spec.js
                │   example-component.view.spec.js
```

Within these files the majority of the code will be completed for you - which contains detailed comments on how to add your functionality and general best practices.

_IMPORTANT NOTE:_

_Remember to add generated reducers to the root reducer found in 'src/redux/root-reducer.js_

## Code Formatting Tool (_Prettier_)

This project utilises Prettier to format its code. This provides a standard and uniform code structure across all files, and makes the code formatting process extremely easy.

All files get processed and formatted when committing, but if you would like to run Prettier manually on all files you can use the following command:

```
yarn run prettier
```

If you're on WebStorm and you would like to quickly run prettier on the file you're currently working on, you can use the following key combination:

Windows:

```
Ctr + Alt + Shift + P
```

MacOS:

```
Cmd + Alt + Shift + P
```

## Naming Conventions

#### Folder/File Naming

-   All folders/files are to be in lower kebab case (e.g. `example-folder`, `example-file.js`)
-   All files are to be appropriately sub-labeled:
    -   Containers: example-component.container.js
    -   Reducers: example-component.reducer.js
    -   Views: example-component.view.js
    -   Tests: example-component.xxx.spec.js
    -   Styles: example-component.style.js

#### Code Naming

-   All classes are to be in upper camel case (e.g. `ExampleClass`)
-   All variables and functions are to be in lower camel case (e.g. `exampleVariable`, `exampleFunction`)
-   Only React and React-Native views and containers are to be imported with capital camel case (e.g. `ExampleView`, `ExampleContainer`), as is the React and React Native convention.

## Code Conventions

#### Functions

When it's important to know the function's name, don't use ES6 arrow functions.

###### Good

```
function exampleFunction() {
    return 'example';
}
```

###### Bad

```
const exampleFunction = () => 'example';
```

When the functions name is not relevant or necessary, unnamed ES6 arrow functions should be used.

###### Good

```
const object = {
    var: 'example',
    func: () => 'example'
}
```

###### Bad

```
const object = {
    var: 'example',
    func: function exampleFunction() {
        return 'example';
    }
}
```

## Redux

Please see the _Ducks modular Redux pattern_ sub-section in the _React Native - A Beginner's Guide_ located in the [guides](./guides/) folder. Also have a look at the [original proposal](https://github.com/erikras/ducks-modular-redux) by Erik Rasmussen for a brief TL;DR version.
