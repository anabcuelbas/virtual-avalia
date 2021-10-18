import logo from "../../logo.svg";
import "../../App.css";
import { useHistory } from "react-router-dom";

export const HomeScreen = () => {

  const history = useHistory();

  const handleAdminLogin = () => {
    history.push("/admin-login");
  };

  const handleStudentLogin = () => {
    history.push("/student-login");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Virtual Avalia</p>
        <button onClick={handleAdminLogin}>Login Admin</button>
        <button onClick={handleStudentLogin}>Login Student</button>
      </header>
    </div>
  );
};