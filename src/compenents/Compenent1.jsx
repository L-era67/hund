import { Component2 } from "./Component2";

export const Component1 = (props) => {
    console.log("component1:",props.props)
  return (
    
    <div>
        <Component2 prop2 = {props.props}/>
    </div>
    
  );
};
