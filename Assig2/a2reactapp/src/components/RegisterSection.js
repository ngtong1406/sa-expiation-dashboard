import '../routes/Register.css';
import { useEffect, useState } from 'react';
import sha256 from 'crypto-js/sha256';

function RegisterSection() {
    const [registerStatus, setStatus] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setPassword] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5147/api/Register?userName=${userName}&passwordHash=${userPassword}`)
            .then(response => { return response.json() })
            .then(data => setStatus(data))
            .catch(err => { console.log(err) });
    }, [userName, userPassword]);

    if (registerStatus === true) {
        alert("You have successfully registered an account. You're now logged in!");
        window.location.href = '/Dashboard';
    }

    function searchUserNameAndPassword() {
        const userNameValue = document.querySelector('[name="username"]').value;
        const passwordValue = document.querySelector('[name="password"]').value;

        setUserName(userNameValue);
        setPassword(sha256(passwordValue));
    }

    function onSubmit(e) {
        e.preventDefault();
    }

    return (
        <form action="/Register" onSubmit={onSubmit} method="post" className="text-start mt-4">
            <div className="mb-3 text-danger">{(!registerStatus) ? "This account has already existed! Please try a different one." : ""}</div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold login-font">Username</label>
                <input type="text" name="username" placeholder="Enter your desired username" className="form-control login-font" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold login-font">Password</label>
                <input type="password" name="password" placeholder="Create a new password" maxLength="64" className="form-control login-font" required />
            </div>
            <div className="d-grid mx-auto col-12 mt-4">
                <button type="submit" className="btn btn-dark login-font" onClick={searchUserNameAndPassword}>Submit Details</button>
            </div>
        </form>
    );
}

export default RegisterSection;