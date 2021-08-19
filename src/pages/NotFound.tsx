import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto py-16 sm:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
            404 error
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-800 tracking-tight sm:text-5xl">
            This page does not exist.
          </h1>
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-base font-medium text-indigo-600 hover:text-indigo-700">
            Or go back home<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
