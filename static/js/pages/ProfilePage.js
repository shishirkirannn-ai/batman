import {
    useContext
} from 'react';
import {
    AuthContext
} from '../App';
import DashboardLayout from '../components/DashboardLayout';
import {
    User,
    Mail,
    GraduationCap,
    Shield,
    Calendar
} from 'lucide-react';

export default function ProfilePage() {
    const {
        user
    } = useContext(AuthContext);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return ( <
        DashboardLayout >
        <
        div className = "space-y-6"
        data - testid = "profile-page" > { /* Header */ } <
        div >
        <
        h1 className = "text-3xl font-bold text-slate-900" > Profile < /h1> <
        p className = "text-slate-600 mt-1" > Manage your account information < /p> <
        /div>

        { /* Profile Card */ } <
        div className = "bg-white rounded-xl border border-slate-200 overflow-hidden" > { /* Header Section */ } <
        div className = "bg-gradient-to-r from-slate-900 to-slate-700 px-6 py-12" >
        <
        div className = "flex items-center gap-4" >
        <
        div className = "w-20 h-20 bg-white rounded-full flex items-center justify-center" >
        <
        User className = "w-10 h-10 text-slate-900" / >
        <
        /div> <
        div className = "text-white" >
        <
        h2 className = "text-2xl font-bold" > {
            user ? .name
        } < /h2> <
        p className = "text-slate-300 capitalize" > {
            user ? .role
        } < /p> <
        /div> <
        /div> <
        /div>

        { /* Details Section */ } <
        div className = "p-6 space-y-6" >
        <
        div className = "grid grid-cols-1 md:grid-cols-2 gap-6" > { /* Email */ } <
        div className = "flex items-start gap-4" >
        <
        div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" >
        <
        Mail className = "w-6 h-6 text-slate-600" / >
        <
        /div> <
        div >
        <
        p className = "text-sm text-slate-500 mb-1" > Email Address < /p> <
        p className = "font-medium text-slate-900" > {
            user ? .email
        } < /p> <
        /div> <
        /div>

        { /* Role */ } <
        div className = "flex items-start gap-4" >
        <
        div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" >
        <
        Shield className = "w-6 h-6 text-slate-600" / >
        <
        /div> <
        div >
        <
        p className = "text-sm text-slate-500 mb-1" > Role < /p> <
        p className = "font-medium text-slate-900 capitalize" > {
            user ? .role
        } < /p> <
        /div> <
        /div>

        { /* Student-specific fields */ } {
            user ? .role === 'student' && ( <
                >
                <
                div className = "flex items-start gap-4" >
                <
                div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" >
                <
                User className = "w-6 h-6 text-slate-600" / >
                <
                /div> <
                div >
                <
                p className = "text-sm text-slate-500 mb-1" > USN < /p> <
                p className = "font-medium text-slate-900" > {
                    user ? .usn
                } < /p> <
                /div> <
                /div>

                <
                div className = "flex items-start gap-4" >
                <
                div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" >
                <
                GraduationCap className = "w-6 h-6 text-slate-600" / >
                <
                /div> <
                div >
                <
                p className = "text-sm text-slate-500 mb-1" > Semester < /p> <
                p className = "font-medium text-slate-900" > Semester {
                    user ? .semester
                } < /p> <
                /div> <
                /div> <
                />
            )
        }

        { /* Department */ } {
            user ? .department && ( <
                div className = "flex items-start gap-4" >
                <
                div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" >
                <
                GraduationCap className = "w-6 h-6 text-slate-600" / >
                <
                /div> <
                div >
                <
                p className = "text-sm text-slate-500 mb-1" > Department < /p> <
                p className = "font-medium text-slate-900" > {
                    user ? .department
                } < /p> <
                /div> <
                /div>
            )
        }

        { /* Member Since */ } <
        div className = "flex items-start gap-4" >
        <
        div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" >
        <
        Calendar className = "w-6 h-6 text-slate-600" / >
        <
        /div> <
        div >
        <
        p className = "text-sm text-slate-500 mb-1" > Member Since < /p> <
        p className = "font-medium text-slate-900" > {
            formatDate(user ? .created_at)
        } < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>

        { /* Additional Info */ } <
        div className = "bg-blue-50 border border-blue-200 rounded-xl p-6" >
        <
        h3 className = "font-semibold text-slate-900 mb-2" > Account Information < /h3> <
        p className = "text-sm text-slate-600" >
        Your account is active and in good standing.If you need to update any information, please contact the department administrator. <
        /p> <
        /div> <
        /div> <
        /DashboardLayout>
    );
}