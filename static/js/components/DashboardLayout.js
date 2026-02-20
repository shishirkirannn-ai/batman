import {
    useContext
} from 'react';
import {
    Link,
    useLocation,
    useNavigate
} from 'react-router-dom';
import {
    AuthContext
} from '../App';
import {
    BookOpen,
    LayoutDashboard,
    Library,
    Bell,
    User,
    LogOut,
    Upload
} from 'lucide-react';

export default function DashboardLayout({
    children
}) {
    const {
        user,
        logout
    } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const navigation = [{
            name: 'Dashboard',
            href: `/${user?.role}-dashboard`,
            icon: LayoutDashboard
        },
        {
            name: 'Repository',
            href: '/repository',
            icon: Library
        },
        {
            name: 'Notices',
            href: '/notices',
            icon: Bell
        },
        {
            name: 'Profile',
            href: '/profile',
            icon: User
        },
    ];

    return ( <
        div className = "min-h-screen bg-slate-50" > { /* Top Navigation */ } <
        header className = "bg-white border-b border-slate-200 sticky top-0 z-10" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        div className = "flex items-center justify-between h-16" >
        <
        div className = "flex items-center gap-3" >
        <
        div className = "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center" >
        <
        BookOpen className = "w-6 h-6 text-white" / >
        <
        /div> <
        div >
        <
        h1 className = "text-xl font-bold text-slate-900" > Nexus Academic < /h1> <
        p className = "text-xs text-slate-500 capitalize" > {
            user ? .role
        }
        Portal < /p> <
        /div> <
        /div>

        <
        div className = "flex items-center gap-4" >
        <
        div className = "hidden md:block text-right" >
        <
        p className = "text-sm font-medium text-slate-900" > {
            user ? .name
        } < /p> <
        p className = "text-xs text-slate-500" > {
            user ? .email
        } < /p> <
        /div> <
        button onClick = {
            handleLogout
        }
        className = "flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
        data - testid = "logout-btn" >
        <
        LogOut className = "w-5 h-5" / >
        <
        span className = "hidden sm:inline" > Logout < /span> <
        /button> <
        /div> <
        /div> <
        /div> <
        /header>

        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" >
        <
        div className = "flex gap-8" > { /* Sidebar */ } <
        aside className = "hidden lg:block w-64 flex-shrink-0" >
        <
        nav className = "space-y-1" > {
            navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return ( <
                    Link key = {
                        item.name
                    }
                    to = {
                        item.href
                    }
                    className = {
                        `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-white hover:text-slate-900'
                    }`
                    }
                    data - testid = {
                        `nav-${item.name.toLowerCase()}`
                    } >
                    <
                    Icon className = "w-5 h-5" / > {
                        item.name
                    } <
                    /Link>
                );
            })
        } <
        /nav>

        { /* Quick Upload - Only for Students and Faculty */ } {
            (user ? .role === 'student' || user ? .role === 'faculty') && ( <
                div className = "mt-6 p-4 bg-orange-50 border border-orange-200 rounded-lg" >
                <
                h3 className = "font-semibold text-slate-900 mb-2 flex items-center gap-2" >
                <
                Upload className = "w-4 h-4" / >
                Quick Upload <
                /h3> <
                p className = "text-sm text-slate-600 mb-3" > Share your notes with the community < /p> <
                Link to = "/repository" >
                <
                button className = "w-full bg-slate-900 text-white hover:bg-slate-800 py-2 rounded-lg text-sm font-medium transition-colors"
                data - testid = "quick-upload-btn" >
                Upload File <
                /button> <
                /Link> <
                /div>
            )
        } <
        /aside>

        { /* Main Content */ } <
        main className = "flex-1 min-w-0" > {
            children
        } <
        /main> <
        /div> <
        /div>

        { /* Mobile Navigation */ } <
        nav className = "lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-10" >
        <
        div className = "grid grid-cols-4 gap-1 p-2" > {
            navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return ( <
                    Link key = {
                        item.name
                    }
                    to = {
                        item.href
                    }
                    className = {
                        `flex flex-col items-center gap-1 py-2 px-3 rounded-lg text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600'
                }`
                    } >
                    <
                    Icon className = "w-5 h-5" / > {
                        item.name
                    } <
                    /Link>
                );
            })
        } <
        /div> <
        /nav> <
        /div>
    );
}