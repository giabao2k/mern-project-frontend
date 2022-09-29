import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import axios from 'axios';
// import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';
function LoginForm() {
    // const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
    });

    const { username, password } = loginForm;

    const onChangeLoginForm = (event) => setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
    const login = (e) => {
        e.preventDefault();
        console.warn(loginForm);
        axios
            .post('http://localhost:5000/api/auth/login', loginForm)
            .then(function (response) {
                console.log(response.data.accessToken);
            })
            .catch(function (error) {
                console.log(error);
            });
        navigate`/register`;
    };
    return (
        <div>
            <div className="landing">
                <div className="dark-overplay">
                    <div className="landing-inner">
                        <h1>LearnIt</h1>
                        <h4>Keep track of what you are learning</h4>
                        <br />
                        <Form className="my-4" onSubmit={login}>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    required
                                    value={username}
                                    onChange={onChangeLoginForm}
                                />
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    required
                                    value={password}
                                    onChange={onChangeLoginForm}
                                />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Login
                            </Button>
                            <p>Don't have an account?</p>
                            <Link to="/register">
                                <Button variant="info" size="sm" className="m1-2">
                                    Register
                                </Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
