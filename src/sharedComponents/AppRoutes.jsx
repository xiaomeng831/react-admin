import { useRoutes } from "react-router-dom";
import Dashboard from "../scenes/dashboard";

const routes = [
    { path: "/", element: <Dashboard  /> }
];
 
const AppRoutes = () => {
    return useRoutes(routes);
};
export default AppRoutes;