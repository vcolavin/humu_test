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

type DepartmentsRecords = { [key: string]: Department };

// getDepartmentRecords does a depth-first traversal of the employee tree
// to generate an object mapping department names to their data
// it uses an object rather than a list
// because it's easier for reduce to return an object
// it's not very optimized, but only happens once per page load.
const getDepartmentRecords = (
  employees: Employee[],
  departmentsObject: DepartmentsRecords = {}
): DepartmentsRecords => {
  return employees.reduce(
    (accumulator, { department, firstName, lastName, reports }) => {
      // copying the accumulator so that we can mutate it
      // without worrying about mutating the original argument
      // this has a computational cost but gives us some safety
      const accumulatorCopy = { ...accumulator };

      // if the department has not yet been encountered,
      // create the initial record
      if (!accumulatorCopy[department]) {
        // assume the first employe encountered in that department
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
  // this intermediate data structure is easier to generate,
  // and then we convert it to a list, which is more useful for the UI
  const departmentRecords = getDepartmentRecords(employees);

  // now convert the object to an array
  // ordered by how many employees they have
  return Object.values(departmentRecords).sort(
    (a, b) => b.numberOfEmployees - a.numberOfEmployees
  );
};

const departments = getOrderedListOfDepartments(employees);

export { departments };
