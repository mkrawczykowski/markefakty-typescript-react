import * as React from "react";
import * as ReactDOM from "react-dom/client"
import FirstComponent from './components/FirstComponent'
import Layout from './components/structure/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
        test
    </Layout>
  </React.StrictMode>
);