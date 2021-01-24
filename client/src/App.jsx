import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import AuthContext from './context';
import {Navbar} from 'react-bootstrap';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import NavButons from './components/navButtons';
import AddButton from './components/addButton';
import Login from './components/login';
import Home from './components/home';

const App = () => {

  const [auth, setAuth] = useState(false);
  const [showModal, setShowModal] = useState(false)

  useEffect(()=>{
    const match = document.cookie.match(new RegExp('(^| )' + 'token8baseE' + '=([^;]+)'));
    if (match) return setAuth(true);
  },[])

  return (
    <AuthContext.Provider value={{ setAuth, auth }} >
        <Router>
            <Navbar bg="light">
                <Navbar.Brand>Prueba Luis Leopardi</Navbar.Brand>
                { auth? <AddButton setShowModal={setShowModal}/> : <NavButons/> }
            </Navbar>

            <Switch>
                <Route exact path="/" render={(props) => <Home setShowModal={setShowModal} showModal={showModal} {...props} />} />
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>

        </Router>
    </AuthContext.Provider>
  );
}

export default App;
