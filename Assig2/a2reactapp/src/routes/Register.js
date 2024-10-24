import './Register.css';

function Register() {
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center align-items-center bg-white shadow-sm border border-start-0 border-secondary">
                <div className="text-center">
                    <img src={logo} alt="logo" style={{ width: "23%" }} className="mb-3" />
                    <h2 className="fw-bold login-font">WELCOME BACK,</h2>
                    <p className="text-muted login-font">Please login to continue to use the services.</p>

                    <div className="d-grid mx-auto col-12 mt-3">
                        <a href="#" className="btn btn-outline-dark login-font">Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;