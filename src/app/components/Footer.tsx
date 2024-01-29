import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full px-32 py-6 border-t-2 border-slate-100 font-medium flex items-center justify-between">
        <span>{new Date().getUTCFullYear()} &copy; Fazle R. Dayeen</span>
    </footer>
  )
}

export default Footer
