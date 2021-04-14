# Time Detective - User Interface
![Angular](https://badges.aleen42.com/src/angular.svg)

https://swdv691-ui.herokuapp.com/

### SWDV691 - Software Development Capstone

Time Detective is a web application which allows you to decide on important recurring tasks and track how much time you spend on each one. The application will provide summary statistics as well as allow the user to perform more detailed analytics about how they are spending their time.

This web application is my final project for my Master's in Software Development from Maryville University.

### Prerequisites

This repository is the front-end user interface and requires the backend service at [SWDV619 - Services](https://github.com/mikecolbert2/SWDV691-Services) to be installed and running first.



### Read Heroku Logs
 ```heroku login```
 ```heroku logs --tail --app swdv691-services```


 ## Application prep for Heroku
Summary of instructions from here: https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147
  
 - [ ] Ensure you have the latest version of angular cli and angular compiler cli : ```npm install @angular/cli@latest @angular/compiler-cli --save-dev```  
  
 - [ ] In package.json, copy "@angular/cli”: “x.x.x”, & "@angular/compiler-cli”: “x.x.x", from devDependencies to dependencies.
 
 - [ ] In package.json, under "scripts" add "heroku-postbuild" ```"heroku-postbuild": "ng build --aot --prod",```  
 
 - [ ] Add the node and npm engines Heroku will use to run the application:  ``` node -v``` & ``` npm -v ```. Include at the bottom of package.json. 
```  "engines": {
    "node": "x.x.x",
    "npm": "x.x.x"
  }
```   

- [ ] In package.json, copy "typescript" : "~x.x.x" from devDependencies to dependencies.  

- [ ] Install Enhanced Resolve 3.3.0 ``` npm install enhanced-resolve@latest --save-dev ```  

- [ ] Install a server to run your app ``` npm install express path --save ```  

- [ ] Create a server.js file in the application root.
```
//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/<name-of-app-in-package.json>'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/<name-of-appp-in-package.json>/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
console.log(`Running on port ${process.env.PORT || 8080}`)
```  

- [ ] In package.json, change the start command. ``` "start": "node server.js" ```  

- [ ] Create a Procfile in the application root. ``` web: npm run start ```