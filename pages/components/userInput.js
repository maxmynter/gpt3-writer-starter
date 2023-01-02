const UserTextInput = ({
  textInput,
  onUserChangedText,
  placeholder,
  title,
  small,
}) => {
  return (
    <>
      <p className="prompt-box-title">{title}</p>
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
