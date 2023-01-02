import UserInputForm from "./components/userInputForm";

const Home = () => {
  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Hey, do you know ...?</h1>
          </div>
          <div className="header-subtitle">
            <h2>Easy and fast Linkedin Outreach Message Generator </h2>
          </div>
        </div>
        <UserInputForm />
      </div>
    </div>
  );
};

export default Home;
