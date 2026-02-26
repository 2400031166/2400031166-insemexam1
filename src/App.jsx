import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import VictimDashboard from './pages/dashboard/VictimDashboard.jsx'
import CounsellorDashboard from './pages/dashboard/CounsellorDashboard.jsx'
import LegalAdvisorDashboard from './pages/dashboard/LegalAdvisorDashboard.jsx'
import AdminDashboard from './pages/dashboard/AdminDashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import UnauthorizedPage from './pages/UnauthorizedPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/unauthorized" element={<UnauthorizedPage />} />

      <Route
        path="/dashboard/victim"
        element={
          <ProtectedRoute allowedRoles={['victim']}>
            <VictimDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/counsellor"
        element={
          <ProtectedRoute allowedRoles={['counsellor']}>
            <CounsellorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/legal-advisor"
        element={
          <ProtectedRoute allowedRoles={['legal-advisor']}>
            <LegalAdvisorDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/admin"
        element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
