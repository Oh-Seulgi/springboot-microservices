import ApiTest from "page/ApiTest";
import Layout from "components/Layout";

const Router = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "apiTest", element: <ApiTest /> }],
  },
];

export default Router;
