import React, { useState, useEffect } from "react";
import CoolCard from "../Components/CoolCard";
import Navbar from "./navbar";
import "./test.css";
export default function TestTeacher() {

    const tests = ["History","Mathematics","Physics","Chemistry","Biology","English"]
<<<<<<< HEAD
    const images=["https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-action-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/920157/pexels-photo-920157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/159581/dictionary-reference-book-learning-meaning-159581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
=======
    const images=["https://images.pexels.com/photos/820735/pexels-photo-820735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/3825578/pexels-photo-3825578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        "https://images.pexels.com/photos/1771338/pexels-photo-1771338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/6929348/pexels-photo-6929348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
>>>>>>> 2f6fa5c16b44b5aab4182eb1356cd72f787e92a9
    ];
    return (
        <>
            <Navbar person="Teacher" homelink="/home/teacher"></Navbar>
            <div className="test">
                {tests.map((item,index) => (
                    <CoolCard name={item} Image={images[index]}></CoolCard>
                ))}
            </div>
            <div className="test">
                <a href="/tests/add" className="test">
                    <button>Create New Test</button>
                </a>
            </div>
        </>
    )
}