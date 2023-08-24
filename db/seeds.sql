-- Seeds for a basic employee database

-- Create Departments
INSERT INTO department (id, dept_name)
VALUES (01, 'Customer Service'),
       (02, 'Barista'),
       (03, 'Management'),
       (04, 'Kitchen'),
       (05, 'Order Fulfillment');

INSERT INTO role (id, title, salary, department_id)
VALUES (01, 'Customer Service Representative', 20000, 01),
       (02, 'Barista', 30000, 02),
       (03, 'Shift Supervisor', 40000, 03),
       (04, 'Kitchen Staff', 25000, 04),
       (05, 'Order Fulfillment', 30000, 05);

INSERT INTO employee (id, first_name, last_name, job_id, department, manager_id)
VALUES (01, 'John', 'Doe', 01, 'Customer Service', 03),
       (02, 'Jane', 'Doe', 02, 'Barista', 03),
       (03, 'Jim', 'Doe', 03, 'Shift Supervisor', 01),
       (04, 'Jill', 'Doe', 04, 'Kitchen Staff', 03),
       (05, 'Jack', 'Doe', 05, 'Order Fulfillment', 03);