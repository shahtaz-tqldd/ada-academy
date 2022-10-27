import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Homepage from '../pages/Homepage/Homepage';
import Blogs from '../pages/Blogs/Blogs';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Errorpage from '../pages/Errorpage/Errorpage';
import PrivateRoute from './PrivateRoute';
import Courses from '../pages/Courses/Courses';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Homepage />,
          loader: () => fetch('https://ada-academy-server.vercel.app/courses')
        },
        {
          path: '/courses',
          element: <Courses/>,
          loader: () => fetch('https://ada-academy-server.vercel.app/courses')
        },
        {
          path: '/blogs',
          element: <PrivateRoute><Blogs/></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login/>
        },
        {
          path: '/sign-up',
          element: <SignUp />
        },
        {
          path: '*',
          element: <Errorpage/>
        }
      ]
    }
  ]);