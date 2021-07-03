import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../styles/avatar.css"
import * as Yup from "yup"

const validationSchema = Yup.object({
	email: Yup.string().email("put a valid email").required("required!!"),
	name :Yup.string().required("required!!"),
    role:Yup.string().required("required!!"),

});

function checkingImg(url){
    let image = new Image();
     image.src = url
   
    if (image.width === 0) return <span>Invalid image URL</span>
    else  return <img src={url} alt ="image cant be loaded"></img>;
       
}
   
 

       
 

export default function UsersCreateEdit({user}) {

    
    const[formData, setFormData] = useState()
    const [imgUrl,setImgUrl] = useState("")
    const [createBtnDisable, setCreateBtnDisable] = useState(false)
    const [editBtnDisable, setEditBtnDisable] = useState(false)

    
    useEffect(()=>{
       if(user) setCreateBtnDisable(true)
       else setEditBtnDisable(true)

        setImgUrl(handleImage(user))
        handleInitialState(user)
          
    },[])
       
    const initialValues={
        email:"",
        name:"",
        role:"",
        profilePhoto:""
        
    }
    function handleSubmit(values){
        console.log(values)
    }

    function handleImage(user){
        if(user){
            return checkingImg(user.profilePhoto)
        }
        else{
            return(
                <div >
                   
                    <div className="head"></div>
                    <div className="body"></div>
                </div>
        
            )
        }
    }
    
    function handleInitialState(user){

        if(user) setFormData(user)
        else setFormData(initialValues) 

    }
      
  const fontStyle={fontWeight:"bold", fontSize:"20px", fontFamily:"Georgia, seri"}
    
    return (
        <div className="container mt-5">
                
            <Formik initialValues={formData} onSubmit={handleSubmit} validationSchema={validationSchema}enableReinitialize>

                <Form  style={{minWidth:"250px",maxWidth:"300PX",backgroundColor:"#c5d5e6", padding:"10px",borderRadius:"5px"}} >
                    
                    <div className="avatar-container">
                        {imgUrl}
                    </div>
                  
                    <div className="form-group w-100">
                        <p style={fontStyle} >Profile Photo</p>
                        <Field  name="profilePhoto"   type="text" id="profilePhoto" className="form-control"  />
                        
                    </div>

                    
                    <div className="form-group w-100" >
                        <p style={fontStyle}>Email address</p>
                        <Field   name="email" type="email" id="email" className="form-control"  placeholder="Enter email" />
                        <ErrorMessage  name="email"/>

                    </div>

                    <div className="form-group w-100">
                        <p style={fontStyle} >Name</p>
                        <Field  name="name"   type="text" id="name" className="form-control"  placeholder="Name" />
                        <ErrorMessage name="name"/>
                    </div>
                    <div className="form-group w-100">
                        <p style={fontStyle} >Role</p>
                        <Field  name="role"   type="text" id="role" className="form-control" placeholder="Role" />
                        <ErrorMessage name="role"/>
                    </div>

                    <div>
                        <button disabled={createBtnDisable} type="submit" className="btn btn-primary m-2">
                        CREATE
                        </button>

                        <button disabled={editBtnDisable} type="submit" className="btn btn-primary m-2">
                        EDIT
                        </button>
                        
                    </div>
                </Form>
                
            </Formik>
            
		</div>
    )
}



     



    
    
       

  
    

   
    