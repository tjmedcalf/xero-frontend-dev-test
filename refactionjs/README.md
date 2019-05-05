# About

My solution was a slight re-factor of the original data access to convert it into an API for the front end. This can be seen in the `src/api` folder. I've stripped out the rendering components and simplified the API calls with a helper method.

Next steps were to implement a front-end using a modern JS library and tooling. Tooling includes Parcel for bundling/compilation because of it's config-less setup and built in server and transpiling capabilities, I also added eslint and jest for linting and testing. Unfortauntely the hot-reloading is flaky at best.. I think this is probably a shortcoming of Parcel.

I've componentised the inputs and list, however I've left the majority of controller logic in App.js - this could be isolated out into helper functions or redux could be implemented to separate state management away from rendering logic.

The approach of calling the API every time a checkbox is clicked is not ideal as this filtering could be done in-app/client-side with react hooks and state, however doing it the way I did means the data is always fresh.

I have implemented minimal tests but I haven't utilised any type checking other than basic prop-types - this is an area which could have significantly more time spent to improve stability of the app. However it does have the testing suite in place.

There is also no production build script at this time however Parcel makes production bundling quite simple;

    parcel build index.js

# Getting Started

### Prerequisite(s):

This application runs best with Babel 7. Everything _should_ be in the package.json.


### To run:


    npm install
    npm start
