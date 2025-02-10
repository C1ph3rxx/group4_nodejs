import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { User } from '../layout/PaginatedUserCards'
const UserStatus:React.FC = () => {

    const [userStatus, setUserStatus] = useState({
        active: 0,
        inactive: 0
    })


    const getStatus = async() => {
        try{
            await axios.get('http://localhost:3000/user/').
            then((response) => {
                const users: User [] = response.data;
                const activeCount = users.filter((user)  => user.isActive).length
                const incactiveCount  = users.length - activeCount;
                setUserStatus(() => ({
                    active: activeCount,
                    inactive: incactiveCount
                }))
                
            })
        }catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getStatus();
    }, [])
    


    return (
        <div className='user-staus grid grid-cols-3 gap-4 '>
            <div className='total flex flex-col outline-solid rounded-lg px-4'>
                <div className='flex justify-between py-4'>
                    <h4>Total Users</h4>
                    <p>:</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-3xl py-4'>{userStatus.active + userStatus.inactive}</h2>
                        <div className='flex align-center gap-2 py-4'>
                            <h4>40%</h4>
                            <h4>vs last <p>month</p></h4>
                        </div>
                    </div>
                    <div className='flex align-center justify-items-center '>
                        <h2>Chart</h2>
                    </div>

                </div>
            </div>

            <div className='active flex flex-col outline-solid rounded-lg px-4'>
                <div className='flex justify-between py-3'>
                    <h4>Active Users</h4>
                    <p>:</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-3xl'>{userStatus.active}</h2>
                        <div className='flex align-center gap-2'>
                            <h4>10%</h4>
                            <h4>vs last  <p>month</p></h4>
                        </div>
                    </div>
                    <div className='flex align-center justify-items-center '>
                        <h2>Chart</h2>
                    </div>

                </div>
            </div>
            <div className='inactive flex flex-col outline-solid rounded-lg px-4'>
                <div className='flex justify-between py-3'>
                    <h4>Inactive Users</h4>
                    <p>:</p>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-3xl'>{userStatus.inactive}</h2>
                        <div className='flex align-center gap-2'>
                            <h4>20%</h4>
                            <h4>vs last  <p>month</p></h4>
                        </div>
                    </div>
                    <div className='flex align-center justify-items-center '>
                        <h2>Chart</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserStatus