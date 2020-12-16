import React from 'react';

function Signup (props) {
    return <div className="container">
        <div className="card mt-5 col-md-4 p-0 offset-md-2 shadow mx-auto">
            <div className="card-header text-center border-0">
            <h3><i><b>Sign Up form</b></i></h3>
            </div>
             <form action="" class="m-5">
                    
                    <input type="text" class="form-control"  placeholder="Firstname"/>
                    <br/><br/>
                    <input type="text" class="form-control"  placeholder="Lastname"/>
                    <br/><br/>
                    <input type="text" class="form-control"  placeholder="Username"/>
                    <br/><br/>
                    <input type="email" class="form-control" placeholder="Email"/>
                    <br/><br/>
                    <input type="number" class="form-control" placeholder="Enter phone number"/>
                    <br/><br/>
                    <input type="password" class="form-control" placeholder="Password"/>
                    <br/><br/>    
                    <input type="password" class="form-control" placeholder="Confirm Password"/>
                
                <br/><br/>
                <div class="custom-control custom-checkbox mb-3">
                    <input type="checkbox" class="custom-control-input" id="customControlValidation1" required/>
                    <label class="custom-control-label text-sm" for="customControlValidation1">I agree to <i class="text-warning">Terms</i> and <i class="text-warning">Privacy Policy</i></label>                                                                                                
                    <div class="invalid-feedback">dvskjbkfnhgkrdfhnuyrnej</div>
                </div>

                <div class="mx-auto d-flex">
                    <button type="button" class="cancelbtn form-control">Cancel</button> &nbsp;&nbsp;
                    <button class="btn btn-sm btn-primary form-control" data-toggle="modal" data-target="#welcomemodal">
                        Sign In
                        </button>
                    
                </div>
                <div class="modal" data-backdrop="static" id="welcomemodal">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3>Congrajulations!</h3>
                                <button class="close" data-dismiss="modal">
                                    <span>&timesd;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                Welcome to bootstrap class! <hr/>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi cupiditate itaque veritatis. Porro ex quos distinctio neque non rerum eius laborum nisi molestiae fuga autem, earum quo. Maiores, adipisci in?
                            </div>
                        </div>
                    </div>
                </div>
                
            </form>  
        </div>
         
    </div>
}

export default Signup;