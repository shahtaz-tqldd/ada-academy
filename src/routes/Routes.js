import { createBrowserRouter } from 'react-router-dom';
import Main from './Main';
import Homepage from '../pages/Homepage/Homepage';
import Blogs from '../pages/Blogs/Blogs';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Errorpage from '../pages/Errorpage/Errorpage';

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Homepage />
        },
        {
          path: '/blogs',
          element: <Blogs/>
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