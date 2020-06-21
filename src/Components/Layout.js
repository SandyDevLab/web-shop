import React, { Fragment, useState } from 'react';

const Layout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true)
        } else {
            setSidebarOpen(false)
        }
    }

    return (
        <Fragment>
          
        </Fragment>
    )
}


