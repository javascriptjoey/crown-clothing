import React from "react";
import './Sign-In.styles.scss';
import '../form-Input/FormInput.component';
import FormInput from "../form-Input/FormInput.component";
import CustomButton from "../custom-button/Custom-Button.component";
class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        };
    }

handleSubmit = event => {
    event.preventDefault();

    this.setState({ email:'', password: ''})
};

handleChange = event => {
    const { value, name } = event.target;
    this.setState({[name]:value})
};

    render(){
       return(
           <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>
           
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                      name="email" 
                      type="email" 
                      handleChange={this.handleChange}
                      value={this.state.email}
                      label="email"
                      required 
                    />
                     
                    <FormInput
                      name="password" 
                      type="password" 
                      value={this.state.password}
                      label="password"
                      handleChange={this.handleChange} 
                      required
                    />
                

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
           
           </div>
       )
    }
}

export default SignIn;