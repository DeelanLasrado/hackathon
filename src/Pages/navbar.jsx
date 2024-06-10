import React, { useState, useEffect } from "react";
import "./navbar.css";
export default function Navbar(props) {

    const [scrollPosition, setScrollPosition] = useState(0);

    const [homeLink,sethomeLink] = useState("/home/" + props.person.toLowerCase());
    const [testsLink,settestsLink] = useState("/tests/" + props.person.toLowerCase());
    
    return (
        <>
            <div className="navbox">
                <div className="navitems">
                    <span>Educaite</span>
                    <p>{props.person}</p>
                </div>
                <div className="navitems">
                    <ul>
                        <li>
                            <a href={homeLink}>Home</a>
                        </li>
                        <li>
                            <a href={testsLink}>Tests</a>
<<<<<<< HEAD
=======
                        </li>
                        <li>
                            <a href="/input">Inputs</a>
>>>>>>> 2f6fa5c16b44b5aab4182eb1356cd72f787e92a9
                        </li>
                        <li>
                            <a href="/about">About Us</a>
                        </li>
                        <li>
                            <a href="/">Login/Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}