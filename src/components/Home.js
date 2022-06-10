import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Chat from "./Chat";
import styled from "styled-components";

function Home() {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
    </>
  );
}

export default Home;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
