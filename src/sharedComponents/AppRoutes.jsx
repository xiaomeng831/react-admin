import { useRoutes } from "react-router-dom";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import Invoices from "../scenes/invoices";
import Form from "../scenes/form";

const routes = [
    { path: "/", element: <Dashboard  /> },
    { path: "/team", element: <Team  /> },
    { path: "/contacts", element: <Contacts  /> },
    { path: "/invoices", element: <Invoices  /> },
    { path: "/form", element: <Form  /> }
];
 
const AppRoutes = () => {
    return useRoutes(routes);
};
export default AppRoutes;