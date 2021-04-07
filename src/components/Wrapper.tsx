import Departments from "./Departments";
import Header from "./Header";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content--wrapper">
        <Departments />
      </div>
    </div>
  );
};

export default Wrapper;
