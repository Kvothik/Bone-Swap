import React, { useState, useEffect } from "react";
import './App.css';
import { createUsers, getUsers,  getCurrentUser, updateUsersByID,  } from './functions/usersFunctions';


//Lines 6-17 are no longer needed once the database is populated.
// Creates an object that will be used to populate the DB
// const usersObj = {
//   _id: 1,
//   Email: "testemail1",
//   Username: "tester1",
//   ProfilePicture: "imageurl1",
//   Password: "pass1",
//   SecurityEnablement: true
// }
// Implements the creatUsers() method and passes the object above
// createUsers(usersObj);


// core function of account mangement
function AccountManagement() {
  // variable and function that sets variables
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // pulls the data from the DB using effect
  useEffect(() => {
    // sets the variable isLoading to true meaning the page is still loading
    // checks to see if userData is null. If it is it fetches the users from DB
    if (userData === null) {
    getCurrentUser().then((data) => {
        setIsLoading(true);
        if (data.SecurityEnablement == false) {
          data.SecurityEnablement = "MFA not enabled."
        } else {
          data.SecurityEnablement = "MFA is enabled."
        }
        console.log(data);
        setUserData(data);
        setIsLoading(false);
      });
      // sets isLoading to false which exits the loop
      
    } 
  }, [setUserData]);


  function somefun() {
  console.log(document.getElementById("userForm").value);
  return document.getElementById("userForm").value;
  } 
  

  // creates table
  return (
    <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Account Management</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Username: </td>
                <td>{userData.Username}</td>
                <td><form id="userForm"><input type="text"/></form></td>
              </tr>
              <tr>
                <td>Email: </td>
                <td>{userData.Email}</td>
                <td width="33%"><form id="emailForm"><input type="text"/></form></td>
              </tr>
              <tr>
                <td>Password: </td>
                <td>{userData.Password}</td>
                <td><form id="passForm"><input type="text"/></form></td>
              </tr>
              <tr>
                <td>MFA: </td>
                <td>{userData.SecurityEnablement}</td>
                <td width="33%"><form id="mfaForm"><input type="checkbox"/></form></td>
              </tr>
              <tr>
                <td><button onClick={() => somefun()}>Save</button></td>
              </tr>
            </tbody>
          </table>
        )}
    </div>
  );
}

export default AccountManagement;