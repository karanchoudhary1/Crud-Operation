import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Nav from './components/Nav';
import Welcome from './components/Welcome';
import Create from './components/Create';
import ViewAll from './components/ViewAll';
import Delete from './components/Delete';
import Update from './components/Update';
import FindOne from './components/FindOne';
function App() {
  return (
    <div className="App">
    <Nav/>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Welcome/>}></Route>
      <Route path='/insert' exact element={<Create/>}></Route>
      <Route path='/update' exact element={<Update/>}></Route>
      <Route path='/delete' exact element={<Delete/>}></Route>
      <Route path='/view' exact element={<ViewAll/>}></Route>
      <Route path='/find' exact element={<FindOne/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
