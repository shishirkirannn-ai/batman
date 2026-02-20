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
    Search,
    Filter,
    Download,
    Upload,
    FileText,
    X
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function RepositoryPage() {
    const {
        user
    } = useContext(AuthContext);
    const [files, setFiles] = useState([]);
    const [filteredFiles, setFilteredFiles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [filters, setFilters] = useState({
        semester: '',
        subject_code: '',
        search: ''
    });
    const [uploadData, setUploadData] = useState({
        file: null,
        subject_code: '',
        subject_name: '',
        semester: '',
        unit: '',
        professor_name: ''
    });
    const [uploading, setUploading] = useState(false);

    useEffect(() => {
        fetchFiles();
    }, []);

    useEffect(() => {
        applyFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [files, filters]);

    const fetchFiles = async () => {
        try {
            const response = await axios.get(`${API}/files`);
            setFiles(response.data);
        } catch (error) {
            toast.error('Failed to load files');
        } finally {
            setLoading(false);
        }
    };

    const applyFilters = () => {
        let result = [...files];

        if (filters.semester) {
            result = result.filter(f => f.semester === parseInt(filters.semester));
        }

        if (filters.subject_code) {
            result = result.filter(f => f.subject_code.toLowerCase().includes(filters.subject_code.toLowerCase()));
        }

        if (filters.search) {
            result = result.filter(f =>
                f.original_filename.toLowerCase().includes(filters.search.toLowerCase()) ||
                f.subject_name.toLowerCase().includes(filters.search.toLowerCase())
            );
        }

        setFilteredFiles(result);
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

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!uploadData.file) {
            toast.error('Please select a file');
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append('file', uploadData.file);
        formData.append('subject_code', uploadData.subject_code);
        formData.append('subject_name', uploadData.subject_name);
        formData.append('semester', uploadData.semester);
        if (uploadData.unit) formData.append('unit', uploadData.unit);
        if (uploadData.professor_name) formData.append('professor_name', uploadData.professor_name);

        try {
            await axios.post(`${API}/files/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success(user ? .role === 'student' ? 'File uploaded! Pending approval.' : 'File uploaded successfully!');
            setShowUploadModal(false);
            setUploadData({
                file: null,
                subject_code: '',
                subject_name: '',
                semester: '',
                unit: '',
                professor_name: ''
            });
            fetchFiles();
        } catch (error) {
            toast.error(error.response ? .data ? .detail || 'Failed to upload file');
        } finally {
            setUploading(false);
        }
    };

    const getFileIcon = (fileType) => {
        return <FileText className = "w-6 h-6 text-slate-600" / > ;
    };

    const formatFileSize = (bytes) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    return ( <
        DashboardLayout >
        <
        div className = "space-y-6"
        data - testid = "repository-page" > { /* Header */ } <
        div className = "flex items-center justify-between" >
        <
        div >
        <
        h1 className = "text-3xl font-bold text-slate-900" > Resource Repository < /h1> <
        p className = "text-slate-600 mt-1" > {
            filteredFiles.length
        }
        resources available < /p> <
        /div> {
            (user ? .role === 'student' || user ? .role === 'faculty' || user ? .role === 'admin') && ( <
                button onClick = {
                    () => setShowUploadModal(true)
                }
                className = "bg-slate-900 text-white hover:bg-slate-800 px-6 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                data - testid = "open-upload-modal-btn" >
                <
                Upload className = "w-5 h-5" / >
                Upload File <
                /button>
            )
        } <
        /div>

        { /* Filters */ } <
        div className = "bg-white rounded-xl border border-slate-200 p-6" >
        <
        div className = "flex items-center gap-2 mb-4" >
        <
        Filter className = "w-5 h-5 text-slate-600" / >
        <
        h2 className = "text-lg font-semibold text-slate-900" > Filters < /h2> <
        /div> <
        div className = "grid grid-cols-1 md:grid-cols-3 gap-4" >
        <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Search < /label> <
        div className = "relative" >
        <
        Search className = "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" / >
        <
        input type = "text"
        value = {
            filters.search
        }
        onChange = {
            (e) => setFilters({ ...filters,
                search: e.target.value
            })
        }
        className = "w-full pl-11 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        placeholder = "Search files..."
        data - testid = "search-input" /
        >
        <
        /div> <
        /div> <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Semester < /label> <
        select value = {
            filters.semester
        }
        onChange = {
            (e) => setFilters({ ...filters,
                semester: e.target.value
            })
        }
        className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        data - testid = "semester-filter" >
        <
        option value = "" > All Semesters < /option> {
            [1, 2, 3, 4, 5, 6, 7, 8].map((sem) => ( <
                option key = {
                    sem
                }
                value = {
                    sem
                } > Semester {
                    sem
                } < /option>
            ))
        } <
        /select> <
        /div> <
        div >
        <
        label className = "block text-sm font-medium text-slate-700 mb-2" > Subject Code < /label> <
        input type = "text"
        value = {
            filters.subject_code
        }
        onChange = {
            (e) => setFilters({ ...filters,
                subject_code: e.target.value
            })
        }
        className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
        placeholder = "e.g., BCA401"
        data - testid = "subject-code-filter" /
        >
        <
        /div> <
        /div> <
        /div>

        { /* Files Grid */ } {
            loading ? ( <
                div className = "flex items-center justify-center h-64" >
                <
                div className = "text-lg font-medium text-slate-600" > Loading... < /div> <
                /div>
            ) : filteredFiles.length === 0 ? ( <
                div className = "bg-white rounded-xl border border-slate-200 p-12 text-center" >
                <
                FileText className = "w-12 h-12 text-slate-400 mx-auto mb-3" / >
                <
                p className = "text-slate-600" > No files found matching your criteria < /p> <
                /div>
            ) : ( <
                div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" > {
                    filteredFiles.map((file) => ( <
                        div key = {
                            file.id
                        }
                        className = "bg-white rounded-xl border border-slate-200 p-6 hover-lift file-card"
                        data - testid = {
                            `file-card-${file.id}`
                        } >
                        <
                        div className = "flex items-start gap-4 mb-4" >
                        <
                        div className = "w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0" > {
                            getFileIcon(file.file_type)
                        } <
                        /div> <
                        div className = "flex-1 min-w-0" >
                        <
                        h3 className = "font-semibold text-slate-900 mb-1 truncate"
                        title = {
                            file.original_filename
                        } > {
                            file.original_filename
                        } <
                        /h3> <
                        p className = "text-sm text-slate-600" > {
                            file.subject_code
                        } < /p> <
                        /div> <
                        /div> <
                        div className = "space-y-2 mb-4 text-sm text-slate-600" >
                        <
                        p > < span className = "font-medium" > Subject: < /span> {file.subject_name}</p >
                        <
                        p > < span className = "font-medium" > Semester: < /span> {file.semester}</p > {
                            file.unit && < p > < span className = "font-medium" > Unit: < /span> {file.unit}</p >
                        } <
                        p > < span className = "font-medium" > Uploaded by: < /span> {file.uploader_name}</p >
                        <
                        p > < span className = "font-medium" > Size: < /span> {formatFileSize(file.file_size)}</p >
                        <
                        /div> <
                        button onClick = {
                            () => handleDownload(file.id, file.original_filename)
                        }
                        className = "w-full bg-slate-900 text-white hover:bg-slate-800 py-2.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                        data - testid = {
                            `download-file-btn-${file.id}`
                        } >
                        <
                        Download className = "w-4 h-4" / >
                        Download <
                        /button> <
                        /div>
                    ))
                } <
                /div>
            )
        } <
        /div>

        { /* Upload Modal */ } {
            showUploadModal && ( <
                div className = "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                data - testid = "upload-modal" >
                <
                div className = "bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" >
                <
                div className = "sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between" >
                <
                h2 className = "text-2xl font-bold text-slate-900" > Upload File < /h2> <
                button onClick = {
                    () => setShowUploadModal(false)
                }
                className = "text-slate-400 hover:text-slate-600 p-1"
                data - testid = "close-modal-btn" >
                <
                X className = "w-6 h-6" / >
                <
                /button> <
                /div> <
                form onSubmit = {
                    handleUpload
                }
                className = "p-6 space-y-5" >
                <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > File(PDF, PPT, DOC, JPG, PNG) < /label> <
                input type = "file"
                accept = ".pdf,.ppt,.pptx,.doc,.docx,.jpg,.jpeg,.png"
                onChange = {
                    (e) => setUploadData({ ...uploadData,
                        file: e.target.files[0]
                    })
                }
                className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                required data - testid = "file-input" /
                >
                <
                /div> <
                div className = "grid grid-cols-2 gap-4" >
                <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Subject Code < /label> <
                input type = "text"
                value = {
                    uploadData.subject_code
                }
                onChange = {
                    (e) => setUploadData({ ...uploadData,
                        subject_code: e.target.value
                    })
                }
                className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder = "e.g., BCA401"
                required data - testid = "upload-subject-code-input" /
                >
                <
                /div> <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Subject Name < /label> <
                input type = "text"
                value = {
                    uploadData.subject_name
                }
                onChange = {
                    (e) => setUploadData({ ...uploadData,
                        subject_name: e.target.value
                    })
                }
                className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder = "e.g., Data Structures"
                required data - testid = "upload-subject-name-input" /
                >
                <
                /div> <
                /div> <
                div className = "grid grid-cols-2 gap-4" >
                <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Semester < /label> <
                select value = {
                    uploadData.semester
                }
                onChange = {
                    (e) => setUploadData({ ...uploadData,
                        semester: e.target.value
                    })
                }
                className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                required data - testid = "upload-semester-select" >
                <
                option value = "" > Select Semester < /option> {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((sem) => ( <
                        option key = {
                            sem
                        }
                        value = {
                            sem
                        } > Semester {
                            sem
                        } < /option>
                    ))
                } <
                /select> <
                /div> <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Unit(Optional) < /label> <
                input type = "text"
                value = {
                    uploadData.unit
                }
                onChange = {
                    (e) => setUploadData({ ...uploadData,
                        unit: e.target.value
                    })
                }
                className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder = "e.g., Unit 1"
                data - testid = "upload-unit-input" /
                >
                <
                /div> <
                /div> <
                div >
                <
                label className = "block text-sm font-medium text-slate-700 mb-2" > Professor Name(Optional) < /label> <
                input type = "text"
                value = {
                    uploadData.professor_name
                }
                onChange = {
                    (e) => setUploadData({ ...uploadData,
                        professor_name: e.target.value
                    })
                }
                className = "w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                placeholder = "e.g., Prof. Sharma"
                data - testid = "upload-professor-input" /
                >
                <
                /div> {
                    user ? .role === 'student' && ( <
                        div className = "bg-yellow-50 border border-yellow-200 rounded-lg p-4" >
                        <
                        p className = "text-sm text-yellow-800" >
                        <
                        strong > Note: < /strong> Your file will be pending approval from faculty before it becomes visible to everyone. <
                        /p> <
                        /div>
                    )
                } <
                div className = "flex gap-3 pt-4" >
                <
                button type = "button"
                onClick = {
                    () => setShowUploadModal(false)
                }
                className = "flex-1 bg-slate-100 text-slate-700 hover:bg-slate-200 py-2.5 rounded-lg font-medium transition-colors"
                data - testid = "cancel-upload-btn" >
                Cancel <
                /button> <
                button type = "submit"
                disabled = {
                    uploading
                }
                className = "flex-1 bg-slate-900 text-white hover:bg-slate-800 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                data - testid = "submit-upload-btn" >
                {
                    uploading ? 'Uploading...' : 'Upload'
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