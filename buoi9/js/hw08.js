class Employee {
  // Viết code ở đây
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getInfo() {
    console.log(`${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}`);
    // console.log(this);
    console.log("Quản lý nhân viên : ");
    this.employees.filter(employee => {
      // console.log(employee.programmingLanguage);
      console.log(`${employee.name}, Ngôn Ngữ : ${employee.programmingLanguage}`);
    });
  }
}
class Developer extends Employee {
  // Viết code ở đây
  constructor(name, age, salary, programmingLanguage) {
    super(name, age, salary);
    this.programmingLanguage = programmingLanguage;
  }
}

class Manager extends Employee {
  // Viết code ở đây
  constructor(name, age, salary) {
    super(name, age, salary);
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
}

const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");

const manager = new Manager("Alice", 35, 8000);
manager.addEmployee(dev1);
manager.addEmployee(dev2);

manager.getInfo();
