import React, { useState, useEffect } from "react";
import './App.css';

import { createUsers, getUser } from './functions/usersFunctions';
const usersObj = {
  ID : 1,
  Email : "testemail1", 
  Username : "tester1",
  ProfilePicture : "imageurl1",
  Password: "pass1",
  SecurityEnablement: true 
}

createUsers(usersObj);


function AccountManagement() {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (userData === null) {
      getUser().then((data) => {

        const currentSessionUser = ["test2", "pass"];
        const index = data.findIndex(object => {
         return object.Username === currentSessionUser[0];
        });

        let user = data[index];
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
