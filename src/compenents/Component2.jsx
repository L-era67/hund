import { Component3 } from "./component3"

export const Component2 = (props) =>{
    console.log("prop2 :",props.prop2)
    return(
        < Component3 prop3 ={props.prop2}/>
    )
}