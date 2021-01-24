import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const NavButons = () => (
    <>
        <Link to="/">
            <Button className="m-1" variant="primary">Home</Button> 
        </Link>
        <Link to="/login"> 
            <Button className="m-1" variant="success">Login</Button> 
        </Link>
    </>
)

export default NavButons;