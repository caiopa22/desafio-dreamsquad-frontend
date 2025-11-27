import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import App from './App.tsx'
import { ThemeProvider, useTheme } from './components/ui/theme-provider.tsx'
import { Toaster } from 'sonner'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import { AppSidebar } from './components/app-sidebar.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider defaultOpen={false}>
        <AppSidebar />
        <Toaster position='top-center' />
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
)
