import React from 'react';
import { useState } from "react";

export function App(props) {

  // States for registration
    const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
    const [npi, setNpi] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
 
    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
 
    // Handling the first name change
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        setSubmitted(false);
    };
	
	// Handling the last name change
	const handleLastName = (e) => {
        setLastName(e.target.value);
        setSubmitted(false);
    };
	
	// Handling the npi Number change
	const handleNpi = (e) => {
        setNpi(e.target.value);
        setSubmitted(false);
    };
	
	// Handling the address change
	const handleAddress = (e) => {
        setAddress(e.target.value);
        setSubmitted(false);
    };
	
	// Handling the Phone Number change
	const handlePhone = (e) => {
        setPhone(e.target.value);
        setSubmitted(false);
    };
 
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
 
 
    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName === "" || lastName === "" || npi === "" || address === "" || phone === "" || email === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };
 
    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? "" : "none",
                }}
            >
                <h1>Provider {firstName} {lastName} successfully registered into Availity</h1>
            </div>
        );
    };
 
    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? "" : "none",
                }}
            >
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

  return (
    <div className='App'>
            <div>
                <h1>Availity Provider Registration</h1>
            </div>
 
            {/* Calling to the methods */}
            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>
 
            <form>
                {/* Labels and inputs for form data */}
                <label className="label">First Name</label>
                <input
                    onChange={handleFirstName}
                    className="input"
                    value={firstName}
                    type="text"
                />
				
				<label className="label">Last Name</label>
                <input
                    onChange={handleLastName}
                    className="input"
                    value={lastName}
                    type="text"
                />
				
				<label className="label">NPI Number</label>
                <input
                    onChange={handleNpi}
                    className="input"
                    value={npi}
                    type="text"
                />
				
				<label className="label">Business Address</label>
                <input
                    onChange={handleAddress}
                    className="input"
                    value={address}
                    type="text"
                />
 
				<label className="label">TelePhone Number</label>
                <input
                    onChange={handlePhone}
                    className="input"
                    value={phone}
                    type="text"
                />
				
                <label className="label">Email</label>
                <input
                    onChange={handleEmail}
                    className="input"
                    value={email}
                    type="email"
                />
 
                <button onClick={handleSubmit} className="btn" type="submit">
                    Submit
                </button>
            </form>
        
    </div>
  );
}
