import { useState } from "react";
import { departments } from "../data/employeeUtils";
import DepartmentListItem from "./DepartmentListItem";

const Departments = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h2>Departments</h2>
      <button
        onClick={() => {
          setExpanded((expanded) => !expanded);
        }}
      >
        {expanded ? "hide small departments" : "show more departments"}
      </button>
      <ul className="department--list">
        {departments.map((department, i) => (
          <DepartmentListItem
            key={department.name}
            position={i}
            department={department}
            expanded={expanded}
          />
        ))}
      </ul>
    </div>
  );
};

export default Departments;
