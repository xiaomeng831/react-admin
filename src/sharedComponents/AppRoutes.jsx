import { useRoutes } from "react-router-dom";
import Dashboard from "../scenes/dashboard";
import Team from "../scenes/team";
import Contacts from "../scenes/contacts";
import Invoices from "../scenes/invoices";
import Form from "../scenes/form";
import Calendar from "../scenes/calendar";
import Faq from "../scenes/faq";
import Bar from "../scenes/bar";
import Pie from "../scenes/pie";
import Line from "../scenes/line";

const routes = [
    { path: "/", element: <Dashboard  /> },
    { path: "/team", element: <Team  /> },
    { path: "/contacts", element: <Contacts  /> },
    { path: "/invoices", element: <Invoices  /> },
    { path: "/form", element: <Form  /> },
    { path: "/calendar", element: <Calendar  /> },
    { path: "/faq", element: <Faq  /> },
    { path: "/bar", element: <Bar  /> },
    { path: "/pie", element: <Pie  /> },
    { path: "/line", element: <Line  /> }
];
 
const AppRoutes = () => {
    return useRoutes(routes);
};
export default AppRoutes;