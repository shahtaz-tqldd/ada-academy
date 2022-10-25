import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../pages/Blogs/Blogs';
import Homepage from '../pages/Homepage/Homepage';
import Main from './Main';

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
        }
      ]
    }
  ]);