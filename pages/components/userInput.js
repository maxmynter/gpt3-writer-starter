const UserTextInput = ({
  textInput,
  onUserChangedText,
  placeholder,
  title,
  small,
  instructions,
}) => {
  return (
    <>
      <p className="prompt-box-title">{title}</p>
      {instructions ? (
        <p className="inputInstructions"> {instructions}</p>
      ) : null}
      <textarea
        placeholder={placeholder}
        className={small ? "prompt-box-small" : "prompt-box"}
        value={textInput}
        onChange={onUserChangedText}
      />
    </>
  );
};

export default UserTextInput;
