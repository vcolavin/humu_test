import Departments from "./Departments";
import Header from "./Header";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <div className="header--wrapper">
        <Header />
      </div>
      <div className="content--wrapper">
        <Departments />
      </div>
    </div>
  );
};

export default Wrapper;
