import '../routes/Register.css';

function RegisterSection() {
    return (
        <form action="/Register" method="post" className="text-start mt-4">
            <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold login-font">Username</label>
                <input type="text" name="username" placeholder="Enter your desired username" className="form-control login-font" required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold login-font">Password</label>
                <input type="password" name="password" placeholder="Create a password" className="form-control login-font" required />
            </div>
            <div className="mb-3">
                <label htmlFor="passwordReEntered" className="form-label fw-bold login-font">Re-enter your password</label>
                <input type="password" name="passwordReEntered" placeholder="Re-enter the password you've just provided" className="form-control login-font" required />
            </div>
            <div className="d-grid mx-auto col-12 mt-4">
                <button type="submit" className="btn btn-dark login-font">Submit Details</button>
            </div>
        </form>
    );
}

export default RegisterSection;