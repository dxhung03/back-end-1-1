const employees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

const project = {};
  employees.forEach(employee => {
      employee.projects.forEach(projectId => {
          if (!project[projectId]) {
            project[projectId] = [];
          }
          project[projectId].push(employee.name);
      });
  });

console.log(project);


const max = employees.reduce((acc, employee) => {
  if (!acc[employee.projects.length]) {
    acc[employee.projects.length] = [];
  }
  acc[employee.projects.length].push(employee.name);
  return acc;
});

console.log(max);

const projectGroups = {};

employees.forEach(employee => {
    employee.projects.forEach(project => {
        if (!projectGroups[project]) {
            projectGroups[project] = [];
        }
        projectGroups[project].push(employee.name);
    });
});

console.log(projectGroups);


