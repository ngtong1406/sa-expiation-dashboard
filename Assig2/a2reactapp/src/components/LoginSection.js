import { useEffect, useState } from 'react';
import '../routes/Login.css';
import sha256 from 'crypto-js/sha256';

function LoginSection() {
    const [isLoggedIn, setStatus] = useState(false);
    const [userName, setUserName] = useState('');
    const [userPassword, setPassword] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5147/api/Login?userName=${userName}&passwordHash=${userPassword}`)
            .then(response => response.json())
            .then(data => setStatus(data))
            .catch(err => { console.log('Something:' + err) });
    }, [userName, userPassword]);

    if (isLoggedIn == true) {
        window.location.href = "/Dashboard";
    }

    function onSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        setUserName(formData.get('username'));
        setPassword(sha256(formData.get('password')));
    }

    function searchUserNameAndPassword() {
        const userNameValue = document.querySelector('[name="username"]').value;
        const passwordValue = document.querySelector('[name="password"]').value;

        setUserName(userNameValue);
        setPassword(sha256(passwordValue));
    }

    return (
        <form action="/Login" method="post" onSubmit={onSubmit} className="text-start mt-4">
            <div className="mb-3 text-danger">{isLoggedIn ? "" : "Wrong username or password! Please try again."}</div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold login-font">Username</label>
                <input type="text" name="username" placeholder="Username" className="form-control login-font" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold login-font">Password</label>
                <input type="password" name="password" placeholder="Password" className="form-control login-font" required />
            </div>
            <div className="d-grid mx-auto col-12 mt-3">
                <button type="submit" className="btn btn-dark login-font" onClick={searchUserNameAndPassword}>Login</button>
            </div>
        </form>
    );
}

export default LoginSection;