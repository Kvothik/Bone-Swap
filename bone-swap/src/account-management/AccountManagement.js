import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import { createUsers, getUser } from '../account-management/functions/usersFunctions';

const usersObj = {
  'ID': 2,
  'Username': 'Test2',
  'ProfilePicture': 'pictureURL',
  'Password': '123456',
  'SecurityEnablement': false
}

createUsers(usersObj);

function AccountManagement() {
  const [user, setUser] = useState(null);
   
  const seeUser = () => {
    setUser("");
    getUser().then((data) => {
      setUser(data[0].user);
    })
  };

  console.log(user);


  return (
    <div>
      <header>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th> Management</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Username: </td>
              {/* <td>{userData.Username}</td> */}
            </tr>
            <tr>
              <td>Email: </td>
              {/* <td>{userData.Email}</td> */}
            </tr>
            <tr>
              <td>Password: </td>
              {/* <td>{userData.Password}</td> */}
            </tr>
            <tr>
              <td>MFA: </td>
              {/* <td>{userData.SecurityEnablement}</td> */}
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default AccountManagement;
