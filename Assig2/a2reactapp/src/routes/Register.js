import './Register.css';
import logo from '../logo.png';
import RegisterSection from '../components/RegisterSection';

function Register() {
    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center align-items-center bg-white shadow-sm border border-secondary">
                <div className="text-center p-5">
                    <img src={logo} alt="logo" style={{ width: "23%" }} className="mb-3" />
                    <h2 className="fw-bold login-font">CREATE AN ACCOUNT</h2>
                    <p className="text-muted login-font">Please fill in the details below to complete your registration.</p>

                    <RegisterSection />

                    <div className="mt-3">
                        Already have an account? <a href="/Login" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover login-font">Let's login.</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;