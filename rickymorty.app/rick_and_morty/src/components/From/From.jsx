import React from "react";
import validation from "./validation"; // importamos nuestras validaciones y lo seteamos en el mismo handleInputChange

const From = (props) => {

    const [userData, setUserData] = React.useState({
        username:"",
        password:"",
    })  

    const handleInputChange = (event)=>{
        setUserData({ ...userData,
            [event.target.name] : event.target.value
        })
        setErrors(validation({ 
            ...userData,
            [event.target.name] : event.target.value
        }))
    }

    const [errors, setErrors] = React.useState({
        username:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.login(userData)
    }
    
    return(
        <form  onSubmit={handleSubmit} >
            <label htmlFor="userName">Username</label>
            <input onChange={handleInputChange}  type="text"  name="username" value={userData.username} />
            {errors.username && <p style={{color:"red"}} >{errors.username}</p>  }

            <label  htmlFor="passWord">Password</label>
            <input onChange={handleInputChange} type="password" name="password" value={userData.password}  />
            {errors.password && <p style={{color:"red"}} >{errors.password}</p>  }
            <button>LOGIN</button>
        </form>
    )
}
export default From;


// paso para el formulario
// vamos a bindiar ese estado local con los imput eso se logra traves del value
//agregamos el metodo onChange para podertener el evento