import React from 'react';

interface AppProps {
    children: React.FC;
}

const Layout = ({children}: AppProps) => {
    return(
        <>
            <h1>test</h1>
            {children}
        </>
        
    )
}

export default Layout;