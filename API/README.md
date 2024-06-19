# Portfolio QA - API

There are two projects in this folder: _Drinks_ and _Pets_.

**Drinks API with Newman**
I tested the Cocktail Free API  https://www.thecocktaildb.com/api.php (thanks Cocktail Team!) using Postman and I set up the Github Actions to run some basic tests (go to "Actions" tab to find the tests).

**Pets API with Cypress**
I created some basic tests for the Pet endpoint of Petstore https://petstore.swagger.io/#/ (thanks Petstore team!) using Cypress. For this project, I created specific api commands in /support/api_commands.js and added the tests in integration/api_tests.js.
To run it, clone the repo, access the folder and run yarn install.
You can also check the execution of the tests by watching the video in _Pets/cypress/videos_.
