import css from './Login.css';

function Login() {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-6 d-flex justify-content-center align-items-center bg-white shadow-sm border border-end-0 border-secondary">
                    <div className="text-center">
                        <h2 className="fw-bold login-font">WELCOME BACK,</h2>
                        <p className="text-muted login-font">Please login to continue to use the services.</p>

                        <form action="#" method="post" className="text-start mt-4">
                            <div className="mb-3">
                                <label for="username" className="form-label fw-bold login-font">Username</label>
                                <input type="text" name="username" placeholder="Username" className="form-control login-font" required />
                            </div>
                            <div className="mb-3">
                                <label for="username" className="form-label fw-bold login-font">Password</label>
                                <input type="password" name="password" placeholder="Password" className="form-control login-font" required />
                            </div>
                            <div className="d-flex justify-content-end">
                                <a href="#" className="link-body-emphasis link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover login-font">Forgot Password?</a>
                            </div>
                            <div className="d-grid mx-auto col-12 mt-3">
                                <button type="submit" className="btn btn-dark login-font">Login</button>
                            </div>
                        </form>
                        <div className="d-grid mx-auto col-12 mt-3">
                            <a href="#" className="btn btn-outline-dark login-font">Sign up!</a>
                        </div>
                    </div>
                </div>

                <div className="col-6 d-flex justify-content-center align-items-center bg-white shadow-sm border border-start-0 border-secondary login-image-container">
                    <img src="extra_images/login_photo.jpeg" className="login-image" />
                </div>
            </div>
        </div>
    );
}

export default Login;