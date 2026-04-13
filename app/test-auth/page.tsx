'use client'

import React from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function TestAuthPage() {
  const { user, token, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#05ce9b] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Authentication Test Page</h1>
          
          <div className="space-y-6">
            <div className="bg-gray-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Authentication Status</h2>
              <div className="space-y-2">
                <p><strong>Logged In:</strong> {user ? 'Yes' : 'No'}</p>
                <p><strong>User:</strong> {user ? user.username : 'None'}</p>
                <p><strong>Email:</strong> {user ? user.email : 'None'}</p>
                <p><strong>Token:</strong> {token ? 'Present' : 'None'}</p>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-blue-800 mb-4">Instructions</h2>
              <ol className="list-decimal list-inside space-y-2 text-blue-700">
                <li>Click the "Sign Up" button in the navigation to create a new account</li>
                <li>Fill out the signup form with your details</li>
                <li>After successful signup, you should be automatically logged in</li>
                <li>You can also test the login functionality</li>
                <li>Use the "Logout" button to sign out</li>
              </ol>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Backend Status</h2>
              <p className="text-green-700">
                Make sure the backend server is running on <code className="bg-green-200 px-2 py-1 rounded">http://localhost:5000</code>
              </p>
              <p className="text-green-700 mt-2">
                You can test the API directly by visiting <code className="bg-green-200 px-2 py-1 rounded">http://localhost:5000</code>
              </p>
            </div>

            {user && (
              <div className="bg-yellow-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-yellow-800 mb-4">Success! 🎉</h2>
                <p className="text-yellow-700">
                  You are successfully logged in as <strong>{user.username}</strong> ({user.email})
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
