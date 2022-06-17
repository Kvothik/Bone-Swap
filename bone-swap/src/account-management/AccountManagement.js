import React, { useState, useEffect } from "react";
import './App.css';
import { createUsers, getUsers, getCurrentUser, updateUserByID, } from './functions/usersFunctions';


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
  const [formData, updateFormData] = useState(userData);
  // pulls the data from the DB using effect
  useEffect(() => {
    // sets the variable isLoading to true meaning the page is still loading
    // checks to see if userData is null. If it is it fetches the users from DB
    if (userData === null) {
      getCurrentUser().then((data) => {
        setIsLoading(true);
        if (data.SecurityEnablement === false) {
          data.SecurityEnablement = "No"
        } else {
          data.SecurityEnablement = "Yes"
        }
        setUserData(data);
        setIsLoading(false);
      });
      // sets isLoading to false which exits the loop

    }
  }, [userData, setUserData]);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userData.Username = formData.Username;
    userData.Email = formData.Email;
    userData.Password = formData.Password;
    userData.ProfilePicture = formData.ProfilePicture;
    //userData.SecurityEnablement = formData.SecurityEnablement;

    updateUserByID(userData);
  };


  // creates table
  return (
    <div>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <form>
          <label>
            Profile Picture
            <input name="ProfilePicture" onChange={handleChange} />
          </label>
          <br />
          <label>
            Username
            <input name="Username" onChange={handleChange} />
          </label>
          <br />
          <label>
            Email
            <input name="Email" onChange={handleChange} />
          </label>
          <br />
          <label>
            Password
            <input name="Password" onChange={handleChange} />
          </label>
          <br />
          <label>
            MFA
            <input type="checkbox" name="SecurityEnablement" onChange={handleChange} />
          </label>
          <br />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
}

export default AccountManagement;