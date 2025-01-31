import React, { useState, useEffect } from "react";
import Button from "../Components/button";
import "./signup.css";
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const navigate = useNavigate();
    const [route,setRoute] = useState("");

    const [warning,setwarn] = useState("");

    const [formData, setFormData] = useState({
        person: '',
        username: '',
        email: '',
        usn: '',
        password: '',
        confirmPassword: ''
    });
    // const handlePerson = (event)=>{
    //     setPerson(event.target.textContent);
    //     console.log(person);
    // }
    const handlePerson = (event) => {
        const role = event.target.textContent;
        setFormData({ ...formData, person: role });
        setRoute("/home/"+role.toLowerCase());
        console.log(route);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const submit = async (event) => {
        event.preventDefault();
        console.log("Form submitted.");
    
        if (formData.password !== formData.confirmPassword) {
            setwarn("Passwords do not match");
        }
        else {
            setwarn("");
    
            try {
                const response = await fetch('http://127.0.0.1:5000/api/signup', {
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
            }
        }
    };
    return (
        <>
            <div className="signbox">
                <section>
                    <img src="https://img.freepik.com/premium-photo/abstract-collage-education-intelligence-wallpaper_468322-1437.jpg" alt="" />
                </section>
                <section>
                    <h1>Sign Up</h1>
                    <div>
                        <span>Sign Up as ?</span>
                        <p>
                            <button onClick={handlePerson}>Teacher</button>
                            <button onClick={handlePerson}>Student</button>
                        </p>
                    </div>
                    <form>
                        <input type="text" name="username" placeholder="Name" onChange={handleChange} value={formData.username} required />
                        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                        <input type="text" name="usn" placeholder="USN" onChange={handleChange} value={formData.usn} required />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} required />
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={formData.confirmPassword} required />
                        <span>{warning}</span>
                        <button  onClick={submit}>SIGN UP</button>
                    </form>

                    <p>
                        Already have an account?
                        <a href="/">Sign In</a>
                    </p>
                </section>
            </div>
        </>
    )
}