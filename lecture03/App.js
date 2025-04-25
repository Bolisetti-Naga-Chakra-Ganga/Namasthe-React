import React from "react";
import ReactDOM from "react-dom/client";

// react.createElement ==> creates and returns an objn
// const heading = React.createElement("h1", {id:"heading1"}, "this is a heading");

/*
creating an element using react.createElement is not so developer friendly. to simplify this we use jsx
the above elem can also be created using jsx 
jsx (js engine cant understand this. js engine only understads ES transpiled before it reaches the js engine)
this jxsheding will be converted to react.createelement by babel
babel is a open source javascript compiler
if we are writing jsx in multiple lines it is mandetory to use ()
*/
const jsxHeading=<h1 id="heading" className="head">This is an heading using jsx</h1>
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// root.render(jsxHeading)

/*
React components ==> in react everything is a component
in react components are mainly of 2 types ==> class based, Functional 
functions in react is same as functions in javascript
in react component name shoud start with uppercase letter
below is an arrow function but we can use normal function also
*/
const HeadingComponent = ()=>{
    return <h1> Namasthe React</h1>
}
// we can also use () in place of {}
const HeadingComp= ()=>(
    <div id="container">
        <h1 id="Heading" className="Head"> namasthe React Funct Component</h1>
    </div>
)
// we know how to render a react element but the above written is a funct component 
// syntax to renader a func component
// root.render(<HeadingComponent/>)
// root.render(<HeadingComp/>)


/* ********************************************************************** */
/*
const Title =()=>(
    <h1 className="Heading">Namasthe React Using JSX</h1>
)

// we can render the above title component inside the HeadingCompo Below 
// it is also called as component composition ==> composing component inside another component is called

const HeadingCompo= ()=>(
    <div id="container">
        <Title/>
        <h1 id="Heading" className="Head"> namasthe React Funct Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompo/>)
*/

/* ******************************************************************************* */

// if we use {} inside component then with in the {} we can write any java script expression
let num= 10000
const elem= <span>This is react element</span>

// here elem is a react element. we can use this react elem and react comonents inside any react component.
const Title =()=>(
    <div>
        <h1 className="Heading">Namasthe React Using JSX</h1>
        {elem}
    </div>
)

// since the above component is a js function we can call that func inside another componenet
const HeadingCompo= ()=>(
    <div id="container">
        <Title/>
        {Title()}
        <h2>{num}</h2>
        {elem};
        {console.log("this is js")}
        <h1 id="Heading" className="Head"> namasthe React Funct Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingCompo/>)

// jsx makes the code much readable 
