'use strict';
let dbConn = require('../../config/db.config');


//Employee object create
    class Employee {
        constructor(employee) {
            this.first_name = employee.first_name;
            this.last_name = employee.last_name;
            this.email = employee.email;
            this.phone = employee.phone;
            this.organization = employee.organization;
            this.designation = employee.designation;
            this.salary = employee.salary;
            this.status = employee.status ? employee.status : 1;
            this.created_at = new Date();
            this.updated_at = new Date();
        }

        // Create operation
        static create(newEmp, result) {
            dbConn.query("INSERT INTO employees set ?", newEmp, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else {
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });
        }
        
        // Method: GET      Descr: Find details by ID 
        static findById(id, result) {
            dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else {
                    result(null, res);
                }
            });
        }

        // Method: GET      Descr: Find All Details
        static findAll(result) {
            dbConn.query("Select * from employees", function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    console.log('employees : ', res);
                    result(null, res);
                }
            });
        }

        // Method: PUT      Descr: Edit details by ID
        static update(id, employee, result) {
            dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=? WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                } else {
                    result(null, res);
                }
            });
        }

        // Method: DELETE      Descr: Delete details by ID
        static delete(id, result) {
            dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    result(null, res);
                }
            });
    }
}

module.exports= Employee;