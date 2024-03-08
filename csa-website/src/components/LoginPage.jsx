import "./LoginPage.css";
import CSALogo from "../assets/CSA.png";
import GoogleLogo from "../assets/google-logo.png";
import FBLogo from "../assets/fb-logo.png";

const LoginPage = () => {
  return (
    <div className="login-card">
      <img className="logo" src={CSALogo} alt="Career Sure Acedamy Logo" />
      <button className="login-btn">
        <img src={GoogleLogo} alt="google logo" />
        <div>Continue with Google</div>
      </button>
      <p>
        <span>OR</span>
      </p>
      <button className="login-btn">
        <img src={FBLogo} alt="facebook logo" />
        <div>Continue with Facebook</div>
      </button>
    </div>
  );
};

export default LoginPage;
