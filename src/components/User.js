import React, { useEffect, useState } from 'react'

function User() {
    const [users, setUsers] = useState([])

    const URL = "https://reqres.in/api/users";

    useEffect(() => {
        fetch(URL).then((resp => resp.json())).then(data => {
            setUsers(data.data)
            console.log(data.data)
        })
    }, [])

    const dataUsers = users.map(res => {
        return (
            <tr key={res.id}>
                <td>{res.id}</td>
                <td>{res.email}</td>
            
            </tr>)
    })

    return (
        <>
            <h1>All User Info</h1>
            <hr />
            <table className='table'>
                <thead>
                    <th>Id</th>
                    <th>EmailId</th>
                </thead>
                <tbody>
                    {dataUsers}
                </tbody>
            </table>
        </>
    )
}

export default User
