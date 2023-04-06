import { Component } from "react";
import {Form, Button} from "react-bootstrap"
export default class Formapp extends Component{
    constructor (props){
        super(props)
        this.state = {
            email: '',
            password : ''
        }
    }
    
    submitData = (e) => {
        e.preventDefault()
        this.setState({
            email: e.target[0].value,
            password : e.target[1].value
        })
    }
    
    render(){
        return(
          <div className="container">
            <Form onSubmit={this.submitData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      <br />
      <h3>Data Kamu</h3>
      <p>Email : {this.state.email}</p>
      <p>Password : {this.state.password}</p>
        </div>
        )
    }
}