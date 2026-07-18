'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { authAPI } from '@/services/api'

interface User {
  id: string
  username: string
  email: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<boolean>
  signup: (username: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for stored token on mount
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setToken(storedToken)
      // You could decode the token to get user info or make an API call
      // For now, we'll just set the token
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true)
      const response = await authAPI.login(email, password)
      
      if (response.token) {
        setToken(response.token)
        localStorage.setItem('token', response.token)
        
        // Decode token to get user info (in a real app, you'd make an API call)
        // For now, we'll create a mock user object
        setUser({
          id: '1',
          username: email.split('@')[0],
          email: email
        })
        
        return true
      }
      return false
    } catch (error) {
      console.error('Login error:', error)
      return false
    } finally {
      setLoading(false)
    }
  }

  const signup = async (username: string, email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true)
      const response = await authAPI.signup(username, email, password)
      
      if (response.message === 'User created successfully') {
        // Auto-login after successful signup
        return await login(email, password)
      }
      return false
    } catch (error) {
      console.error('Signup error:', error)
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
  }

  const value: AuthContextType = {
    user,
    token,
    login,
    signup,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
