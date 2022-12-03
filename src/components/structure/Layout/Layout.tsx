import React from 'react';

interface Props {
    children?: React.ReactElement | React.ReactElement[] | string | string[];
    testText?: string
}

const Layout = ({children, testText}: Props) => {
    return(
        <>
            <h1>{testText}</h1>
            {
                typeof children == 'string' ? <p>{children}</p> : {children}
            }
        </>
        
    )
}

export default Layout;