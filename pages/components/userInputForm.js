import { useState } from "react";
import UserTextInput from "./userInput";

const UserInputForm = () => {
  const [nameAndRole, setnameAndRole] = useState("");
  const [companyName, setcCmpanyName] = useState("");
  const [mission, setMission] = useState("");
  const [candidateSummary, setCandidateSummary] = useState("");
  const onUserChangedText = (event, setFunction) => {
    setFunction(event.target.value);
  };
  return (
    <>
      <UserTextInput
        textInput={nameAndRole}
        onUserChangedText={(event) => onUserChangedText(event, setnameAndRole)}
        placeholder="Your Name and role"
      />
      <UserTextInput
        textInput={companyName}
        onUserChangedText={(event) => onUserChangedText(event, setcCmpanyName)}
        placeholder="Your company name"
      />
      <UserTextInput
        textInput={mission}
        onUserChangedText={(event) => onUserChangedText(event, setMission)}
        placeholder="Your company mission"
      />
      <UserTextInput
        textInput={candidateSummary}
        onUserChangedText={(event) =>
          onUserChangedText(event, setCandidateSummary)
        }
        placeholder="Candidate Summary"
      />
    </>
  );
};

export default UserInputForm;
