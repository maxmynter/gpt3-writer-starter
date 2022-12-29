const UserTextInput = ({ textInput, onUserChangedText, placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      className="prompt-box"
      value={textInput}
      onChange={onUserChangedText}
    />
  );
};

export default UserTextInput;
