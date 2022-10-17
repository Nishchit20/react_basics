import React from "react";

function FunctionalComponent()
{
 return(
    <h4><FunctionalComponent4></FunctionalComponent4>I AM THE FIRST FUNCTIONAL COMPONENT AND <FunctionalComponent1></FunctionalComponent1></h4>
 )
}

function FunctionalComponent1()
{
 return(
    <h5>I AM THE SECOND FUNCTIONAL COMPONENT<FunctionalComponent2></FunctionalComponent2></h5>
 )
}

//arrow function
const FunctionalComponent2=()=>{
    return(
        <h6>I AM THE THIRD FUNCTIONAL COMPONENT<FunctionalComponent3></FunctionalComponent3></h6>
    )
}
//arrow function
const FunctionalComponent3=()=>{
    return(
        <div>
        <p>I AM THE FOURTH FUNCTIONAL COMPONENT ENCLOSED IN DIV TAG</p>
        <p>I AM THE FOURTH FUNCTIONAL COMPONENT ENCLOSED IN DIV TAG</p>
        </div>
    )
}


const FunctionalComponent4=()=>{
    return(
        <table style={{width:'100'}}>
            <thead>
                <tr>
                    <FunctionalComponent5></FunctionalComponent5>
                </tr>
            </thead>
        </table>
    )
}

const FunctionalComponent5=()=>{
    return(
        <React.Fragment>
        <td>SNO</td>
        <td>NAME</td>
        <td>AGE</td>
        <td>DESIGNATION</td>
        </React.Fragment>
    )
}

export default FunctionalComponent;