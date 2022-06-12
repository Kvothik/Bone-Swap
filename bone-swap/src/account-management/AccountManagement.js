import logo from './logo.svg';
import './App.css';

import { addUsers, getUser } from '../account-management/functions/usersFunctions';
const testObj = {
  'name': 'Merlin',
  'imageUrl': 'https://i.ibb.co/wykGdL5/20220329-174050.jpg'
}

const usersObj = {
  'ID': 2,
  'Username': 'Test2',
  'ProfilePicture': 'pictureURL2',
  'Password': '123456',
  'SecurityEnablement': false
}

addUsers(usersObj);

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
