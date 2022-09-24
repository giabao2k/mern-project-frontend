import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function RegisterForm() {
    return (
        <div>
            <div className="landing">
                <div className="dark-overplay">
                    <div className="landing-inner">
                        <h1>LearnIt</h1>
                        <h4>Keep track of what you are learning</h4>
                        <br />
                        <Form className="my-4">
                            <Form.Group>
                                <Form.Control type="text" placeholder="Username" name="username" required />
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Password" name="password" required />
                            </Form.Group>
                            <br></br>
                            <Form.Group>
                                <Form.Control
                                    type="password"
                                    placeholder="Confirm Password"
                                    name="confirmPassword"
                                    required
                                />
                            </Form.Group>
                            <Button variant="success" type="submit">
                                Register
                            </Button>
                            <p>Already have an account?</p>
                            <Link to="/login">
                                <Button variant="info" size="sm" className="m1-2">
                                    Login
                                </Button>
                            </Link>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
