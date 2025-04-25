React is a JavaScript library for building user interfaces

Create react app from scratch
1. install npm ==> go to teminal ==> get into the current workind directory ==> use command -> npm init ==> complete the remaining process 
    1. package.json is a consiguration for npm and keeps track of what version of that package isinstalled into our system
    
2. install bundlers ==> we are using parcel ==> goto terminal ==> use command ==> npm install -D parcel
    1. "-D" specifies that it is a dev dependency
    2. ceret vs tild 
        1. ceret (^)--> miner version changes will be updated automatically 
        2. tilt (~) --> major version changes will be updated automatically
        3. package-lock.json ==> keeps track of the exact version of the package/dependency that was installed in our system
        4. node modules ==> fetches all the code of the dependencies into system 
            ex: parcel as a project has its own dependencies and those dependencies can have their own dependencies and package.json. it is like a dependency tree
    3. no need to upload all the node modules. we can ignore it. but we shoud upload packet.json and package-lock.json
        we can easyly reinstall node modules using 'npm install' command whenever we want
3. ignite the app using the command "npx parcel html_file_name"
4. install react ==> "npm install react"
5. install react dom ==> "npm install react-dom"\
    now both react and react dom files will be present in node module
    we just installed the packages react and react-dom
    now we need to import both react and react-dom files which are in node modules into js file
6. write the below 2 lines of code in js file to import the react and react dom modules from node modules.
    import React from "react";  
    import ReactDom from "react-dom";    
    react ans react-dom referes to the react file, react-dom which is inside the node modules

# parcel
- Dev Build
- Local Server
- HMR => hot module replacement
- File Watching Algorithm - Written in c++
- Caching -Faster Builds
- Image Optimization
- minification
- Building 
- compress
- consistat Hashing
- Code Splitting
- Differential Bundling To support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking - remove unused code

<!-- *********************************************************** -->
# Lectrure 3
<!-- *********************************************************** -->
The basic command to run the project file (using parcel) is "npx parcel filename.html"
to make the the custome commande to run we can map our own command in package.json file
process: go to package.json file ==> add new script to it 
ex lets assume we have added the script => "start": "parcel index.html"
form then onwards to run the project we can simply use the command => "npm run start" or "npm start"
# NOTE:
we can write react without jsx also. all the big applications can be build using react and without jsx
but simplify the syntax we use jsx
jsx is similar to html syntax but ==> jsx - is not HTML
jsx and html both are copletely different
