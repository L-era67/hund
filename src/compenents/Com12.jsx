import {Com13} from "./Com13"

export const Com12 = (props) =>{
    console.log(props.prop12.prop11.prop10.prop9)
    return(
        < Com13 prop13 = {props.prop12.prop11.prop10.prop9}/>
    )
}