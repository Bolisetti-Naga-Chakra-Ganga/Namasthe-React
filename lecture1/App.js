// syntax ==> React.createElement("tag_name", {we can give attributes here ex: id, classname, etc.,}, "content that we wanted to insert")
// the children and the attributes we are passing is known as props
// react.createlement("tage", {}, '') ==> returns the object (consisting of the details like type, props etc,. ) but not the actual html tag

/*
const heading= React.createElement("h1", {id: 'heading', className:'head' }, "Hello world wising react");
console.log(heading);   // heading is an obj
const root = ReactDOM.createRoot(document.getElementById("root"));
root .render(heading);  // render converts the object to the html tag and inserts into the root
*/

/***************************************************************************************/

// creating nested elems using react
// lets create the below tags
/*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag1</h1>
        <h1>I'm h1 tag2</h1>
    </div>
</div>
*/

/*
const parent= React.createElement('div', {id: 'parent'}, React.createElement('div', {id: 'child'}, React.createElement('h1', {}, "i am h1 tag")));
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
*/

/*
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag1</h1>
        <h1>I'm h1 tag2</h1>
    </div>
</div>
*/

// with in the child div we need to insert 2 h1 tages. both the h1 tags are silbings
// when we wants to insert more than siblings at a time we can give the 3rd parameter (children) in the form of an array
const parent= React.createElement(
    'div', {id: 'parent'}, 
    React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {}, "i am h1 tag1"), 
        React.createElement('h2', {}, "i am h1 tag2"),])
    );
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);