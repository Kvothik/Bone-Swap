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
  const [userData, setUserData] = useState(null);
  // console.log(getUser());

  const seeUserData = () => {
    setUserData("");
    getUser().then((userData) => {
      setUserData(userData[0]);
    })
  };
  
  useEffect(() => {
    seeUserData();
  }, []);

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
              <td>{userData.Username}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{userData.Email}</td>
            </tr>
            <tr>
              <td>Password: </td>
              <td>{userData.Password}</td>
            </tr>
            <tr>
              <td>MFA: </td>
              <td>{userData.SecurityEnablement}</td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default AccountManagement;
