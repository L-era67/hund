import { Component6 } from "./Component6"

export const Component5 = ({prop5}) =>{
    console.log("Props55",prop5.prop4)
    return(
        <Component6 prop6 = {prop5.prop4}/>
    )
}