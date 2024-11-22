import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home';
import {Favorite} from './pages/Favorite';
import {Provider} from 'react-redux';
import {store} from './store';
import NavigationBar from "./components/NavigationBar"

import './App.css';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <header>
                        <h1>Weather App</h1>
                    </header>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorite" element={<Favorite />} />
                    </Routes>
                    <NavigationBar/>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
