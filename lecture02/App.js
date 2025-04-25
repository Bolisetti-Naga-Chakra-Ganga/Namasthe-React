import React from "react";
import ReactDOM from "react-dom/client";

// a normal js file donot know what is import. hence in script tag(in html) mention the type as module

// const heading= React.createElement('h1', {}, "this is new heading")
// const root = ReactDOM.creatRoot(document.getElementById('root'))

// const parent= React.createElement("h2", {}, "this is a new heading")
const parent= React.createElement("div", {id: "parent"}, React.createElement("div", { id: "child"}, [React.createElement("h2", {id: "innerChild"}, "im new heading 1"), React.createElement("h3", {}, "im h3"),]));
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);