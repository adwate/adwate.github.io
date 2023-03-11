import "./App.css";

import Layout from "./components/Layout/Layout";
import ReactGa from "react-ga";

ReactGa.initialize(process.env.REACT_APP_ANALYTICS_ID);
function App() {
  return <Layout />;
}

export default App;
