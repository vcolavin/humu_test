import employees from "./employees.json";

export interface Employee {
  employeeId: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
  officeLocation: string;
  department: string;
  managerEmployeeId: string | null;
  reports: Employee[];
}

export interface Department {
  numberOfEmployees: number;
  lead: string;
  name: string;
}

// DepartmentsRecords is an intermediate type.
// In general, React has the easiest time consuming lists
// e.g. `departments.map(dep => <li>dep.name</li>)`
// but because we're reducing lists of employees,
// it's much easier to use a map/dictionary object as the accumulator.
// So we start by generating the map,
// then convert it to a list before sending it to the components.
type DepartmentsRecords = { [key: string]: Department };

// getDepartmentRecords does a recursive, depth-first traversal of the employee tree
// to generate an object mapping department names to their data
// it could be faster, but only happens once per page load.
const getDepartmentRecords = (
  employees: Employee[],
  departmentsObject: DepartmentsRecords = {}
): DepartmentsRecords => {
  return employees.reduce(
    (accumulator, { department, firstName, lastName, reports }) => {
      // start by cloning the accumulator so that we can mutate it
      // without worrying about mutating the passed-in argument
      // this has a computational cost but gives us some safety
      const accumulatorCopy = { ...accumulator };

      // if the department has not yet been encountered,
      // create the initial record
      if (!accumulatorCopy[department]) {
        // assume the first employee encountered in a department
        // is the head of that department
        accumulatorCopy[department] = {
          numberOfEmployees: 1,
          lead: `${firstName} ${lastName}`,
          name: department,
        };
      } else {
        // otherwise we only need to increment the number of employees
        accumulatorCopy[department].numberOfEmployees += 1;
      }

      // if the employee has no reports,
      // then we are at a leaf node, and can return the current accumulator.
      // technically this isn't necessary for the code to work,
      // but is an easy optimization
      if (reports.length === 0) {
        return accumulatorCopy;
      }

      // else, recurse this function for each report and pass the accumulator
      // to continue down the tree and retrieve information
      return getDepartmentRecords(reports, accumulatorCopy);
    },
    departmentsObject
  );
};

const getOrderedListOfDepartments = (employees: Employee[]): Department[] => {
  // generate the department dictionary
  const departmentRecords = getDepartmentRecords(employees);

  // now retrieve a list of departments
  // and order it by number of employees
  return Object.values(departmentRecords).sort(
    (a, b) => b.numberOfEmployees - a.numberOfEmployees
  );
};

const departments = getOrderedListOfDepartments(employees);

export { departments };
