import axios from 'axios'
import React, { useEffect, useState } from 'react'
import flagLogo from '/flag.jpeg'
import ReactPaginate from 'react-paginate'


export interface User {
    id: string,
    firstname: string,
    lastname: string,
    email: string,
    isActive: boolean,
    createdAt: string,
    picture: string
}

const PaginatedUserCards: React.FC <{sortBy: string}> = ({sortBy}) => {
    var [users, setUsers] = useState<User[]>([]);
    
    const UserCards: React.FC<{ currentusers: User[] }> = ({ currentusers }) => {
        return (
            <>
                {currentusers.map((user) => {
                    return (
                        <div className='flex justify-between p-2 outine-solid outline-black border-solid border-black'>
                            <div className='flex gap-4 align-middle align-center justify-center'>
                                <img src={flagLogo} alt={user.firstname.charAt(0) + user.lastname.charAt(0)} className='rounded-xl w-8 h-8 mt-2' />
                                <div>
                                    <p>{user.firstname} {user.lastname}</p>
                                    <p className='opacity-40'>{user.email}</p>
                                </div>
                            </div>
                            <div className='flex w-sm justify-between'>
                                <p>{new Date(user.createdAt).toDateString()}</p>
                                {user.isActive ? <p>Active</p> : <p>Inactive</p>}
                            </div>
                            <div className='flex gap-2'>
                                <p>Export</p>
                                <button value={user.id} onClick={deleteUser} >Delete</button>
                                <button value={user.id} onClick={getSingleUserDetails}>View</button>
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }

    const getSingleUserDetails = async(e: { target: { value: any } }) => {
        await axios.get(`http://localhost:3000/user/${e.target.value}`)
        .then((response) => {
            console.log(response.data)
        })
    }


    const deleteUser = async(e: { target: { value: any } }) => {
        console.log(e.target.value)
        await axios.delete(`http://localhost:3000/user/${e.target.value}`)
        .then((response) => {
            console.log(response.data)
        })
        .finally(() => {
            getUsers();
        })
    }

    const getUsers = async () => {
        await axios.get('http://localhost:3000/user/')
            .then((response) => {
                setUsers(response.data)
            })
    };

    useEffect(()=> {
        sortBy === 'asc' ?   users.sort((a,b):number => Date.parse(a.createdAt) - Date.parse(b.createdAt)) : users.sort((b,a):number => Date.parse(a.createdAt) - Date.parse(b.createdAt));
    }, [users, sortBy])


    useEffect(() => {
        getUsers();
    }, [])

    const usersPerPage = 10;
    const [userOffset, setuserOffset] = useState(0);
    const endOffset = userOffset + usersPerPage;
    const currentusers = users.slice(userOffset, endOffset);
    const pageCount = Math.ceil(users.length / usersPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event: { selected: number }) => {
        const newOffset = (event.selected * usersPerPage) % users.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setuserOffset(newOffset);
    };

    return (
        <>
            <UserCards currentusers={currentusers} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next ->"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="<- previous"
                renderOnZeroPageCount={null}
                marginPagesDisplayed={3} // Number of page numbers to display at the start and end               
                containerClassName="flex space-x-2 justify-between text-center" // Tailwind class to create a flex container with spacing between items
                activeClassName="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                disabledClassName="text-gray-400 cursor-not-allowed"
                pageClassName="flex items-center justify-between text-center py-2 px-4 cursor-pointer"
            />
        </>
    )

}


export default PaginatedUserCards;