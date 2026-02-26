import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

const roleToDashboardPath = {
  admin: '/dashboard/admin',
  victim: '/dashboard/victim',
  counsellor: '/dashboard/counsellor',
  'legal-advisor': '/dashboard/legal-advisor',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = localStorage.getItem('fsad_user')
    if (stored) {
      setUser(JSON.parse(stored))
    }
  }, [])

  const login = ({ name, email, role }) => {
    const loggedUser = {
      id: Date.now(),
      name: name || 'User',
      email,
      role,
    }
    setUser(loggedUser)
    localStorage.setItem('fsad_user', JSON.stringify(loggedUser))
    return roleToDashboardPath[role]
  }

  const register = ({ name, email, role }) => {
    return login({ name, email, role })
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('fsad_user')
  }

  const value = useMemo(
    () => ({
      user,
      login,
      register,
      logout,
      roleToDashboardPath,
    }),
    [user],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
