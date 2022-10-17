import React from "react";
import FuncComp from '../Components/Functional';

class ClassComponent extends React.Component{
    render(){
        return(
            <h3><FuncComp></FuncComp>I am the first class component and <ClassComponent1></ClassComponent1></h3>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <h3>I am the Second class component and  <FunctionalComponent></FunctionalComponent></h3>
        )
    }
}

function FunctionalComponent()
{
 return(
    <h4>Functional component</h4>
 )
}

export default ClassComponent;