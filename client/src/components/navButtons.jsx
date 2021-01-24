import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const NavButons = () => (
    <>
        <Link to="/">
            <Button variant="primary">Home</Button> 
        </Link>
        <Link to="/login"> 
            <Button variant="success">Login</Button> 
        </Link>
    </>
)

export default NavButons;