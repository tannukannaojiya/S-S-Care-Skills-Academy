import { About, BecomePartner, CartHome, ContactUs, Courses, Error, HomeLayout, Landing,  Login, Orders, Register, Services} from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import {loader as landingLoader} from './pages/Landing';
import AddCart from './components/AddCart';
import CoursesListCart from './components/CoursesListCart';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement:ErrorElement,
      },
      // {
      //   path: '/services',
      //   element: <Services />,
      // },
      {
        path: '/courses/:id',
        element: <Courses/>
      },
       {
        path: 'cart',
        element: <CoursesListCart/>,
        
       },
      {
        path: 'becomePartner',
        element: <BecomePartner />,
      },
      { 
        path: 'about', 
        element: <About /> 
      },
      {
        path: 'contactUs',
        element: <ContactUs />,
      },
      
      {
        path: 'orders',
        element: <Orders />,
      },
      // {
      //   path: 'coursesListCart',
      //   element: <CoursesListCart/>
      // },
      {
        path:'cartHome',
        element:<CartHome/>
      }
    ],
    
  },
  

  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;