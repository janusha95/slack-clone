import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { db } from "../firebase";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  console.log(channelId);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(channelId);
    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Janusha Sridhar",
      userImage:
        "https://media-exp2.licdn.com/dms/image/C5603AQEdNgqTSiiMpA/profile-displayphoto-shrink_800_800/0/1600912976144?e=1660176000&v=beta&t=2l5_F7T2Dy8J2FXjNUZ-XVrbYchHzA3ESkJuEalwUcQ",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #ROOM`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }
  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
