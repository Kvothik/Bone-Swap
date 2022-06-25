import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import Chats from "../chats/Chats";
import AccountManagement from "../account-management/AccountManagement";
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';

import { getTest, createTest, getMerlin } from './functions/test';

const queryClient = new QueryClient();

function Feed() {
  const [dogImg, setDogImg] = useState(null);
  const [data, setData] = useState("Before fetch test");
  const [chatIsShown, setChatIsShown] = useState(false);
  const [accountManagementIsShown, setAccountManagementIsShown] = useState(false);

  const showChat = event => {
    // 👇️ toggle shown state
    setChatIsShown(current => !current);
  };
  const showAccountManagement = event => {
    // 👇️ toggle shown state
    setAccountManagementIsShown(current => !current);
  };

  // Will fail because it was already ran and the test object already exists in db
  // createTest(testObj);
  //test GET from db
  const seeMerlinTest = () => {
    setDogImg("");
    getMerlin().then((data) => {
      setDogImg(data[0].imageUrl)
    })
  };

  useEffect(() => {
    getTest().then((res) => {
      setData(res.message);
    }).catch(err => console.log(err))
  }, []);

  const fetchDoggo = () => {
    setDogImg("");
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    if (dogImg === null) {
      fetchDoggo();
    }
  });

  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      {!chatIsShown && !accountManagementIsShown && (
        // we will GET array of posts from DB to loop and render here like this
        //  {postsArray.map(elementInArray => (  
        //   <li>  
        //     {elementInArray.content}  
        //   </li>  
        // ))}  
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
          <div className="Post-image">

            <div className="Post-image-bg">

              <img src={dogImg} width="400px" alt="doggo" />

            </div>

          </div>

          <div className="Post-caption">

            <strong>Hanging in the park </strong> 
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

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
      {/* <ReactQueryDevtools /> */}
      {/* </QueryClientProvider> */}
    </>
  );
}

export default Feed;