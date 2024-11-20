import { Component, useContext } from "react";
import { UserClassBased } from "./UserClassBased";
import { UserContext } from "../utills/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }

  componentDidMount() {
  //  console.log("parent componentDidMount function");
  }



  render() {
  //  console.log("parent render method...");
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-200 to-gray-200 p-4 md:p-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-10 shadow-md text-center">
          I am a software developer
        </h1>
        <div>
          LoggedInUser:
          <UserContext.Consumer>
               {( {loggedInUser}) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-xs md:max-w-md lg:max-w-lg">
          <UserClassBased 
            name={"1st (class)"} 
            location={"1 (class)"} 
            contact={"@mohitsinghparmar01 (class)"} 
            
          />
        </div>
      </div>
    );
  }
}

export default About;
