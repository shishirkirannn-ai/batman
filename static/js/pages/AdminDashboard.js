import {
    useState,
    useEffect,
    useContext
} from 'react';
import axios from 'axios';
import {
    toast
} from 'sonner';
import {
    AuthContext
} from '../App';
import DashboardLayout from '../components/DashboardLayout';
import {
    FileText,
    Clock,
    CheckCircle,
    Eye,
    Users,
    Bell
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function AdminDashboard() {
    const {
        user
    } = useContext(AuthContext);
    const [stats, setStats] = useState(null);
    const [pendingFiles, setPendingFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            const [statsRes, pendingRes] = await Promise.all([
                axios.get(`${API}/stats`),
                axios.get(`${API}/files?status_filter=pending`)
            ]);

            setStats(statsRes.data);
            setPendingFiles(pendingRes.data);
        } catch (error) {
            toast.error('Failed to load dashboard data');
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (fileId) => {
        try {
            await axios.put(`${API}/files/${fileId}/approve`);
            toast.success('File approved successfully');
            fetchDashboardData();
        } catch (error) {
            toast.error('Failed to approve file');
        }
    };

    const handleReject = async (fileId) => {
        try {
            await axios.delete(`${API}/files/${fileId}/reject`);
            toast.success('File rejected and deleted');
            fetchDashboardData();
        } catch (error) {
            toast.error('Failed to reject file');
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
        } catch (error) {
            toast.error('Failed to download file');
        }
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
        data - testid = "admin-dashboard" > { /* Welcome Section */ } <
        div >
        <
        h1 className = "text-3xl font-bold text-slate-900" > Admin Dashboard < /h1> <
        p className = "text-slate-600 mt-2" > Welcome, {
            user ? .name
        }(HOD) < /p> <
        /div>

        { /* Stats Grid */ } <
        div className = "grid grid-cols-1 md:grid-cols-4 gap-6" >
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
        data - testid = "pending-files-stat" >
        <
        div className = "flex items-center justify-between" >
        <
        div >
        <
        p className = "text-sm text-slate-600 mb-1" > Pending Review < /p> <
        p className = "text-3xl font-bold text-slate-900" > {
            stats ? .pending_files || 0
        } < /p> <
        /div> <
        div className = "w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center" >
        <
        Clock className = "w-6 h-6 text-yellow-600" / >
        <
        /div> <
        /div> <
        /div>

        <
        div className = "bg-white rounded-xl border border-slate-200 p-6"
        data - testid = "users-stat" >
        <
        div className = "flex items-center justify-between" >
        <
        div >
        <
        p className = "text-sm text-slate-600 mb-1" > Total Users < /p> <
        p className = "text-3xl font-bold text-slate-900" > {
            stats ? .total_users || 0
        } < /p> <
        /div> <
        div className = "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" >
        <
        Users className = "w-6 h-6 text-blue-600" / >
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
        Bell className = "w-6 h-6 text-orange-600" / >
        <
        /div> <
        /div> <
        /div> <
        /div>

        { /* Pending Approvals */ } <
        div className = "bg-white rounded-xl border border-slate-200 p-6" >
        <
        h2 className = "text-xl font-semibold text-slate-900 mb-6" > Pending Approvals < /h2> {
            pendingFiles.length === 0 ? ( <
                div className = "text-center py-12" >
                <
                CheckCircle className = "w-12 h-12 text-green-500 mx-auto mb-3" / >
                <
                p className = "text-slate-600" > No pending files to review < /p> <
                /div>
            ) : ( <
                div className = "space-y-4" > {
                    pendingFiles.map((file) => ( <
                        div key = {
                            file.id
                        }
                        className = "border border-slate-200 rounded-lg p-5"
                        data - testid = {
                            `pending-file-${file.id}`
                        } >
                        <
                        div className = "flex items-start justify-between mb-4" >
                        <
                        div className = "flex items-start gap-4 flex-1" >
                        <
                        div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" >
                        <
                        FileText className = "w-6 h-6 text-slate-600" / >
                        <
                        /div> <
                        div className = "flex-1" >
                        <
                        h3 className = "font-semibold text-slate-900 mb-1" > {
                            file.original_filename
                        } < /h3> <
                        div className = "flex flex-wrap gap-3 text-sm text-slate-600" >
                        <
                        span > Subject: {
                            file.subject_code
                        } < /span> <
                        span > • < /span> <
                        span > Semester: {
                            file.semester
                        } < /span> {
                            file.unit && ( <
                                >
                                <
                                span > • < /span> <
                                span > Unit: {
                                    file.unit
                                } < /span> <
                                />
                            )
                        } <
                        /div> <
                        p className = "text-sm text-slate-500 mt-1" > Uploaded by: {
                            file.uploader_name
                        } < /p> <
                        /div> <
                        /div> <
                        span className = "px-2.5 py-1 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full" >
                        Pending <
                        /span> <
                        /div> <
                        div className = "flex gap-3" >
                        <
                        button onClick = {
                            () => handleDownload(file.id, file.original_filename)
                        }
                        className = "flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        data - testid = {
                            `preview-btn-${file.id}`
                        } >
                        <
                        Eye className = "w-4 h-4" / >
                        Preview / Download <
                        /button> <
                        button onClick = {
                            () => handleApprove(file.id)
                        }
                        className = "flex-1 bg-green-600 text-white hover:bg-green-700 py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        data - testid = {
                            `approve-btn-${file.id}`
                        } >
                        <
                        CheckCircle className = "w-4 h-4" / >
                        Approve <
                        /button> <
                        button onClick = {
                            () => handleReject(file.id)
                        }
                        className = "flex-1 bg-red-50 text-red-600 hover:bg-red-100 py-2.5 px-4 rounded-lg font-medium transition-colors"
                        data - testid = {
                            `reject-btn-${file.id}`
                        } >
                        Reject <
                        /button> <
                        /div> <
                        /div>
                    ))
                } <
                /div>
            )
        } <
        /div> <
        /div> <
        /DashboardLayout>
    );
}