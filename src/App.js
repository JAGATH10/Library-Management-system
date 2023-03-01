
import './App.css';
import UserHomePage from './components/user/userhomepage/UserHomePage';
import { createBrowserRouter, createRoutesFromElements, Outlet, RouterProvider, Route} from "react-router-dom";

const route = createBrowserRouter(
   createRoutesFromElements(
    // <Routes>
      <Route path="/" >
        <Route index element={<UserHomePage/>}/>
        {/* <Route path="Search-page" element={<SearchPage/>} /> */}
      </Route>
    // </Routes>
   )
)
function App() {
  return (
    <div >
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
