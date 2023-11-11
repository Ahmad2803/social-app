import "./register.scss";
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Portals Social.</h1>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque quasi facilis et! Odit libero nostrum tempore.</p>
          <span>Do you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="text" placeholder="Name"></input>
            <Link to="/register">
            <button>Register</button>
        </Link>
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
