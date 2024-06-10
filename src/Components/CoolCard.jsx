import React, {useState} from "react";
import "./coolcard.css";

export default function CoolCard(props) {

    const [Opacity,setOpacity] = useState("0%");
    const [Move,setMove] = useState("translateY(0px)");

    const handleMouseEnter = () => {
        setOpacity("100%");
        setMove("translateY(0px)")
    };
    
    const handleMouseLeave = () => {
        setOpacity("0%");
        setMove("translateY(50px)")
    };

    return (
        <>
<<<<<<< HEAD
            <a href={props.link}>

=======
>>>>>>> 2f6fa5c16b44b5aab4182eb1356cd72f787e92a9
            <section className="coolcard" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div style={{opacity:Opacity}}></div>
                <img src={props.Image} alt="" />
                <h1 
                style={{
                    opacity:Opacity,
                    transform:Move
                }}
                >{props.name}</h1>
                <p 
                style={{
                    opacity:Opacity,
                    transform:Move
                }}
                >{props.name}</p>
            </section>
<<<<<<< HEAD
            </a>
=======
>>>>>>> 2f6fa5c16b44b5aab4182eb1356cd72f787e92a9
        </>
    )
}