import logo from './logo.svg';
import './App.css';

import { createUsers, getUser } from '../account-management/functions/usersFunctions';
const testObj = {
  'name': 'Merlin',
  'imageUrl': 'https://i.ibb.co/wykGdL5/20220329-174050.jpg'
}

const usersObj = {
  'ID': 1,
  'Username': 'Test',
  'ProfilePicture': 'pictureURL',
  'Password': '123456',
  'SecurityEnablement': false
}

createUsers(usersObj);


function AccountManagement() {
  return (
    <div className="App">
      <header className="App-header">
        {getUser.ID}
      </header>
    </div>
  );
}

export default AccountManagement;
