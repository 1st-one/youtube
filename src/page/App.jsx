import React, {useState} from 'react';
import Home from './Home';
import Video from './Video';
import Search from './Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';

const App = () => {
    const [input, setInput] = useState('');
    

    const handlerInput = (e) => {
        setInput(e.target.value);
    };

    return (
        // <Login />
        <Router>
            <>   
                <Switch>
                    <Route exact path="/">
                        <Home handlerInput={(e) => handlerInput(e)} input={input}/>
                    </Route>
                    <Route path="/watch">
                        <Video handlerInput={(e) => handlerInput(e)} input={input}/>
                    </Route>
                    <Route path="/search">
                        <Search handlerInput={(e) => handlerInput(e)} input={input}/>
                    </Route>
                    {/* <Route path="/login">
                        <Login />
                    </Route> */}
                </Switch>
            </>
        </Router>
    );
};

export default App;