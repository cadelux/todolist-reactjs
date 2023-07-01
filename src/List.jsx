import React from 'react';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import ListItem from '@mui/material/ListItem';

function List(props){
    return(
        <div className='list'>
        <ListItem className="list-text" alignItems="flex-start"> 
        {props.item} 
        </ListItem>

        <ListItem> 

        <Button className="deletebtn" onClick={props.onDelete} variant='outlined' color="success" startIcon={<DoneIcon/>}>Done!</Button> 
        </ListItem>
            
        {/* <li>{props.item} <Button onClick={props.onDelete} variant='outlined' startIcon={<DeleteIcon/>}>Delete</Button></li> */}
        </div>
    )
}

export default List;