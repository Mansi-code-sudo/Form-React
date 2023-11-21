import React, { useState } from "react";
import './App.css';

const App = () => {

  const[formData,setFormData]=useState({firstName:"",lastName:"",email:"",country:"",address:"",
  city:"",state:"",zip:"",Comments:false,Candidates:false,Offers:false});


  function changeHandler(event){

    const {name,value,checked,type}=event.target;

    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
      }
    })
  }

  function saveHandler(event){
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div>
      <form onSubmit={saveHandler}>
        <p>First Name</p>
        <input type="text" placeholder="Pranay" onChange={changeHandler} name="firstName" value={formData.firstName}/>

        <p>Last Name</p>
        <input type="text" placeholder="Gupta" onChange={changeHandler} name="lastName" value={formData.lastName}/>

        <p>Email Address</p>
        <input type="text" placeholder="abc@gmail.com" onChange={changeHandler} name="email" value={formData.email}/>

        <p>Country</p>
        <select name="country" value={formData.country} id="country" onChange={changeHandler}>
          <option id="India">India</option>
          <option id="America">America</option>
          <option id="United Kingdom">United Kingdom</option>
          <option id="Sri Lanka">Sri Lanka</option>
        </select>

        <p>Street Address</p>
        <input type="text" placeholder="1234 street" name="address" value={formData.address} onChange={changeHandler} />

        <p>City</p>
        <input type="text" placeholder="Asnol" name="city" value={formData.city} onChange={changeHandler}/>

        <p>State/Province</p>
        <input type="text" placeholder="West Bengal" name="state" value={formData.state} onChange={changeHandler}/>

        <p>ZIP/ Postal code</p>
        <input type="number" placeholder="123456" name="zip" value={formData.zip} onChange={changeHandler}/>

        <p>By Email</p>
        <input type="checkbox" onChange={changeHandler} name="Comments" id="Comments" checked={formData.Comments}/>
        <label htmlFor="Comments">Comments</label>
        <br/>
        <input type="checkbox" onChange={changeHandler} name="Candidates" id="Candidates" checked={formData.Candidates}/>
        <label htmlFor="Candidates">Candidates</label>
        <br/>
        <input type="checkbox" onChange={changeHandler} name="Offers" id="Offers" checked={formData.Offers}/>
        <label htmlFor="Offers">Offers</label>
<br>
</br>
<br>
</br>
        <button>Save</button>
      </form>
    </div>
  )
};

export default App;
