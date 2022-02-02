import React from 'react';
import { Route } from "react-router-dom";


export default function MainWrapper({ children }: any) {
    return <div>
        <p>MainWrapper</p>
        {children}
    </div>
}
