import React, { useState, useEffect, useRef } from "react";
import "./home.css";
import Button from "../Components/button";
import Navbar from "./navbar";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CoolCard from "../Components/CoolCard";

import IMG1 from "../Images/clock.png";
import IMG2 from "../Images/working.png";
import IMG3 from "../Images/accuracy.png";

import IMGA from "../Images/aaaaaaaaaaaaaaaaaaa.png";
import IMGB from "../Images/bbbbbbbbbbbbbbbb.png";
import IMGC from "../Images/ccccccccccccccccccccccccc.png";

import "./locomotive.css";
import LocomotiveScroll from "locomotive-scroll";

export default function HomeT() {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log(scrollPosition);
    const scrollInstance = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.5,
    });
    return () => {
      scrollInstance.destroy();
    };
  }, []);


  const options = [
    {
        name : "Student Database",
        link : "https://images.pexels.com/photos/6549358/pexels-photo-6549358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name : "Update Attendance",
        link : "https://images.pexels.com/photos/8423046/pexels-photo-8423046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        name : "Add Examinations",
        link : "https://images.pexels.com/photos/4022332/pexels-photo-4022332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <>
      <Navbar person="Teacher"></Navbar>
      <div className="home" data-scroll-container ref={scrollRef}>
        <section className="home-1">
          <img
            src="https://images.unsplash.com/photo-1497864149936-d3163f0c0f4b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            data-scroll
            data-scroll-speed="-3"
          />
          <div>
            <h1>An online examination and grading system for students.</h1>
            <p>
              An Online Examination and Grading System for Students streamlines
              assessments by enabling remote exam-taking, electronic
              submissions, and automated grading. This digital platform enhances
              accessibility and academic integrity, offering educators efficient
              evaluation tools while providing students with a convenient and
              secure means of assessment.
            </p>
            <Button title="PREPARE QUESTION PAPER" link="/tests/teacher"></Button>
          </div>
        </section>
        <section className="home-2">
          <h2>HOW WE CAN HELP YOU</h2>
          <div className="home-2box">
            <div>
              <img src={IMG1} alt="" />
              <h1>Time Efficient</h1>
              <p>
                Rapid response and valiation for student academic performances.
              </p>
            </div>
            <div>
              <img src={IMG2} alt="" />
              <h1>Reduced Manual Work</h1>
              <p>
                Reduces the amount of time required for lecturers to Evaluate.
              </p>
            </div>
            <div>
              <img src={IMG3} alt="" />
              <h1>Accurate Results</h1>
              <p>
                Avoids errors that occur during manual validation of
                examinations.
              </p>
            </div>
          </div>
          <Button title="Browse More Services"></Button>
        </section>

        <section className="home-3">
          <img
            src="https://images.pexels.com/photos/1708912/pexels-photo-1708912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            data-scroll
            data-scroll-speed="3"
          />
          <span></span>
          {/* <section>
                    <img src={IMGA} alt="" data-scroll data-scroll-speed="1"/>
                </section>
                <section>
                    <img src={IMGB} alt="" data-scroll data-scroll-speed="4"/>
                </section>
                <section>
                    <img src={IMGC} alt="" data-scroll data-scroll-speed="10"/>
                </section> */}
          <h1>How Educaite Empowers Teachers</h1>
          <div>
            <p>
            Educaite's online examination platform revolutionizes students'
              learning experiences by offering convenience, efficiency, and
              personalized feedback. With the ability to take exams from
              anywhere, students can reduce stress and accommodate their
              individual schedules. Instant grading and feedback help them
              identify strengths and weaknesses swiftly, while detailed
              performance analytics provide valuable insights for targeted
              improvement, ultimately fostering a more engaged, empowered, and
              successful learning journey.
            </p>
          </div>
        </section>

        <div className="test">
            {options.map((item) => (
                <CoolCard name={item.name} Image={item.link}></CoolCard>
            ))}
        </div>

        <section className="home-4">
          <h1>get to know us</h1>
          <div>
            <section>
              <p>
                We are a couple of students from Sahyadri College of Engineering
                and Management, Mangaluru, currently in 5th Semister, 3rd year
                Engineering who are passionate in Building Websites. We built
                this website solely to test our Frontend and Basic Backend
                development Skills. We have used frameworks like React.Js,
                Styling Sheets like Tailwind for Frontend and Node.Js ,
                Express.Js, MySQL for Backend.
              </p>
              <Button title="ABOUT US"></Button>
            </section>
            <section>
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
