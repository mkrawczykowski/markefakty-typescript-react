import * as React from "react";
import * as ReactDOM from "react-dom/client"
import FirstComponent from './components/FirstComponent'
import Layout from './components/structure/Layout/Layout';

// import './styles/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
        <FirstComponent></FirstComponent>
    </Layout>
  </React.StrictMode>
);