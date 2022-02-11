# React

- React is a javascript based library which we use to build front end or user interface
- It is a not a framework like angular
- React is a user interface library
- React is a tool for building UI components


# Important features of React
- JSX
- Components
- One way data binding
- Virtual DOM
- Simplicity
- Performance

# Why we need React
- SOM is slow in its real form
- React uses virtual DOM which is significantly faster and more effiecient to update
- simple and easy to learn
- Reusability
- Robust re-rendering with virual DOM
- Native libraries
- Performance
- Easy testing


# Which one is better
- Angular
- React
- VueJS

# Angular vs React

React
- It is library
- one-way data binding
- JSX (JavaScript XML)
- Does not support entirely dependency injection
- Virual DOM
- Easier to learn
- Faster perforamce

Angular
- it is framework
- two way data binding
- Typescript
- support dependency injection
- Incremental DOM
- Harder to learn
- slower Performance

# SetUp
- Nodejs
- VSCode

> node --version
> npm --version

> npm install <package_name>
> npm i <package_name>
> npm i <package_name>@<version>
> npm i <package_name> -g  // global


> npm i create-react-app -g
> create-react-app --version
> create-react-app <project_name>
> cd <project_name>
> npm start

http://localhost:3000


or

> npx create-react-app <project_name>
> cd <project_name>
> npm start

http://localhost:3000


> npx create-react-app myapp
> cd myapp
> code .
> npm start


# Understand folder structure
package.json - this is npm configuration file. it include details about your app (meta data), it
               include list of dependenices and some scripts

package-lock.json - this is an auto generate file that gets updated whenever npm does an operation
                    on package.json

node_modules - this folder contain the dependencies source code require for react project

> npm install 

.gitignore - thsi file used by git to ignore file and folder while publishing source code into
remote server

README.md - it provide the documentation to read

public - this folder contain public assets of the application. it contain index.html where 
          react will mount application root component

src - source - it contain the application source code where you mostly create files


There 3 file togther form root / app component
App.css - style sheet
App.js - main js file
App.test.js - test case

index.css - global css file

index.js  - it is main entry point of the app like main method


# Components in React
- in react a component represent a part of user interface
- whatever is visible on the web page is a component, we can put component together to make a 
bigger component
- component are reusable and make the application more modular

# Type of component
- class component
- function component

















