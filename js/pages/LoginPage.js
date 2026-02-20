import {
    useState,
    useContext
} from 'react';
import {
    Link,
    useNavigate
} from 'react-router-dom';
import axios from 'axios';
import {
    toast
} from 'sonner';
import {
    AuthContext
} from '../App';
import {
    BookOpen,
    Mail,
    Lock,
    LogIn
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const {
        login
    } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(`${API}/auth/login`, {
                email,
                password
            });
            login(response.data.access_token, response.data.user);
            toast.success('Login successful!');
            navigate(`/${response.data.user.role}-dashboard`);
        } catch (error) {
            toast.error(error.response ? .data ? .detail || 'Login failed');
        } finally {
            setLoading(false);
        }
    };

    return ( <
        div className = "min-h-screen flex" > { /* Left Side - Form */ } <
        div className = "flex-1 flex items-center justify-center p-8" >
        <
        div className = "w-full max-w-md" >
        <
        Link to = "/"
        className = "flex items-center gap-3 mb-8"
        data - testid = "logo-link" >
        <
        div className = "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center" >
        <
        BookOpen className = "w-6 h-6 text-white" / >
        <
        /div> <
        h1 className = "text-2xl font-bold text-slate-900" > Nexus Academic < /h1> <
        /Link>

        <
        div className = "mb-8" >
        <
        h2 className = "text-3xl font-bold text-slate-900 mb-2" > Welcome Back < /h2> <
        p className = "text-slate-600" > Login to access your academic portal < /p> <
        /div>

        <
        form onSubmit = {
            handleSubmit
        }
        className = "space-y-6"
        data - testid = "login-form" >
        <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Email Address < /label> <
        div className = "relative" >
        <
        Mail className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
        <
        input type = "email"
        value = {
            email
        }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        className = "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        placeholder = "you@college.edu"
        required data - testid = "email-input" /
        >
        <
        /div> <
        /div>

        <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Password < /label> <
        div className = "relative" >
        <
        Lock className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
        <
        input type = "password"
        value = {
            password
        }
        onChange = {
            (e) => setPassword(e.target.value)
        }
        className = "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        placeholder = "••••••••"
        required data - testid = "password-input" /
        >
        <
        /div> <
        /div>

        <
        button type = "submit"
        disabled = {
            loading
        }
        className = "w-full bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        data - testid = "login-submit-btn" >
        {
            loading ? 'Logging in...' : ( <
                >
                <
                LogIn className = "w-5 h-5" / >
                Login <
                />
            )
        } <
        /button> <
        /form>

        <
        p className = "mt-6 text-center text-slate-600" >
        Don 't have an account?{'
        '} <
        Link to = "/register"
        className = "text-orange-600 hover:text-orange-700 font-semibold"
        data - testid = "register-link" >
        Register here <
        /Link> <
        /p> <
        /div> <
        /div>

        { /* Right Side - Image */ } <
        div className = "hidden lg:block flex-1 relative" >
        <
        img src = "https://images.pexels.com/photos/6283211/pexels-photo-6283211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt = "Students collaborating"
        className = "absolute inset-0 w-full h-full object-cover" /
        >
        <
        div className = "absolute inset-0 bg-slate-900/50 flex items-center justify-center p-12" >
        <
        div className = "text-white text-center" >
        <
        h3 className = "text-3xl font-bold mb-4" > Access Your Academic Hub < /h3> <
        p className = "text-lg text-slate-200" > Your gateway to organized learning resources and official updates < /p> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}