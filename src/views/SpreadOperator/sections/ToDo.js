import React from 'react' 
import ClearIcon from '@mui/icons-material/Clear';

function Input (props){

    const styles ={
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    }
    return(
           
        <div style={styles}>
            <div style={{width: "80%", wordWrap:"break-word"}}>
                <li style={{alignItems:"center"}}>{props.text}</li>
            </div>
            
            <div style={{width: "20%", marginTop:"3%"}}>
                
                <ClearIcon onClick={()=>{
                        props.onChecked(props.id)
                }}/>
            </div>
           
        </div> 
    )  
}

export default Input;

