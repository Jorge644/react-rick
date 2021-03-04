import React from 'react'

export default function Layout(props){
    const children = props.children
    return(
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}