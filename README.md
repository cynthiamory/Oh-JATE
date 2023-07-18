# Oh-JATE
Progressive Web Applications (PWA): Text Editor

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview GIF](#preview-gif) 
- [Link To Live URL](#link-to-live-url)
- [Installation and Usage](#installation-and-usage)
- [Tests](#tests)
- [Technologies Used](#technologies-used)
- [Credits](#credits)
- [License](#license)

## Description

This is a web-based text editor that enables users to create notes or code snippets both online and offline. Thanks to the integrated service worker and Cache API, the app remains fully functional without an active internet connection, ensuring reliable access to saved content and visited pages even in offline mode.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Heroku
THEN I should have proper build scripts for a webpack application
```

## Preview GIF
- ## Preview - Insomnia Test Functionality
![Preview GIF](./assets/insomnia_preview.gif)

## Link To Walkthru Video
**Walkthrough Video:** [Link To Live URL](link) 


## Installation and Usage
- To clone the repo: https://github.com/cynthiamory/Oh-JATE.git
- Install [Node](https://nodejs.org/en). version 16 and up. Command line: 
```bash
npm init
```
#### Install Dependencies
```bash
npm install
```
- You can also install dependcies indivually by running the following commands:

   - Express will be npm i express@4.18.2
   - Dotenv will be npm i dotenv
   - Mongoose will be npm i mongoose
   - Modemon will be npm i nodemon
   - Jest will be npm i jest


#### Run the application to initiate the server using Command: 
```bash
npm run start:dev
```
#### Now you can leverage Insomnia to test the application's local server: http://localhost:3001. It provides a set of API routes, including GET, POST, PUT, and DELETE, for users, thoughts, and reactions. These routes are designed to facilitate seamless operations such as creating, updating, and deleting data in the database.

## Available Endpoints
```md
1. GET /api/users - get ALL users
2. GET /api/users/:userId - get SINGLE user by ID
3. POST /api/users - create a user
4. PUT /api/users/:userId - update a user by ID
5. DELETE /api/users/:userId - delete a user by ID
6. GET /api/thought - get all thought
7. GET /api/thought/:thoughtId - get a single thought by ID
8. POST /api/thought - create a new thought
9. PUT /api/thought/:thoughtId - update a thought by ID
10. DELETE /api/thought/:thoughtId - delete a thought by ID
11. POST /api/thought/:thoughtId/reactions - add a reaction to a thought
12. DELETE /api/thought/:thoughtId/reactions/:reactionId - Delete a reaction from a thought
13. POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
14. DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list
```

## Tests
- There are no tests yet for this application

## Technologies Used
Assignment was built with:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Dotenv](https://img.shields.io/badge/dotenv-grey?style=for-the-badge&logo=dotenv&logoColor=#ECD53F)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Github](https://img.shields.io/badge/github-grey?style=for-the-badge&logo=github&logoColor=##181717)
![VS Code](https://img.shields.io/badge/visualstudiocode-black?style=for-the-badge&logo=visualstudiocode&logoColor=#007ACC)

## Credits
- Oh JATE: Cynthia Morales - Full Stack Developer Student.
- Institution: The University Of Toronto
- Course: Bootcamp Full Stack Development
- Instructor: Ali Masqood 
- Sub Instructor: Edward J. Apostol
- Tutor: Jose Lopez 
- Learing Assistant Ask BCS Support: Conner Hollis aka chollis on Slack
- Online Support: W3Schools, Youtube, SQL Shack, mySQL, Stack Overflow, Sequelize.org
- License badges: Sheilds.io


## License

![License](https://img.shields.io/badge/License-MIT-9cf.svg)