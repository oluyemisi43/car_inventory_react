import React from 'react';
import { DataTable } from '../../components';

export const Dashboard = (props:any) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <DataTable></DataTable>    
        </div>
    )
}