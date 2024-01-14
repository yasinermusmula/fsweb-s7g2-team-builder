import { useState } from "react";
import dummyData from "./SahteVeri";
import "./App.css";
import Form from "./components/Form";
import MemberList from "./components/MemberList"

function App() {
  const [members, setMembers] = useState(dummyData);

  const addMember = (member) => {
    member.id = new Date();
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      <MemberList list={members} />
      <Form addmember={addMember} />
    </div>
  );
}

export default App;
