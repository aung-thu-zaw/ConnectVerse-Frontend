import React, { useEffect } from 'react'

const ToggleModeButton: React.FC = () => {
  useEffect(() => {
    const themeToggleBtn = document.getElementById('theme-toggle')
    const themeToggleDarkIcon = document.getElementById(
      'theme-toggle-dark-icon',
    )
    const themeToggleLightIcon = document.getElementById(
      'theme-toggle-light-icon',
    )

    const toggleMode = () => {
      // Toggle icon
      themeToggleDarkIcon?.classList.toggle('hidden')
      themeToggleLightIcon?.classList.toggle('hidden')

      // Toggle theme
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
      }
    }

    if (
      localStorage.getItem('color-theme') === 'dark' ||
      (!localStorage.getItem('color-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      // Set dark mode
      document.documentElement.classList.add('dark')
      themeToggleLightIcon?.classList.remove('hidden')
    } else {
      // Set light mode
      document.documentElement.classList.remove('dark')
      themeToggleDarkIcon?.classList.remove('hidden')
    }

    // Listen for toggle button click
    themeToggleBtn?.addEventListener('click', toggleMode)

    return () => {
      // Clean up event listener
      themeToggleBtn?.removeEventListener('click', toggleMode)
    }
  }, [])

  return (
    <>
      <button
        id="theme-toggle"
        type="button"
        className="w-full text-left block px-5 py-2 text-sm font-medium rounded-md hover:bg-gray-200 dark:hover:bg-[#000] dark:hover:bg-opacity-50"
      >
        <span id="theme-toggle-light-icon" className="hidden">
          <i className="fa-solid fa-sun mr-5"></i>
          Light Mode
        </span>
        <span id="theme-toggle-dark-icon" className="hidden">
          <i className="fa-solid fa-moon mr-5"></i>
          Night Mode
        </span>
      </button>
    </>
  )
}

export default ToggleModeButton
