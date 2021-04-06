import { departments } from "../data/employeeUtils";

const Departments = () => {
  return (
    <div>
      <h2>this is the departments!</h2>
      <ul>
        {departments.map((department) => {
          return (
            <li>
              <p>name: {department.name}</p>
              <p>number of employees: {department.numberOfEmployees}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Departments;
