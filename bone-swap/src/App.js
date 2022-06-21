import logo from './logo.svg';
import './App.css';
import Chats from "./chats/App"
import AccountManagement from "./account-management/AccountManagement";
import Feed from "./feed/Feed";

function App() {
  return (
    <div className="App">
     <div className="feed">
        <Feed/>
      </div>
     <div className="chats">
        <Chats/>
      </div>
      <div className="accountManagement">
        <AccountManagement/>
      </div>
    </div>
  );
}

export default App;
