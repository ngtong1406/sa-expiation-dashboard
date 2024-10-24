import css from './Login.css';
import logo from '../logo.png';
import loginBanner from '../assets/login-banner.jpg';
import LoginSection from '../components/LoginSection';

function Login() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center bg-white shadow-sm border border-end-0 border-secondary login-image-container">
                    <img src={loginBanner} className="login-image" />
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center bg-white shadow-sm border border-start-0 border-secondary">
                    <div className="text-center">
                        <img src={logo} alt="logo" style={{ width: "23%" }} className="mb-3" />
                        <h2 className="fw-bold login-font">WELCOME BACK,</h2>
                        <p className="text-muted login-font">Please login to continue to use the services.</p>

                        <LoginSection />

                        <div className="d-grid mx-auto col-12 mt-3">
                            <a href="#" className="btn btn-outline-dark login-font">Sign up!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;