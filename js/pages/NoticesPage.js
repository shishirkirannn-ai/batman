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
    Bell,
    Plus,
    X,
    AlertCircle
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function NoticesPage() {
    const {
        user
    } = useContext(AuthContext);
    const [notices, setNotices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [noticeData, setNoticeData] = useState({
        title: '',
        content: '',
        is_urgent: false
    });
    const [creating, setCreating] = useState(false);

    useEffect(() => {
        fetchNotices();
    }, []);

    const fetchNotices = async () => {
        try {
            const response = await axios.get(`${API}/notices`);
            setNotices(response.data);
        } catch (error) {
            toast.error('Failed to load notices');
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        setCreating(true);

        try {
            await axios.post(`${API}/notices`, noticeData);
            toast.success('Notice created successfully');
            setShowCreateModal(false);
            setNoticeData({
                title: '',
                content: '',
                is_urgent: false
            });
            fetchNotices();
        } catch (error) {
            toast.error(error.response ? .data ? .detail || 'Failed to create notice');
        } finally {
            setCreating(false);
        }
    };

    const isNew = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diff = (now - date) / (1000 * 60 * 60);
        return diff < 24;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return ( <
        DashboardLayout >
        <
        div className = "space-y-6"
        data - testid = "notices-page" > { /* Header */ } <
        div className = "flex items-center justify-between" >
        <
        div >
        <
        h1 className = "text-3xl font-bold text-slate-900" > Department Notices < /h1> <
        p className = "text-slate-600 mt-1" > {
            notices.length
        }
        active notices < /p> <
        /div> {
            (user ? .role === 'faculty' || user ? .role === 'admin') && ( <
                button onClick = {
                    () => setShowCreateModal(true)
                }
                className = "bg-orange-600 text-white hover:bg-orange-700 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                data - testid = "create-notice-btn" >
                <
                Plus className = "w-5 h-5" / >
                Create Notice <
                /button>
            )
        } <
        /div>

        { /* Notices List */ } {
            loading ? ( <
                div className = "flex items-center justify-center h-64" >
                <
                div className = "text-lg font-medium text-slate-600" > Loading... < /div> <
                /div>
            ) : notices.length === 0 ? ( <
                div className = "bg-white rounded-xl border border-slate-200 p-12 text-center" >
                <
                Bell className = "w-12 h-12 text-slate-400 mx-auto mb-3" / >
                <
                p className = "text-slate-600" > No notices posted yet < /p> <
                /div>
            ) : ( <
                div className = "space-y-4" > {
                    notices.map((notice) => ( <
                        div key = {
                            notice.id
                        }
                        className = {
                            `bg-white rounded-xl border p-6 ${
                  notice.is_urgent 
                    ? 'border-orange-300 bg-orange-50' 
                    : 'border-slate-200'
                }`
                        }
                        data - testid = {
                            `notice-${notice.id}`
                        } >
                        <
                        div className = "flex items-start justify-between mb-4" >
                        <
                        div className = "flex-1" >
                        <
                        div className = "flex items-start gap-3 mb-2" > {
                            notice.is_urgent && ( <
                                div className = "flex-shrink-0" >
                                <
                                AlertCircle className = "w-6 h-6 text-orange-600" / >
                                <
                                /div>
                            )
                        } <
                        div className = "flex-1" >
                        <
                        h2 className = "text-xl font-semibold text-slate-900" > {
                            notice.title
                        } < /h2> <
                        /div> {
                            isNew(notice.created_at) && ( <
                                span className = "px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full uppercase" >
                                NEW <
                                /span>
                            )
                        } <
                        /div> {
                            notice.is_urgent && ( <
                                span className = "inline-block px-3 py-1 bg-orange-600 text-white text-xs font-semibold rounded-full mb-3" >
                                URGENT <
                                /span>
                            )
                        } <
                        /div> <
                        /div> <
                        p className = "text-slate-700 leading-relaxed mb-4 whitespace-pre-wrap" > {
                            notice.content
                        } < /p> <
                        div className = "flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200" >
                        <
                        span > Posted by: < strong > {
                            notice.creator_name
                        } < /strong></span >
                        <
                        span > {
                            formatDate(notice.created_at)
                        } < /span> <
                        /div> <
                        /div>
                    ))
                } <
                /div>
            )
        } <
        /div>

        { /* Create Notice Modal */ } {
            showCreateModal && ( <
                div className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                data - testid = "create-notice-modal" >
                <
                div className = "bg-white rounded-xl max-w-2xl w-full" >
                <
                div className = "border-b border-slate-200 px-6 py-4 flex items-center justify-between" >
                <
                h2 className = "text-2xl font-bold text-slate-900" > Create Notice < /h2> <
                button onClick = {
                    () => setShowCreateModal(false)
                }
                className = "text-slate-400 hover:text-slate-600 p-1"
                data - testid = "close-create-modal-btn" >
                <
                X className = "w-6 h-6" / >
                <
                /button> <
                /div> <
                form onSubmit = {
                    handleCreate
                }
                className = "p-6 space-y-5" >
                <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Title < /label> <
                input type = "text"
                value = {
                    noticeData.title
                }
                onChange = {
                    (e) => setNoticeData({ ...noticeData,
                        title: e.target.value
                    })
                }
                className = "w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder = "Notice title"
                required data - testid = "notice-title-input" /
                >
                <
                /div> <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Content < /label> <
                textarea value = {
                    noticeData.content
                }
                onChange = {
                    (e) => setNoticeData({ ...noticeData,
                        content: e.target.value
                    })
                }
                className = "w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent min-h-[150px]"
                placeholder = "Write your notice here..."
                required data - testid = "notice-content-textarea" /
                >
                <
                /div> <
                div className = "flex items-center gap-3" >
                <
                input type = "checkbox"
                id = "is_urgent"
                checked = {
                    noticeData.is_urgent
                }
                onChange = {
                    (e) => setNoticeData({ ...noticeData,
                        is_urgent: e.target.checked
                    })
                }
                className = "w-5 h-5 rounded border-slate-300 text-orange-600 focus:ring-orange-600"
                data - testid = "notice-urgent-checkbox" /
                >
                <
                label htmlFor = "is_urgent"
                className = "text-sm font-medium text-slate-700" >
                Mark as Urgent <
                /label> <
                /div> <
                div className = "flex gap-3 pt-4" >
                <
                button type = "button"
                onClick = {
                    () => setShowCreateModal(false)
                }
                className = "flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 py-2.5 rounded-lg font-medium transition-colors"
                data - testid = "cancel-notice-btn" >
                Cancel <
                /button> <
                button type = "submit"
                disabled = {
                    creating
                }
                className = "flex-1 bg-orange-600 text-white hover:bg-orange-700 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data - testid = "submit-notice-btn" >
                {
                    creating ? 'Creating...' : 'Post Notice'
                } <
                /button> <
                /div> <
                /form> <
                /div> <
                /div>
            )
        } <
        /DashboardLayout>
    );
}