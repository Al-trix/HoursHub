import { createBrowserRouter } from 'react-router';
import RegisterPage from './auth/pages/RegisterPage';
import HomePage from './HomePage'

const router = createBrowserRouter([

  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth/register',
    element: <RegisterPage />,
  },
  

    
])

export default router;
