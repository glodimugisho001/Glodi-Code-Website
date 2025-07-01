import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        className: "!bg-blue-700 !text-white !text-[18px] !py-2 !px-6 !w-[400px] !mt-3",
        descriptionClassName: "!text-gray-200 !text-[14px] !font-bold !mt-2 "
      }}
    />
  </StrictMode>,
)
