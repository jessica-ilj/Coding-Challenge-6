//Create an Employees Array of Employee Objects
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    
     { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] }, //array named employees that contains at least 4 employee objects.
    
   { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    
     { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
    
   ];

   //Function to Display Employee Shift Details
   function displayEmployeeShifts(employee) {   //accepts an employee object and logs the employee’s name and their assigned shifts (day and hours worked)
    console.log(`Employee: ${employee.name}`);
    employee.shifts.forEach((shift) => {
      console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
  }

  //usage example
  displayEmployeeShifts(employees[0]); //for john. checking to see if the function works.

  //Function to Assign a New Shift
