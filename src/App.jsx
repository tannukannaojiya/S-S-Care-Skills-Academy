import { About, BecomePartner, Blog, CartHome, ContactUs, Error, HomeLayout, Landing, Login, Orders, Register, Services} from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import {loader as landingLoader} from './pages/Landing';
// import {Cart} from '../src/components/Cart';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader:landingLoader,
        errorElement:ErrorElement,
      },
     
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'becomePartner',
        element: <BecomePartner />,
      },
      // {
      //   path: 'cart',
      //   element: <Cart />,
      // },
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
      {
        path: 'blog',
        element: <Blog/>
      },
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