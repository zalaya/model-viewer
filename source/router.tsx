import { createBrowserRouter } from 'react-router'
import LandingPage from '@/features/landing/page'
import StudioPage from '@/features/studio/page'
import ViewerPage from '@/features/viewer/page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/studio',
    element: <StudioPage />
  },
  {
    path: '/viewer',
    element: <ViewerPage />
  }
])
