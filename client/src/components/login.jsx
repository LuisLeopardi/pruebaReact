import {useState, useContext} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {login} from '../api';
import {Redirect} from 'react-router-dom';
import AuthContext from '../context';

const Login = () => {

    const {setAuth, auth} = useContext(AuthContext)
    const [{password, username}, setForm] = useState({ password:"", username:"" })

    const handleChange = ({ target: {value, name} }) => {
        setForm(prevState=>({
            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const {error} = await login({password, username});
        if (error) return;
        setAuth(true)
    }

    if (auth) return <Redirect to="/" />

    return (
        <Container> 

            <Form>

                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
                </Form.Group>

                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Enter
                </Button>

            </Form>
        </Container>
    )
}

export default Login