import {
    useState,
    useEffect,
    useContext
} from 'react';
import {
    Link
} from 'react-router-dom';
import axios from 'axios';
import {
    toast
} from 'sonner';
import {
    AuthContext
} from '../App';
import DashboardLayout from '../components/DashboardLayout';
import {
    Upload,
    FileText,
    Clock,
    CheckCircle,
    XCircle,
    Download
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function StudentDashboard() {
    const {
        user
    } = useContext(AuthContext);
    const [stats, setStats] = useState(null);
    const [myUploads, setMyUploads] = useState([]);
    const [recentFiles, setRecentFiles] = useState([]);
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const [statsRes, uploadsRes, filesRes, noticesRes] = await Promise.all([
                axios.get(`${API}/stats`),
                axios.get(`${API}/files?status_filter=my_uploads`),
                axios.get(`${API}/files`),
                axios.get(`${API}/notices`)
            ]);

            setStats(statsRes.data);
            setMyUploads(uploadsRes.data.slice(0, 5));
            setRecentFiles(filesRes.data.slice(0, 6));
            setNotices(noticesRes.data.slice(0, 3));
        } catch (error) {
            toast.error('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = async (fileId, filename) => {
        try {
            const response = await axios.get(`${API}/files/${fileId}/download`, {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
            toast.success('File downloaded successfully');
        } catch (error) {
            toast.error('Failed to download file');
        }
    };

    const getStatusBadge = (status) => {
        const badges = {
            pending: {
                icon: Clock,
                color: 'bg-yellow-100 text-yellow-700',
                text: 'Pending'
            },
            approved: {
                icon: CheckCircle,
                color: 'bg-green-100 text-green-700',
                text: 'Approved'
            },
            rejected: {
                icon: XCircle,
                color: 'bg-red-100 text-red-700',
                text: 'Rejected'
            }
        };
        const badge = badges[status];
        const Icon = badge.icon;
        return ( <
            span className = {
                `inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${badge.color}`
            } >
            <
            Icon className = "w-3 h-3" / > {
                badge.text
            } <
            /span>
        );
    };

    const isNew = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = (now - date) / (1000 * 60 * 60);
        return diff < 24;
    };

    if (loading) {
        return ( <
            DashboardLayout >
            <
            div className = "flex items-center justify-center h-96" >
            <
            div className = "text-lg font-medium text-slate-600" > Loading... < /div> <
            /div> <
            /DashboardLayout>
        );
    }

    return ( <
        DashboardLayout >
        <
        div className = "space-y-8"
        data - testid = "student-dashboard" > { /* Welcome Section */ } <
        div >
        <
        h1 className = "text-3xl font-bold text-slate-900" > Welcome back, {
            user ? .name
        }! < /h1> <
        p className = "text-slate-600 mt-2" > Semester {
            user ? .semester
        } | USN: {
            user ? .usn
        } < /p> <
        /div>

        { /* Stats Grid */ } <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-6" >
        <
        div className = "bg-white rounded-xl border border-slate-200 p-6"
        data - testid = "total-files-stat" >
        <
        div className = "flex items-center justify-between" >
        <
        div >
        <
        p className = "text-sm text-slate-600 mb-1" > Total Resources < /p> <
        p className = "text-3xl font-bold text-slate-900" > {
            stats ? .total_files || 0
        } < /p> <
        /div> <
        div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center" >
        <
        FileText className = "w-6 h-6 text-slate-600" / >
        <
        /div> <
        /div> <
        /div>

        <
        div className = "bg-white rounded-xl border border-slate-200 p-6"
        data - testid = "my-uploads-stat" >
        <
        div className = "flex items-center justify-between" >
        <
        div >
        <
        p className = "text-sm text-slate-600 mb-1" > My Uploads < /p> <
        p className = "text-3xl font-bold text-slate-900" > {
            stats ? .my_uploads || 0
        } < /p> <
        /div> <
        div className = "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" >
        <
        Upload className = "w-6 h-6 text-blue-600" / >
        <
        /div> <
        /div> <
        /div>

        <
        div className = "bg-white rounded-xl border border-slate-200 p-6"
        data - testid = "notices-stat" >
        <
        div className = "flex items-center justify-between" >
        <
        div >
        <
        p className = "text-sm text-slate-600 mb-1" > Active Notices < /p> <
        p className = "text-3xl font-bold text-slate-900" > {
            stats ? .total_notices || 0
        } < /p> <
        /div> <
        div className = "w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center" >
        <
        FileText className = "w-6 h-6 text-orange-600" / >
        <
        /div> <
        /div> <
        /div> <
        /div>

        { /* Main Content Grid */ } <
        div className = "grid grid-cols-1 lg:grid-cols-3 gap-6" > { /* Recent Files */ } <
        div className = "lg:col-span-2 bg-white rounded-xl border border-slate-200 p-6" >
        <
        div className = "flex items-center justify-between mb-6" >
        <
        h2 className = "text-xl font-semibold text-slate-900" > Recent Resources < /h2> <
        Link to = "/repository"
        className = "text-sm text-orange-600 hover:text-orange-700 font-medium"
        data - testid = "view-all-link" >
        View All <
        /Link> <
        /div> <
        div className = "space-y-3" > {
            recentFiles.length === 0 ? ( <
                p className = "text-slate-500 text-center py-8" > No resources available yet < /p>
            ) : (
                recentFiles.map((file) => ( <
                    div key = {
                        file.id
                    }
                    className = "flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                    data - testid = {
                        `file-item-${file.id}`
                    } >
                    <
                    div className = "flex items-center gap-3 flex-1" >
                    <
                    div className = "w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200" >
                    <
                    FileText className = "w-5 h-5 text-slate-600" / >
                    <
                    /div> <
                    div className = "flex-1 min-w-0" >
                    <
                    p className = "font-medium text-slate-900 truncate" > {
                        file.original_filename
                    } < /p> <
                    p className = "text-sm text-slate-600" > {
                        file.subject_code
                    } | {
                        file.uploader_name
                    } < /p> <
                    /div> <
                    /div> <
                    button onClick = {
                        () => handleDownload(file.id, file.original_filename)
                    }
                    className = "text-slate-600 hover:text-slate-900 p-2 hover:bg-white rounded-lg transition-colors"
                    data - testid = {
                        `download-btn-${file.id}`
                    } >
                    <
                    Download className = "w-5 h-5" / >
                    <
                    /button> <
                    /div>
                ))
            )
        } <
        /div> <
        /div>

        { /* Notices */ } <
        div className = "bg-white rounded-xl border border-slate-200 p-6" >
        <
        div className = "flex items-center justify-between mb-6" >
        <
        h2 className = "text-xl font-semibold text-slate-900" > Latest Notices < /h2> <
        Link to = "/notices"
        className = "text-sm text-orange-600 hover:text-orange-700 font-medium"
        data - testid = "view-notices-link" >
        View All <
        /Link> <
        /div> <
        div className = "space-y-4" > {
            notices.length === 0 ? ( <
                p className = "text-slate-500 text-center py-8" > No notices yet < /p>
            ) : (
                notices.map((notice) => ( <
                    div key = {
                        notice.id
                    }
                    className = "pb-4 border-b border-slate-100 last:border-0"
                    data - testid = {
                        `notice-item-${notice.id}`
                    } >
                    <
                    div className = "flex items-start gap-2 mb-2" >
                    <
                    h3 className = "font-medium text-slate-900 flex-1" > {
                        notice.title
                    } < /h3> {
                        isNew(notice.created_at) && ( <
                            span className = "px-2 py-0.5 bg-orange-100 text-orange-600 text-xs font-semibold rounded" > NEW < /span>
                        )
                    } <
                    /div> <
                    p className = "text-sm text-slate-600 mb-2 line-clamp-2" > {
                        notice.content
                    } < /p> <
                    p className = "text-xs text-slate-500" > By {
                        notice.creator_name
                    } < /p> <
                    /div>
                ))
            )
        } <
        /div> <
        /div> <
        /div>

        { /* My Uploads */ } {
            myUploads.length > 0 && ( <
                div className = "bg-white rounded-xl border border-slate-200 p-6" >
                <
                h2 className = "text-xl font-semibold text-slate-900 mb-6" > My Recent Uploads < /h2> <
                div className = "space-y-3" > {
                    myUploads.map((file) => ( <
                        div key = {
                            file.id
                        }
                        className = "flex items-center justify-between p-4 bg-slate-50 rounded-lg"
                        data - testid = {
                            `my-upload-${file.id}`
                        } >
                        <
                        div className = "flex items-center gap-3 flex-1" >
                        <
                        div className = "w-10 h-10 bg-white rounded-lg flex items-center justify-center border border-slate-200" >
                        <
                        FileText className = "w-5 h-5 text-slate-600" / >
                        <
                        /div> <
                        div className = "flex-1" >
                        <
                        p className = "font-medium text-slate-900" > {
                            file.original_filename
                        } < /p> <
                        p className = "text-sm text-slate-600" > {
                            file.subject_code
                        } | Semester {
                            file.semester
                        } < /p> <
                        /div> <
                        /div> {
                            getStatusBadge(file.status)
                        } <
                        /div>
                    ))
                } <
                /div> <
                /div>
            )
        } <
        /div> <
        /DashboardLayout>
    );
}