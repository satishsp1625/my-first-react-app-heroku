import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import User from './components/User';
import UserStatic from './components/UserStatic';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<User />} />
        <Route path='/user-static' element={<UserStatic />} />
      </Routes>
    </Router>
  );
}

export default App;
