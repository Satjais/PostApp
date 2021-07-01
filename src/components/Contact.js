import React, {useState} from 'react';
import "../app.css"; 
import {db} from "../firebase"; 
import {firebaseApp} from "../firebase";
import {v4 as uuid} from 'uuid';
const Contact = () => {
     
    let errorsObj = { email: '', name: '' };
     const[name,setName] = useState(""); 
     const[email,setEmail] = useState("");
     const[message,setMessage] = useState(""); 
    const [errors, setErrors] = useState(errorsObj); 
   
  
  const  handleSubmit = (e) =>{
         e.preventDefault(); 
         let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }

        if (name === '') {
            errorObj.name = 'name is Required';
            error = true;
        }

        setErrors(errorObj);

        if (error) return;
         db.collection('contacts').add({
             name:name,
             email:email,
             message:message,
         }) 
         .then(()=>{
             alert('Message has been submitted')
         }) 
         .catch(error=>{
          alert(error.message);
         });

     }; 
     const onUpload = (e) =>{
        const file = e.target.value[0];
        const id = uuid();
        const images = firebaseApp.storage().ref("images").child(id);
        images.put(file);
        console.log(file);
       // const storageref = firebaseApp.storage().ref() 
      // const fileRef = storageref.child(file.name)
      //  fileRef.put(file).then(()=>{
        //     console.log("Upload a file")
       //  }) 
         
       };
     return( 
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Form</h1> 
            <div>
            <label>Name</label> 
            <div>
            <input placeholder="name" 
            value={name} onChange={(e)=>setName(e.target.value)}/> 
            </div>
            {errors.name && <div>{errors.name}</div>}
            </div>
            <div>
            <label>Email</label> 
            <div>
            <input placeholder="Email" value={email}
           onChange={(e)=>setEmail(e.target.value)} /> 
           </div>
           {errors.email && <div>{errors.email}</div>}
           </div>
           <div>
            <input type ="file"  accept="image/*" onChange={onUpload}/>
           </div>
            <label>Message</label> 
            <textarea placeholder="Message" value ={message}
            onChange={(e)=>setMessage(e.target.value)}></textarea> 
            <button type ="submit">Submit</button> 

        </form>
     );
    
};
export default Contact 