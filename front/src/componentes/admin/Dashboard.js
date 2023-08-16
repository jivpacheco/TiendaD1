import React, { Fragment } from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
    return (
        <Fragment>
            <div className='row'>
                <div className='col-12 col-md-2'>
                    <Sidebar />
                </div>
            </div>
        </Fragment>

    )
}

export default Dashboard