<<<<<<< HEAD


import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './contexts/auth';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000} />
        <Routes/>
      </BrowserRouter>
    </AuthProvider>
=======
function App() {
  return (
    <div>
      <h1>TESTE</h1>
    </div>
>>>>>>> 2579691d332cb9400c1bac1855d7f09c4ffcdac3
  );
}

export default App;