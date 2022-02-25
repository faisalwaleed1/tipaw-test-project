import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Account from 'views/Account';
import NotFound from 'views/NotFound';
import Signup from 'views/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/accounts" element={<Account/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
