import { Component5 } from "./Component5"

export const Component4 = (props) =>{
    console.log("Prop4",props.prop4)
    return(
        <Component5 prop5 ={props}/>
    )
}