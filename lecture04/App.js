import React from "react";
import ReactDOM from "react-dom/client";

/*
*container (app component)
    * Header  ==> logo , nav items
    * Body    ==> search bar, restaurent container, food item cards
    * Footer  ==> copyright, links, address, contact
*/
const Header = () => {
    return (
        <div className="header">
            <div id="logo-container">
                <img className="logo-container" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" /> 
            </div>
            <div className="Nav-items">
                <ul className="items">
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout =()=>{
    return (
        <div className="app">
            <Header/>
        </div> 
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

