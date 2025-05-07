import { Component4 } from "./component4";

export const Component3 = (props) =>{
    console.log("Prop33:",props.prop3);
    return(
        <Component4 prop4 = {props.prop3}/>
    )
}