import { Department, totalEmployees } from "../data/employeeUtils";

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

// utility to ensure department indices greater than the number of colors
// wrap around the list
const getDepartmentColor = (index: number) =>
  departmentColors[index % departmentColors.length];

interface DepartmentListItemProps {
  department: Department;
  position: number;
  expanded: boolean;
}

const DepartmentListItem = ({
  department,
  position,
  expanded,
}: DepartmentListItemProps) => {
  const employeeSharePercentage =
    (department.numberOfEmployees / totalEmployees) * 100;

  // heuristic to hide departments that would usually be practically invisible
  // if the user has selected the "show more button", then we'll show slightly more
  if (
    (employeeSharePercentage < 2 && !expanded) ||
    employeeSharePercentage < 0.75
  ) {
    return null;
  }

  const topOffset = 20 + 60 * position;

  const style = {
    borderColor: getDepartmentColor(position),
    width: `${employeeSharePercentage}%`,
    paddingTop: `${topOffset}px`,
  };

  return (
    <li key={department.name} className="department--list-item" style={style}>
      <h3 className="department--list-item--text">{department.name}</h3>
      <p className="department--list-item--text">{department.lead}</p>
      <p className="department--list-item--text">
        {department.numberOfEmployees} employees
      </p>
    </li>
  );
};

export default DepartmentListItem;
