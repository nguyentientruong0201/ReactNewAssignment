import React from "react";
import Welcome from "../../Welcome/welcome";

const people = [{
    name: "Son tung",
    age : "25",
    color :"green",
    id : '1'
},
    {
        name:"Son tung",
        age : "25",
        color : "blue",
        id : '2'
    }
]
const WelcomePage = () => {
    return (
        <div>
          {people.map( person =>{
              return (
                  <Welcome
                     name={ person.name }
                     age = { person.age }
                     color = { person.color }
                     id = { person.id }
                  />
              )
          })}
        </div>

    );
};

export default WelcomePage;