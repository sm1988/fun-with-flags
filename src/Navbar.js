import React from "react";

function Navbar(props) {
    return (
        <header className="container fixed-top header-top">
            <div className="row h1-top">

                <div className="col-md-6 title">
                    <h1 >Fun With Flags</h1>
                    <p>Get points by clicking on a flag but don't click on any more than once!</p>
                    <p>If you get top score of 12, we will surprise you!</p>
                </div>
                <div className="header-img col-md-2"></div>
                <nav className="col-md-4 title" >
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Top Score: <span>{props.highScore}</span> </p>
                    {props.children}
                </nav>
            </div>
        </header>
    )
}

export default Navbar;