import {
    Link
} from 'react-router-dom';
import {
    BookOpen,
    Upload,
    Shield,
    Bell,
    Search,
    Users,
    FileText,
    ArrowRight
} from 'lucide-react';

export default function HomePage() {
    return ( <
        div className = "min-h-screen" > { /* Header */ } <
        header className = "bg-white border-b border-slate-200" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center" >
        <
        div className = "flex items-center gap-3" >
        <
        div className = "w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center" >
        <
        BookOpen className = "w-6 h-6 text-white" / >
        <
        /div> <
        h1 className = "text-2xl font-bold text-slate-900" > Nexus Academic < /h1> <
        /div> <
        div className = "flex gap-3" >
        <
        Link to = "/login"
        data - testid = "header-login-btn" >
        <
        button className = "text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-100 font-medium transition-colors" >
        Login <
        /button> <
        /Link> <
        Link to = "/register"
        data - testid = "header-register-btn" >
        <
        button className = "bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all" >
        Get Started <
        /button> <
        /Link> <
        /div> <
        /div> <
        /header>

        { /* Hero Section */ } <
        section className = "relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        div className = "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" >
        <
        div className = "lg:col-span-7" >
        <
        div className = "inline-block px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-sm font-semibold mb-6" >
        Academic Resource Portal <
        /div> <
        h1 className = "text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6" >
        Your Central Hub
        for Academic Excellence <
        /h1> <
        p className = "text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl" >
        Access verified study materials, official notices, and collaborate with peers.Everything you need
        for your academic journey, organized and approved by faculty. <
        /p> <
        div className = "flex flex-col sm:flex-row gap-4" >
        <
        Link to = "/register"
        data - testid = "hero-get-started-btn" >
        <
        button className = "bg-slate-900 text-white hover:bg-slate-800 px-8 py-3.5 rounded-lg font-semibold shadow-sm hover:shadow-md transition-all flex items-center gap-2 justify-center" >
        Get Started < ArrowRight className = "w-5 h-5" / >
        <
        /button> <
        /Link> <
        Link to = "/login"
        data - testid = "hero-login-btn" >
        <
        button className = "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-3.5 rounded-lg font-semibold transition-all" >
        Login to Portal <
        /button> <
        /Link> <
        /div> <
        /div> <
        div className = "lg:col-span-5" >
        <
        div className = "relative" >
        <
        img src = "https://images.unsplash.com/photo-1664273891579-22f28332f3c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzcxNTg2MzQyfDA&ixlib=rb-4.1.0&q=85"
        alt = "Modern university architecture"
        className = "rounded-2xl shadow-2xl w-full h-auto" /
        >
        <
        /div> <
        /div> <
        /div> <
        /div> <
        /section>

        { /* Features Grid */ } <
        section className = "py-20 bg-white" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" >
        <
        div className = "text-center mb-16" >
        <
        h2 className = "text-3xl md:text-4xl font-bold text-slate-900 mb-4" > Everything You Need in One Place < /h2> <
        p className = "text-lg text-slate-600 max-w-2xl mx-auto" > A comprehensive platform designed
        for students, faculty, and administrators. < /p> <
        /div>

        <
        div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" > {
            [{
                    icon: < FileText className = "w-8 h-8" / > ,
                    title: "Smart Repository",
                    description: "Organized by semester, subject, and unit. Find exactly what you need, when you need it."
                },
                {
                    icon: < Shield className = "w-8 h-8" / > ,
                    title: "Quality Approved",
                    description: "All student uploads are reviewed by faculty before going live. No spam, only quality content."
                },
                {
                    icon: < Search className = "w-8 h-8" / > ,
                    title: "Advanced Search",
                    description: "Filter by subject code, semester, professor, or file type. Lightning-fast results."
                },
                {
                    icon: < Bell className = "w-8 h-8" / > ,
                    title: "Official Notices",
                    description: "Get department circulars and urgent announcements. Never miss important updates."
                },
                {
                    icon: < Upload className = "w-8 h-8" / > ,
                    title: "Easy Uploads",
                    description: "Share your notes with peers. Support for PDF, PPT, DOC, and images."
                },
                {
                    icon: < Users className = "w-8 h-8" / > ,
                    title: "Role-Based Access",
                    description: "Different dashboards for students, faculty, and admins. Everyone gets what they need."
                }
            ].map((feature, index) => ( <
                div key = {
                    index
                }
                className = "bg-slate-50 rounded-xl p-8 hover-lift"
                data - testid = {
                    `feature-card-${index}`
                } >
                <
                div className = "w-14 h-14 bg-slate-900 rounded-lg flex items-center justify-center text-white mb-6" > {
                    feature.icon
                } <
                /div> <
                h3 className = "text-xl font-semibold text-slate-900 mb-3" > {
                    feature.title
                } < /h3> <
                p className = "text-slate-600 leading-relaxed" > {
                    feature.description
                } < /p> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section>

        { /* CTA Section */ } <
        section className = "py-20 bg-slate-900" >
        <
        div className = "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" >
        <
        h2 className = "text-3xl md:text-4xl font-bold text-white mb-6" > Ready to Get Started ? < /h2> <
        p className = "text-lg text-slate-300 mb-8 max-w-2xl mx-auto" >
        Join your peers and faculty on the platform that 's transforming academic resource management. <
        /p> <
        Link to = "/register"
        data - testid = "cta-register-btn" >
        <
        button className = "bg-orange-600 text-white hover:bg-orange-500 px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all" >
        Create Your Account <
        /button> <
        /Link> <
        /div> <
        /section>

        { /* Footer */ } <
        footer className = "bg-white border-t border-slate-200 py-8" >
        <
        div className = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600" >
        <
        p > & copy; 2026 Nexus Academic.All rights reserved. < /p> <
        /div> <
        /footer> <
        /div>
    );
}