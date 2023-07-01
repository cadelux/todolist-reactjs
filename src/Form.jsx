import React,{useState,useEffect} from 'react'
import List from'./List.jsx';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';
import Liste from '@mui/material/List';

function Form (){
const [inputValue,setInputValue]=useState("")

const [todos,setTodos]=useState(()=>{
    const localTodos= JSON.parse(localStorage.getItem("todos"))
   return localTodos ? localTodos : []
   })
   

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))
}
,[todos])

const handleOnchangeInput=function(e){
setInputValue(e.target.value)
}

const handleSubmitForm=function(e){
e.preventDefault()
if(inputValue.trim()!==""){
setTodos([...todos,inputValue])
setInputValue("")
}}

const handleDeleteTodo=function(index){
   const uptatedTodos= todos.filter((_,i)=>i !==index);
   // filterin özelliği : koşulu sağlayanlarla yeni bir dizi oluşturuyor. 
    setTodos(uptatedTodos)
}

    return(
        <>
     
            <form className='todo-form' onSubmit={handleSubmitForm}>
                <TextField id="outlined-basic" label="todo" color="success" variant="outlined" inputProps={{style: {fontSize: 25}}} type='text' value={inputValue}  placeholder='please entry a todo ' onChange={handleOnchangeInput}/>

                <Button  onClick={()=>handleSubmitForm} type='submit' variant="contained" endIcon={<SendIcon />}> Add </Button>

                {/* form etiketinin içinde olduğu için button submit etkisinde kalıyor. */}
            </form>

        <Liste className='liste' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo,index)=>(

            <List key={index} item={todo}  onDelete={() => handleDeleteTodo(index)} /> 
            ))}
             </Liste>
      
        </>
    )

}

export default Form