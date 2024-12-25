import { About, BecomePartner, CartHome, ContactUs, Courses, Error, HomeLayout, Landing,  Login, Orders, Register} from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import CoursesListCart from './components/CoursesListCart';
import Csr from './components/Csr';
import OnlineHomePage from './pages/OnlineHomePage';
import OfflineHomePage from './pages/OfflineHomePage';
import CarrerPage from './components/CarrerPage';
import OnlineCourse from './pages/OnlineCourse';
import OfflineCourse from './pages/OfflineCourse';
import { ToastContainer } from 'react-toastify';
import './App.css';

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
      
      {
        path: '/courses/:id',
        element: <Courses/>
      },
      {
        path: '/onlineCourse/:id',
        element: <OnlineCourse/>
      },
      {
        path: '/offlineCourses/:id',
        element: <OfflineCourse/>
      },
       {
        path: '/cart',
        element: <CoursesListCart/>,
        
       },
      {
        path: '/becomePartner',
        element: <BecomePartner />,
      },
      { 
        path: '/about', 
        element: <About /> 
      },
      { 
        path: '/csr', 
        element: <Csr /> 
      },
       { 
        path: '/offlineCourses', 
        element: <OfflineHomePage /> 
      },
      { 
        path: '/onlineCourse', 
        element: <OnlineHomePage /> 
      },
      {
        path: '/careerPage',
        element: <CarrerPage/>,
      },
      {
        path: '/contactUs',
        element: <ContactUs />,
      },
      
      {
        path: '/orders',
        element: <Orders />,
      },
      
      {
        path:'/cartHome',
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
  <ToastContainer />
};
export default App;