import './App.css';
import React, {
    useState,
    useEffect,
    createContext
} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from 'react-router-dom';
import axios from 'axios';
import {
    Toaster
} from '@/components/ui/sonner';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import FacultyDashboard from './pages/FacultyDashboard';
import AdminDashboard from './pages/AdminDashboard';
import RepositoryPage from './pages/RepositoryPage';
import NoticesPage from './pages/NoticesPage';
import ProfilePage from './pages/ProfilePage';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const AuthContext = createContext(null);

function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchUser();
        } else {
            setLoading(false);
        }
    }, []);

    const fetchUser = async () => {
        try {
            const response = await axios.get(`${API}/auth/me`);
            setUser(response.data);
        } catch (error) {
            console.error('Failed to fetch user:', error);
            localStorage.removeItem('token');
            delete axios.defaults.headers.common['Authorization'];
        } finally {
            setLoading(false);
        }
    };

    const login = (token, userData) => {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        setUser(null);
    };

    if (loading) {
        return ( <
            div className = "min-h-screen flex items-center justify-center" >
            <
            div className = "text-lg font-medium text-slate-600" > Loading... < /div> <
            /div>
        );
    }

    const ProtectedRoute = ({
        children,
        allowedRoles
    }) => {
        if (!user) {
            return <Navigate to = "/login"
            replace / > ;
        }
        if (allowedRoles && !allowedRoles.includes(user.role)) {
            return <Navigate to = "/"
            replace / > ;
        }
        return children;
    };

    return ( <
        AuthContext.Provider value = {
            {
                user,
                login,
                logout
            }
        } >
        <
        div className = "App" >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = {
            user ? < Navigate to = {
                `/${user.role}-dashboard`
            }
            replace / > : < HomePage / >
        }
        /> <
        Route path = "/login"
        element = {
            user ? < Navigate to = {
                `/${user.role}-dashboard`
            }
            replace / > : < LoginPage / >
        }
        /> <
        Route path = "/register"
        element = {
            user ? < Navigate to = {
                `/${user.role}-dashboard`
            }
            replace / > : < RegisterPage / >
        }
        />

        <
        Route path = "/student-dashboard"
        element = { <
            ProtectedRoute allowedRoles = {
                ['student']
            } >
            <
            StudentDashboard / >
            <
            /ProtectedRoute>
        }
        />

        <
        Route path = "/faculty-dashboard"
        element = { <
            ProtectedRoute allowedRoles = {
                ['faculty']
            } >
            <
            FacultyDashboard / >
            <
            /ProtectedRoute>
        }
        />

        <
        Route path = "/admin-dashboard"
        element = { <
            ProtectedRoute allowedRoles = {
                ['admin']
            } >
            <
            AdminDashboard / >
            <
            /ProtectedRoute>
        }
        />

        <
        Route path = "/repository"
        element = { <
            ProtectedRoute >
            <
            RepositoryPage / >
            <
            /ProtectedRoute>
        }
        />

        <
        Route path = "/notices"
        element = { <
            ProtectedRoute >
            <
            NoticesPage / >
            <
            /ProtectedRoute>
        }
        />

        <
        Route path = "/profile"
        element = { <
            ProtectedRoute >
            <
            ProfilePage / >
            <
            /ProtectedRoute>
        }
        /> <
        /Routes> <
        /BrowserRouter> <
        Toaster / >
        <
        /div> <
        /AuthContext.Provider>
    );
}

export default App;