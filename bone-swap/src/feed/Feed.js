import React, { useState, useEffect } from "react";
import "./App.css";
import Chats from "../chats/App";
import AccountManagement from "../account-management/AccountManagement";
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';import PersonIcon from '@mui/icons-material/Person';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllPosts } from './functions/postFunctions';


function Feed() {
  const [chatIsShown, setChatIsShown] = useState(false);
  const [accountManagementIsShown, setAccountManagementIsShown] = useState(false);
  const [feedIsShown, setFeedIsShown] = useState(true);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllPosts().then((res) => {
      setIsLoading(true);
      setPosts(res);
      setIsLoading(false);
    }).catch(err => console.log(err))
  }, []);

  const showChat = event => {
    setChatIsShown(true);
    setFeedIsShown(false);
    setAccountManagementIsShown(false);
  };
  const showAccountManagement = event => {
    setAccountManagementIsShown(true);
    setChatIsShown(false);
    setFeedIsShown(false);
  };
  const showFeed = event => {
    setFeedIsShown(true);
    setAccountManagementIsShown(false);
    setChatIsShown(false);
  };

  function Post(post) {
    return (
      <div>
        <header>
          {/* This will come from user once they are made in DB */}
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
            <img src={post.post.ImageURL} width="400px" alt="doggo" />
          </div>
        </div>
        <div className="Post-caption">
          <strong>{post.post.PostTitle} </strong>
          <p>{post.post.TextBody}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {posts.map((post, index) => (
            <>
              {feedIsShown && (
                <>
                  <Post key={index} post={post} />
                  <IconButton onClick={showChat} aria-label="chat">
                    <ChatIcon />
                  </IconButton>
                  <IconButton onClick={showAccountManagement} aria-label="chat">
                    <PersonIcon />
                  </IconButton>
                </>
              )}
            </>
          ))}
          {chatIsShown && (<Chats />)}
          {accountManagementIsShown && (<AccountManagement />)}
          <IconButton onClick={showFeed} aria-label="feed">
            <ArrowBackIcon/>
          </IconButton>
        </div>
      )}
    </>
  );
}

export default Feed;