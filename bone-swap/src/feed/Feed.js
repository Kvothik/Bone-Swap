import React, { useState, useEffect } from "react";
import "./App.css";
import Chats from "../chats/App";
import AccountManagement from "../account-management/AccountManagement";
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllPosts } from './functions/postFunctions';


function Feed() {
  const [chatIsShown, setChatIsShown] = useState(false);
  const [accountManagementIsShown, setAccountManagementIsShown] = useState(false);
  const [posts, setPosts] = useState([]);

  const showChat = event => {
    setChatIsShown(current => !current);
  };
  const showAccountManagement = event => {
    setAccountManagementIsShown(current => !current);
  };

  useEffect(() => {
    getAllPosts().then((res) => {
      setPosts(res);
      console.log(res);
    }).catch(err => console.log(err))
  }, []);



  return (
    <>
      <div>
        {posts.map(ele => (
          <>
            {!chatIsShown && !accountManagementIsShown && (
              <div>
                <header>
                  <div className="Post-user">
                    <div className="Post-user-profilepicture">
                      <img src="https://t4.ftcdn.net/jpg/02/19/63/31/360_F_219633151_BW6TD8D1EA9OqZu4JgdmeJGg4JBaiAHj.jpg" alt="John D. Veloper" />
                    </div>
                    <div className="Post-user-nickname">
                      <span>John Doe</span>
                    </div>
                  </div>
                </header>
                <div className="">

                  <div className="Post-image-bg">
                    <img src={ele.ImageURL} width="400px" alt="doggo" />
                  </div>
                </div>
                <div className="Post-caption">
                  <strong>{ele.PostTitle} </strong>
                  <p>{ele.TextBody}</p>
                </div>
              </div>
            )}
            <div>
              {chatIsShown && (<Chats />)}
              {accountManagementIsShown && (<AccountManagement />)}
              <IconButton onClick={showChat} aria-label="chat">
                <ChatIcon />
              </IconButton>
              <IconButton onClick={showAccountManagement} aria-label="chat">
                <PersonIcon />
              </IconButton>
            </div>
          </>
        ))}
      </div>


    </>
  );
}

export default Feed;