import React from "react";
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';



export class Login extends React.Component {
    responseGoogle = (googleResp)=>{
        console.log(googleResp)
        axios.post(`http://localhost:5000/auth/google`, {token: googleResp.tokenId})
        .then(resp=>{
            console.log('acceso otorgado, el token es:', resp.data);
            sessionStorage.setItem('token', resp.data);

            if (sessionStorage.getItem('token')) {
                window.history.pushState({}, '', '/createprod');
                
              }
            
        })

         
        .catch(err=> console.log('Algo esta ocurriendo', err))
    }


render(){
    return(  

        <GoogleLogin
    clientId="602582959034-if211k4vqhn11e7as804f2jm7jfb144d.apps.googleusercontent.com"
    //clientId="1009352706675-18qvmg72j2m44klk25j7kufrp1jamvpr.apps.googleusercontent.com"
    buttonText="Accede"
    onSuccess={this.responseGoogle }
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'} />


    )
  }
}