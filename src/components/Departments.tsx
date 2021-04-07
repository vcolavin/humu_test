import { departments } from "../data/employeeUtils";
import DepartmentListItem from "./DepartmentListItem";

const Departments = () => {
  return (
    <>
      <h2 className="department--title">Departments</h2>
      <ul className="department--list">
        {departments.map((department, i) => (
          <DepartmentListItem
            key={department.name}
            position={i}
            department={department}
          />
        ))}
      </ul>
    </>
  );
};

export default Departments;
