# Lazy Loading (Using Intersection Observer Api)
This project is an implementation of lazy loading using the [Intersection Observer Api] (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

## What is lazy loading?
Instead of loading the entire web page and rendering it to the user in one go as in bulk loading, the concept of lazy loading assists in loading only the required section and delays the remaining, until it is needed by the user.

## Init
Run `npm install or npm i to download all the dependencies`
## Setup
I've configured the Webpack to be able to write code in ES6 syntax, the dist folder will contain the complete minified html, css, and Js(ES5) files. The es5 version will also be included here.
This is working perfectly in Chrome, Edge, IE11 and Firefox , haven't tested in Safari though.
## Developent Server
Run `npm run start` for the development server and it'll open on localhost:8080

## Build
Run `npm run Build` to build the project.
