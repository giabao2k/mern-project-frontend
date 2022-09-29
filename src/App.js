import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './components/layout/Landing';
// import Auth from './views/Auth';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import AuthContextProvider from './contexts/AuthContext';

function App() {
    return (
        // <AuthContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
                {/* <Route path="/register" render={(props) => <Auth {...props} authRoute="register" />} /> */}
            </Routes>
        </BrowserRouter>
        // </AuthContextProvider>
    );
}

export default App;
