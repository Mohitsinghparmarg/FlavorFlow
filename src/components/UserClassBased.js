import React from "react"


export class UserClassBased extends React.Component {
            
    constructor(props){
          super(props);
         
          this.state = {
              userInfo:{
                  
                  name:"Dummy",
                  location:"Default",
                  avatar_url:"http://dummy-photo.com"  ,       
                 twitter_username : "mohitsinghparmar4991195@gmail.com"

              }
          };
    }

  async componentDidMount(){
        

            const data = await fetch("https://api.github.com/users/Mohitsinghparmarg");
            const json = await data.json();

            this.setState({
              userInfo : json,
            });

           // console.log(json);

    }

    componentDidUpdate()
      {
        // this.timer = setInterval(() =>{
        //      console.log("it will be called multiple times");
        //  },1000);
         // console.log("component did updated");
      }
   
   componentWillUnmount(){
    clearInterval(this.timer);
        // console.log("component will unmount");
   }



  render() {

       const {name,location,avatar_url,
        twitter_username} = this.state.userInfo;
         
     

      return (
          <div className='user-card'>
             
              <img src= {avatar_url} />
              <h2>Name:{name}</h2>
              <h3>Location:{location}</h3>
              <h3>twitter_username:{twitter_username}</h3>
          </div>
         );
    }


}







/**
 * 
 * --- MOUNTING ---
 * 
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy>
 * Component Did Mount
 *      <API Call>
 *      <this.setState> -> State variable is updated
 * ---  UPDATE ---
 *     render(API data)
 *     <HTML (new API data) >
 *     componentDid Update
 * 
 * 
 * 
 * 
 */


















// export class UserClassBased extends React.Component {
              
   
//     constructor(props){
//           super(props)
         
//          this.state = {
//                count1 : 0,
              
//          } 
//          console.log(this.props.info +"UserClass child constructor")
//      }

     

//      componentDidMount(){
//          console.log(this.props.info + "child componentDidMount function");
//      }
//  render () {


//          const {info} = this.props;
//          const {count1,count2} = this.state;
//            console.log(this.props.info +"UserClass's child render method")
//              return (
                   
//                  <div>
//                      <h1>name : {info}</h1> 
//                      <h1>class-count1 : {count1}</h1>
//                      <button onClick={() => {
//                            this.setState({
//                              count1 : this.state.count1 + 1,
//                            }
//                            )
//                      }}>Click me</button>
//                  </div>
//              )
//        }
// }



/*

 parent Constructor
 parent render method...

 this is 1st class based componentUserClass child constructor
 this is 1st class based componentUserClass's child render method

 this is 2nd class based componentUserClass child constructor
 this is 2nd class based componentUserClass's child render method

 this is 1st class based componentchild componentDidMount function
 this is 2nd class based componentchild componentDidMount function

 parent componentDidMount function

*/
