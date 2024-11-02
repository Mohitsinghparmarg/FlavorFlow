import { Component } from "react";
import { UserBased } from "./UserBased";
import { UserClassBased } from "./UserClassBased";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount function");
  }

  render() {
    console.log("parent render method...");
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-teal-500 p-6">
        <h1 className="text-4xl font-bold text-white mb-10 shadow-md">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
          <UserClassBased 
            name={"1st (class)"} 
            location={"1 (class)"} 
            contact={"@mohitsinghparmar01 (class)"} 
          />
          {/* <UserClassBased 
            name={"2nd (class)"} 
            location={"2 (class)"} 
            contact={"@mohitsinghparmar02 (class)"} 
          /> */}
        </div>
      </div>
    );
  }
}

export default About;









// export const About = () => {
//   return (
//     <div className="about-page">
//       <h1 className="about-title"></h1>
//         <UserBased info = {"this is mohit in functional based component"}/>
//         <UserClassBased info = {"this is mohit in class based component"}/>
//     </div>
//   );
// };
