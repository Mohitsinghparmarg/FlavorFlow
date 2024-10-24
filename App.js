const heading = React.createElement
      ( "div",
        {id:"heading"},
          [
             React.createElement("h1", {id:"h1"},"hello I'm h1 tag"),
             React.createElement("h2",{id:"h2"},"hello I'm h2 tag")
          ]
      );




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);