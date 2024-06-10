import React, { useState, useEffect } from "react";
import Button from "../Components/button";
import "./signup.css";
import { useNavigate, Link } from 'react-router-dom';

export default function AnswerTest() {

    const navigate = useNavigate();
    const [route, setRoute] = useState("/home/teacher");

    const [warning, setwarn] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        link: '',
        q1: '',
        ans1: '',
        q2: '',
        ans2: '',
        q3: '',
        ans3: '',
        q4: '',
        ans4: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const submit = async (event) => {
        event.preventDefault();
        console.log("Form submitted.");

        setwarn("");

        try {
            const response = await fetch('http://127.0.0.1:5000/create_test_with_questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form data');
            }
            navigate(route);
        } catch (error) {
            console.error('Error submitting form data:', error);
            setwarn("User doesnt exist");
        }
    };

    const goback=()=>{
        navigate("/tests/student");
    }

    const test={
        name:"Physics",
        q1:"write a short note on gravity.",
        ans1:"",
        q2:"Define the concept of momentum.",
        ans2:"",
        q3:"What is the law of conservation of energy?",
        ans3:"",
        q4:"Explain the concept of force.",
        ans4:"",
    }

    return (
        <>
            <div className="signbox">
                <section>
                    <img src="https://plus.unsplash.com/premium_photo-1678567671496-aa666d40af88?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </section>
                <section className="scrollable">
                    <button onClick={goback} className="goback">&#10229;</button>
                    <h1>{test.name} Exam</h1>
                    <form action="">
                        <p>
                            {test.q1}
                        </p>
                        <textarea name="ans1" placeholder="Enter your answer for Question 1" onChange={handleChange} value={formData.ans1} />
                        <p>

                            {test.q2}
                        </p>
                        <textarea name="ans2" placeholder="Enter your answer for Question 2" onChange={handleChange} value={formData.ans2} />

                        <p>
                            {test.q3}
                        </p>
                        <textarea name="ans3" placeholder="Enter your answer for Question 3" onChange={handleChange} value={formData.ans3} />

                        <p>
                            {test.q4}
                        </p>
                        <textarea name="ans4" placeholder="Enter your answer for Question 4" onChange={handleChange} value={formData.ans4} />

                        <span>{warning}</span>
                        <Link to={route.toString()}>
                            <button onClick={submit}>Finish Exam</button>
                        </Link>
                    </form>
                </section>
            </div>
        </>
    )
}