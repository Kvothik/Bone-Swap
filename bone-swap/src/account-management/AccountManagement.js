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
// console.log(getUser());

function AccountManagement() {
  return (
    <div className="App">
      <header className="App-header">
        <table>
          <thead>
            <tr>
              <th class="tg-j5n6">Account</th>
              <th class="tg-j5n6"> Management</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-j5n6">Username: </td>
              <td class="tg-f38k"></td>
            </tr>
            <tr>
              <td class="tg-j5n6">Email: </td>
              <td class="tg-0o1a"></td>
            </tr>
            <tr>
              <td class="tg-j5n6">Password: </td>
              <td class="tg-0o1a"></td>
            </tr>
            <tr>
              <td class="tg-j5n6">MFA: </td>
              <td class="tg-0o1a"></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default AccountManagement;
