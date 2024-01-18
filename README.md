# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







<!-- 

import React, { useState } from 'react'

const App = () => {
    const [EditIndex,SetEditIndex] = useState(-1);
    const [InputData, SetInputData] = useState({
        Name: "",
        Email: "",
        Password:"",
    })
    const [DataBase,SetDataBase] = useState([]);
const HandleInput =(Inputsvalue,value)=>{
 SetInputData((prev)=>({...prev,[Inputsvalue]:value}))
}
    const HandleSubmitForm = (e) =>{
          e.preventDefault();
          if(!InputData.Password || !InputData.Email ||!InputData.Name){
            alert("empty")
          }else if(EditIndex !== -1){
            const editdata = [...DataBase];
            editdata[EditIndex] = InputData;
            SetDataBase(editdata);
            SetEditIndex(-1);
            SetInputData({
                Name: " ",
                Email: " ",
                Password: " ",
            })
          }
          else{
            SetDataBase((prevvalue)=>[...prevvalue,InputData])
            SetInputData({
                Name: " ",
                Email: " ",
                Password: " ",
            })
          }
         
    }
    const HandleDelete = (index) =>{
        const filterdata = DataBase.filter((value,i)=>i !== index);
        SetDataBase(filterdata)
      }
      const HandleEdit = (index)=>{
         SetInputData(DataBase[index]);
         SetEditIndex(index)
      }
 
    return (
        <div>
            <h1>Todo App</h1>
            <form  onSubmit={HandleSubmitForm} >
                Name <input type="text" placeholder='name' name='Name' value={InputData.Name} onChange={(e)=>HandleInput('Name',e.target.value)} /><br />
                Email <input type="email" placeholder='email' name='Email'  value={InputData.Email}  onChange={(e)=>HandleInput('Email',e.target.value)}/><br />
                Password <input type="password" placeholder='password' name='Password' value={InputData.Password}  onChange={(e)=>HandleInput('Password',e.target.value)}/>
                <br />
                <br />
                <button type='submit'>{EditIndex !== -1 ? "edit Data save" : "Add Data" }</button>
            </form>
            <ul>
                {DataBase?.map((value,i)=>{
                    return <li key={i}>{value.Name}  :  {value.Password}  : {value.Email} <button onClick={()=>HandleEdit(i)}>Edit</button> <button onClick={()=>HandleDelete(i)}>Delete</button></li>
                })}
            </ul>
        </div>
    )
}

export default App -->
