import React from "react";
import UserInfo from "./components/UserInfo";
import Statistics from "./components/Statistics";
import Messages from "./components/Messages";

const App = () => {
  return (
    <div style={styles.container}>
      <UserInfo />
      <Statistics />
      <Messages />
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr", // 3 equal columns for the layout
    gap: "20px", // Spacing between cards
    padding: "20px",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
};

export default App;
