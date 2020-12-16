import React from 'react';
import data from '../data';

function Signin (props) {
    return <div className="container">
        <div  class="card mt-5 col-md-4 p-0 offset-md-2 shadow mx-auto">
            <div class="card-header text-center border-0">
                <h3><i><b>Sign in</b></i></h3> 
            </div>
             <form action="" className="m-5">
             <input type="text" className="form-control"  placeholder="Username"/>
                <br/>
                <br/>
            <input type="password" className="form-control" placeholder="Password"/>    
            <br/>
             <div className="custom-control custom-checkbox mb-3">
                    <input type="checkbox" className="custom-control-input" id="customControlValidation1" required/>
                    <label className="custom-control-label text-sm" for="customControlValidation1">I agree to <i className="text-warning">Terms</i> and <i className="text-warning">Privacy Policy</i></label>
                    <div className="invalid-feedback">dvskjbkfnhgkrdfhnuyrnej</div>
            </div>  
        <br/>
        <button className="btn btn-sm btn-primary form-control" data-toggle="modal" data-target="#welcomemodal">Sign In</button>
       </form>
        </div>
      
    </div>
}
export default Signin;