import {Button} from 'react-bootstrap';

const AddButton = ({setShowModal}) => <Button onClick={()=> setShowModal(true)} variant="secondary">+ Add</Button> 

export default AddButton;