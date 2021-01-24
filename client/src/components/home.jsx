import {useContext, useEffect, useState} from 'react';
import {Container} from 'react-bootstrap';
import AuthContext from '../context';
import {getTasks} from '../api';
import Task from './task';
import TaskModal from './taskForm'

const Home = ({showModal, setShowModal}) => {

    const {auth} = useContext(AuthContext);
    const [{loading, error}, setLoading] = useState({loading:true, error:false})
    const [tasks, setTasks] = useState([]);
    
    const getTasksList = async () => {
        const {content, error} = await getTasks();
        setLoading({loading:false, error})
        setTasks(content)
    }

    useEffect(()=>{
        if (!auth) return;
        getTasksList()
    },[auth])

    if (!auth) return <Container> you need to login first </Container>
    if (loading) return <Container> loading... </Container>
    if (error) return <Container> an error has ocurred </Container>
    if (tasks.length === 0) return (
    <Container> 
        <TaskModal getTasksList={getTasksList} showModal={showModal} setShowModal={setShowModal}/>
        no tasks 
    </Container>
    )
    return (
        <Container>
            <TaskModal getTasksList={getTasksList} showModal={showModal} setShowModal={setShowModal}/>
            {
               tasks.map( ({_id, name, completed }) => <Task id={_id} name={name} completed={completed} key={_id} getTasksList={getTasksList}/> )
            }
        </Container>
    )
}

export default Home