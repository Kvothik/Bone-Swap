import React, { useState, useEffect } from "react";
import './App.css';
import { createUsers, getUsers, getUserByID, updateUsersByID } from './functions/usersFunctions';

// Creates an object that will be used to populate the DB
const usersObj = {
  _id : 1,
  Email : "testemail1", 
  Username : "tester1",
  ProfilePicture : "imageurl1",
  Password: "pass1",
  SecurityEnablement: true 
}

// Implements the creatUsers() method and passes the object above
createUsers(usersObj);
// core function of account mangement



function AccountManagement() {
  // variable and function that sets variables
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // pulls the data from the DB using effect
  useEffect(() => {
    // sets the variable isLoading to true meaning the page is still laoding
    setIsLoading(true);
    // checks to see if userData is null. If it is it fetches the users from DB
    if (userData === null) {  
        setUserData(getUserByID());
        // sets isLoading to false which exits the loop
      } setIsLoading(false);
    }, [setUserData]);
     
  // creates table
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
            {/* <button onClick={() => }>Edit</button> */}
          </table>
        )}

      </header>
    </div>
  );
}

export default AccountManagement;
