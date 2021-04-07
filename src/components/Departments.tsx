import { departments } from "../data/employeeUtils";

const departmentColors = [
  "#bd10e0",
  "#4a90e2",
  "#50e3c2",
  "#b8e986",
  "#7ed321",
  "#417505",
  "#f8e71c",
  "#f5a623",
  "#9b9b9b",
];

const getDepartmentColor = (index: number) =>
  departmentColors[index % departmentColors.length];

const Departments = () => {
  return (
    <div>
      <h2>this is the departments!</h2>
      <ul className="department--list">
        {departments.map((department, i, { length }) => {
          const style = {
            borderColor: getDepartmentColor(i),
            width: `${100 / length}%`,
          };

          return (
            <li
              key={department.name}
              className="department--list-item"
              style={style}
            >
              <p>name: {department.name}</p>
              <p>number of employees: {department.numberOfEmployees}</p>
              <p>lead: {department.lead}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Departments;
