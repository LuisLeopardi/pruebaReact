import {useState} from 'react'; 
import {Badge, ListGroupItem, Button, Row, Spinner } from 'react-bootstrap';
import {deleteTask, updateTask} from '../api';

const Task = ({id, name, completed, getTasksList }) => {

    const [message, setMessage] = useState({error:false, message:""});
    const [loading, setLoading] = useState(false)

    const handleButtons = async (func) => {
        setLoading(true)
        const {error, content} = await func(id);
        await getTasksList();
        setLoading(false)
        setMessage({error, content})
    }

    return (
        <ListGroupItem>
            <Row style={styles.row}>
                <h4 style={styles.title}>{name}</h4>   
                <Badge variant={ completed? "success" : "warning" }>
                    {completed? "completed" : "pending"} 
                </Badge>   
            </Row>   
            <Row style={styles.row2}>
                {
                    !loading ? 
                    <>   
                        <Button onClick={()=> handleButtons(updateTask) } className="m-2"  variant="warning">set completed</Button>
                        <Button onClick={()=> handleButtons(deleteTask) } className="m-2"  variant="danger">delete</Button>
                    </> 
                    :  
                    <Spinner animation="border" variant="info" />
                }
            </Row>
        </ListGroupItem>
    )
}

const styles = {
    row: {
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
    },
    row2: {
        display:"flex",
        alignItems:"center",
        justifyContent:"flex-start"
    },
    title: {
        fontFamily: 'Yusei Magic, sans-serif'
    }
}

export default Task;