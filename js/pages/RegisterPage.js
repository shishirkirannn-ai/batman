import {
    useState
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
    BookOpen,
    Mail,
    Lock,
    User,
    GraduationCap,
    UserCircle
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student',
        usn: '',
        semester: '',
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            };

            if (formData.role === 'student') {
                payload.usn = formData.usn;
                payload.semester = parseInt(formData.semester);
            }

            const response = await axios.post(`${API}/auth/register`, payload);
            toast.success('Registration successful!');

            // Auto-login after registration
            localStorage.setItem('token', response.data.access_token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`;
            navigate(`/${response.data.user.role}-dashboard`);
        } catch (error) {
            toast.error(error.response ? .data ? .detail || 'Registration failed');
        } finally {
            setLoading(false);
        }
    };

    return ( <
        div className = "min-h-screen flex" > { /* Left Side - Image */ } <
        div className = "hidden lg:block flex-1 relative" >
        <
        img src = "bye.jpeg"
        alt = "Student focused"
        className = "absolute inset-0 w-full h-full object-cover" /
        >
        <
        div className = "absolute inset-0 bg-slate-900/50 flex items-center justify-center p-12" >
        <
        div className = "text-white text-center" >
        <
        h3 className = "text-3xl font-bold mb-4" > Join Nexus Academic < /h3> <
        p className = "text-lg text-slate-200" > Create your account and start accessing verified study materials < /p> <
        /div> <
        /div> <
        /div>

        { /* Right Side - Form */ } <
        div className = "flex-1 flex items-center justify-center p-8 overflow-y-auto" >
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
        h2 className = "text-3xl font-bold text-slate-900 mb-2" > Create Account < /h2> <
        p className = "text-slate-600" > Get started with your academic portal < /p> <
        /div>

        <
        form onSubmit = {
            handleSubmit
        }
        className = "space-y-5"
        data - testid = "register-form" > { /* Role Selection */ } <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > I am a < /label> <
        div className = "grid grid-cols-3 gap-3" > {
            ['student', 'faculty', 'admin'].map((role) => ( <
                button key = {
                    role
                }
                type = "button"
                onClick = {
                    () => setFormData({ ...formData,
                        role
                    })
                }
                className = {
                    `py-2.5 px-4 rounded-lg border-2 font-medium transition-all capitalize ${
                      formData.role === role
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    }`
                }
                data - testid = {
                    `role-${role}-btn`
                } >
                {
                    role
                } <
                /button>
            ))
        } <
        /div> <
        /div>

        { /* Name */ } <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Full Name < /label> <
        div className = "relative" >
        <
        User className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
        <
        input type = "text"
        name = "name"
        value = {
            formData.name
        }
        onChange = {
            handleChange
        }
        className = "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        placeholder = "John Doe"
        required data - testid = "name-input" /
        >
        <
        /div> <
        /div>

        { /* Email */ } <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Email Address < /label> <
        div className = "relative" >
        <
        Mail className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
        <
        input type = "email"
        name = "email"
        value = {
            formData.email
        }
        onChange = {
            handleChange
        }
        className = "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        placeholder = "you@college.edu"
        required data - testid = "email-input" /
        >
        <
        /div> <
        /div>

        { /* Password */ } <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Password < /label> <
        div className = "relative" >
        <
        Lock className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
        <
        input type = "password"
        name = "password"
        value = {
            formData.password
        }
        onChange = {
            handleChange
        }
        className = "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        placeholder = "••••••••"
        required minLength = {
            6
        }
        data - testid = "password-input" /
        >
        <
        /div> <
        /div>

        { /* Student-specific fields */ } {
            formData.role === 'student' && ( <
                >
                <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > USN(University Seat Number) < /label> <
                div className = "relative" >
                <
                UserCircle className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
                <
                input type = "text"
                name = "usn"
                value = {
                    formData.usn
                }
                onChange = {
                    handleChange
                }
                className = "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder = "1MS22CS001"
                required = {
                    formData.role === 'student'
                }
                data - testid = "usn-input" /
                >
                <
                /div> <
                /div>

                <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Semester < /label> <
                div className = "relative" >
                <
                GraduationCap className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
                <
                select name = "semester"
                value = {
                    formData.semester
                }
                onChange = {
                    handleChange
                }
                className = "w-full pl-11 pr-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent appearance-none"
                required = {
                    formData.role === 'student'
                }
                data - testid = "semester-select" >
                <
                option value = "" > Select Semester < /option> {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((sem) => ( <
                        option key = {
                            sem
                        }
                        value = {
                            sem
                        } > {
                            sem
                        } {
                            sem === 1 ? 'st' : sem === 2 ? 'nd' : sem === 3 ? 'rd' : 'th'
                        }
                        Semester <
                        /option>
                    ))
                } <
                /select> <
                /div> <
                /div> <
                />
            )
        }

        <
        button type = "submit"
        disabled = {
            loading
        }
        className = "w-full bg-slate-900 text-white hover:bg-slate-800 py-3 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        data - testid = "register-submit-btn" >
        {
            loading ? 'Creating Account...' : 'Create Account'
        } <
        /button> <
        /form>

        <
        p className = "mt-6 text-center text-slate-600" >
        Already have an account ? {
            ' '
        } <
        Link to = "/login"
        className = "text-orange-600 hover:text-orange-700 font-semibold"
        data - testid = "login-link" >
        Login here <
        /Link> <
        /p> <
        /div> <
        /div> <
        /div>
    );
}