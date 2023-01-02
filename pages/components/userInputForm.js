import { useState } from "react";
import UserTextInput from "./userInput";

const UserInputForm = () => {
  const [apiOutput, setApiOutput] = useState("");
  const [nameAndRole, setnameAndRole] = useState("");
  const [companyName, setcCmpanyName] = useState("");
  const [mission, setMission] = useState("");
  const [jobSummary, setJobSummary] = useState("");
  const [candidateSummary, setCandidateSummary] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log("Calling OpenAI...");

    const response = await fetch("../api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nameAndRole,
        companyName,
        mission,
        jobSummary,
        candidateSummary,
      }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event, setFunction) => {
    setFunction(event.target.value);
  };

  return (
    <>
      <div className="prompt-container">
        <UserTextInput
          textInput={nameAndRole}
          onUserChangedText={(event) =>
            onUserChangedText(event, setnameAndRole)
          }
          placeholder="Your Name and role"
          title="Name"
          small={true}
        />
        <UserTextInput
          textInput={companyName}
          onUserChangedText={(event) =>
            onUserChangedText(event, setcCmpanyName)
          }
          placeholder="Your company name"
          title="Company"
          small={true}
        />
        <UserTextInput
          textInput={mission}
          onUserChangedText={(event) => onUserChangedText(event, setMission)}
          placeholder="Your company mission"
          title="Mission"
          small={true}
        />
        <UserTextInput
          textInput={jobSummary}
          onUserChangedText={(event) => onUserChangedText(event, setJobSummary)}
          placeholder="Job Summary"
          title="Job"
        />
        <UserTextInput
          textInput={candidateSummary}
          onUserChangedText={(event) =>
            onUserChangedText(event, setCandidateSummary)
          }
          placeholder="Candidate Summary"
          title="Candidate CV (Just type bullets)"
        />
        <div className="prompt-buttons">
          <a
            className={
              isGenerating ? "generate-button loading" : "generate-button"
            }
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
              {isGenerating ? (
                <span className="loader"></span>
              ) : (
                <p>Generate</p>
              )}
            </div>
          </a>
        </div>
      </div>

      {apiOutput && (
        <div className="output">
          <div className="output-header-container">
            <div className="output-header">
              <h3>Your cold outreach message</h3>
            </div>
          </div>
          <div className="output-content">
            <p>{apiOutput}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default UserInputForm;
