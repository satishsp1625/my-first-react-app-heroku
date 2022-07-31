import React from 'react'
import UserData from '../data/User.json'

function UserStatic() {
    const trData=UserData.map((responce)=>{
        return(
            <tr key={responce.id}>
                <td>
                {responce.id}
                </td>
                <td>
                {responce.emailId}
                </td>
            </tr>
        )
    })
  return (
    <div>
      <table>
        <thead>
            <th>
                ID
            </th>
            <th>
                EmailID
            </th>
        </thead>
        <tbody>
            {trData}
        </tbody>
      </table>
    </div>
  )
}

export default UserStatic
