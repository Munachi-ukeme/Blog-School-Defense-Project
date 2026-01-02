import React, {useState} from "react";
import AdminHomePic from "../assets/AdminHomePic.jpg";
import Login from "./Login";
import Signup from "./Signup";

function AdminHome() {
  // This makes the signin form not to show. only page pic and signup
  const [Login, setLogin] = useState(false);

    if (Login){
        return(
          <div className="container">
            <div className="left">
              <Signin />
              <p>
              Not an Admin? {" "}
              <button onClick={() => setLogin(false)}>Signup</button>
            </p>
            </div>

            <div className="right">
              <img src={AdminHomePic} alt="AdminHomePic" />
              < HomeWelcomeMessage />
            </div>
          </div>
        );
      } else{
        return(
          <div className="container">

            <div className="Signup-left">
            <img src={AdminHomePic} alt="AdminHomePic" />
            <HomeWelcomeMessage />
            </div>

          <div className="Signup-right">
            <Signup />
            <p>
              Already an Admin? {""}
              <button onClick={() => setLogin(true)}>Signin</button>
            </p>
          </div>
          </div>   
        );
      }
    }

export default AdminHome;

function HomeWelcomeMessage() {
  return(
    <div className="welcomeMessage">
      <h2>Welcome to Admin Portal</h2>
      <p>Manage your blogs, users, and more with ease.</p>
    </div>
  );
}

