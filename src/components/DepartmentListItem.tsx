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
}

const DepartmentListItem = ({
  department,
  position,
}: DepartmentListItemProps) => {
  const employeeSharePercentage =
    (department.numberOfEmployees / totalEmployees) * 100;

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
        {department.numberOfEmployees}{" "}
        {department.numberOfEmployees === 1 ? "employee" : "employees"}
      </p>
    </li>
  );
};

export default DepartmentListItem;
