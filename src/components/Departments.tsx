import { useState } from "react";
import { departments, totalEmployees } from "../data/employeeUtils";

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
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2>this is the departments!</h2>
      <button
        onClick={() => {
          setExpanded((expanded) => !expanded);
        }}
      >
        {expanded ? "hide small departments" : "show all departments"}
      </button>
      <ul className="department--list">
        {departments.map((department, i) => {
          const employeeSharePercentage =
            (department.numberOfEmployees / totalEmployees) * 100;

          if (employeeSharePercentage < 2 && !expanded) {
            return null;
          }

          const style = {
            borderColor: getDepartmentColor(i),
            width: `${employeeSharePercentage}%`,
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
