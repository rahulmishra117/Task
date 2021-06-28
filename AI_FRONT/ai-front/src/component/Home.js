import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron, Button } from "react-bootstrap";
import "./style.css";
function Home() {
  return (
    <div>
      <Jumbotron className="Jumbo-style">
        <div className="jumbo-child">
          <div className="jumbo-left-child">
            <h1>WELOCME BUDDY</h1>
            <p>
              Just Add ,Update,and Count the Task in the React App.
            </p>
            <p>
              <Button variant="primary">CLICK</Button>
            </p>
          </div>
          <div className="jumbo-right-child">
          <img className="jumbo-child-img" src="https://cdn.dribbble.com/users/2066397/screenshots/14299783/media/0a092cdff199dbb9ada7507d17b5baf2.png?compress=1&resize=1200x900">
          </img>
          
          </div>
        </div>
      </Jumbotron>
    </div>
  );
}
export default Home;
