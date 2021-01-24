import {useState} from 'react'
import {addTask} from '../api';
import {Modal, Button, Form, Spinner, Alert} from 'react-bootstrap';

const TaskModal = ({ setShowModal, showModal, getTasksList }) => {

    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = ({ target: {value} }) => setValue(value);

    const handleSubmit = async () => {
        if (!value) return setError("input valut cannot be empty!")
        setError(false)
        setLoading(true)
        await addTask({name:value});
        await getTasksList();
        setLoading(false)
        setShowModal(false)
    }

    const handleClose = () => {
        setShowModal(false)
        setError(false)
    }

    return (

        <Modal show={showModal} onHide={handleClose}>
            { !loading? 
                <>
                    <Modal.Header closeButton>
                        {
                            error?
                            <Alert variant="danger" style={{width:"100%"}}>
                                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                                <p>
                                    {error}
                                </p>
                            </Alert>
                            :
                            <Modal.Title>
                                { error? error : "Add new task"}
                            </Modal.Title>
                        }
                    </Modal.Header>

                    <Modal.Body>

                        <Form.Group controlId="formBasicName">
                            <Form.Label>Task Name</Form.Label>
                            <Form.Control type="text" placeholder="task name" name="name" onChange={handleChange}/>
                        </Form.Group>

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            submit
                        </Button>
                    </Modal.Footer>
                </>
                :
                <Spinner style={{margin:"auto"}} animation="grow" variant="secondary" />
            }
      </Modal>

    )
}

export default TaskModal;