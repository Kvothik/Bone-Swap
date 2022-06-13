import React, { useState, useEffect } from "react";
import './App.css';

import { createUsers, getUser } from './functions/usersFunctions';


// createUsers(usersObj);

function AccountManagement() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (userData === null) {
      getUser().then((data) => {
        let user = data[0];
        if (user.Email == null) {
          user.Email = "No email entered."
        }
        if (user.SecurityEnablement == false) {
          user.SecurityEnablement = "MFA not enabled."
        } else {
          user.SecurityEnablement = "MFA is enabled."
        }
        setUserData(user);
        setIsLoading(false);
      })
    }
  }, [setUserData]);

  return (
    <div>
      <header>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
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
        )}

      </header>
    </div>
  );
}

export default AccountManagement;
