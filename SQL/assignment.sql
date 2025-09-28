create database company_db;

use greens;

create table skills (skill_id int identity(1,1) primary key, skill_name varchar(30) not null, category varchar(30));

select name from sys.databases;

select name from sys.tables;

create table employee (eid int identity(1,1) primary key, ename varchar(30) not null, dept_id int, email varchar(50), hire_date date, salary float, gender varchar(30));

exec sp_rename 'employee' , 'staff';

select * from employee;

select * from project;

select * from department;

exec sp_rename 'staff' , 'employee';

drop table employee;

insert into employee (ename, dept_id, email, hire_date, salary, gender) values ('Alice green', 2 ,'alce.green@company.com', '2024-01-01', 62000.00, 'Female');

create table department (dept_id int primary key identity(1,1), dept_name varchar(50), dlocation varchar(50))

create table project (pid int primary key identity(1,1), pname varchar(50) not null, budget float, dept_id int)

insert into project (pname, budget, dept_id) values ('Mobile App', 60000.00, 2),('Trainning program', 25000.00, 1);

insert into department (dept_name, dlocation) values ('Sales', 'Boston');

exec sp_rename 'employee.ename', 'lastname';

alter table employee add lastname varchar(30);

update employee set lastname = 'green' where eid = 1;

alter table employee drop column lastname;

insert into employee (firstname, email) values ('Tom' , 'tom@company.com');

--Data Retrieval

select eid as 'Employee ID', firstname as 'Employee First Name', email as 'Email Address' from employee;

select * from employee where hire_date > '2023-01-01';

select * from project where budget > 40000.00 order by budget desc;

select distinct dlocation from department;

-- DATA MODIFICATION

alter table employee add phno varchar(15);

insert into employee (dept_id, email, hire_date, salary, gender, firstname, lastname, phno) values (2, 'jhondoe123@gmail.com', '12-09-2023', 50000.00, 'Male', 'Jhon', 'Doe', '7586984657');

update employee set salary = 60000.00 where firstname = 'Jhon' and lastname = 'Doe';

alter table employee drop column phno;

--Filtering and Conditions

select * from employee where salary between 60000.00 and 80000.00;

select * from employee where firstname like 'j%';

insert into project (pname, budget, dept_id) values ('Project Alpha', 150000.50, 1), ('Project Beta', 250000.00, 2), ('Project Gamma', 75000.75, 3), ('Website Redesign', 45000.00, 1), ('Mobile App Development', 300000.25, 4), ('Data Migration', 88000.00, 2), ('Cloud Infrastructure Setup', 500000.00, 5), ('Security Audit', 30000.50, 3), ('Marketing Campaign 2024', 120000.00, 1), ('Customer Feedback System', 65000.00, 4), ('Warehouse Automation', 450000.00, 2), ('New Product Launch', 225000.00, 5), ('Employee Training Program', 15000.00, 3), ('Social Media Strategy', 22000.75, 1), ('CRM System Integration', 180000.00, 4), ('Supply Chain Optimization', 95000.00, 2), ('Q3 Financial Reporting', 10000.00, 5), ('Internal HR Portal', 55000.50, 3), ('Sales Performance Analysis', 18000.00, 1), ('Research & Development', 750000.00, 4), ('Network Upgrade', 21000.00, 2), ('Brand Identity Revamp', 85000.00, 5), ('Online Payment Gateway', 62000.50, 3), ('AI Chatbot Implementation', 135000.00, 1), ('Customer Support Tool', 48000.00, 4), ('Cybersecurity Enhancement', 25000.00, 2), ('Quarterly Business Review', 11000.00, 5), ('Market Research Study', 29000.00, 3), ('Legal Compliance System', 70000.00, 1), ('Remote Work Platform', 98000.00, 4);

select * from project where dept_id = 1 or dept_id = 2 order by dept_id desc;

truncate table employee;

insert into employee (dept_id, email, hire_date, salary, gender, firstname, lastname) values (1, 'janedoe@example.com', '2022-05-15', 60000.00, 'Female', 'Jane', 'Doe'), (2, NULL, '2023-01-20', 75000.00, 'Male', 'Robert', 'Smith'), (3, 'emilyjones@example.com', NULL, 55000.00, 'Female', 'Emily', 'Jones'), (1, 'michaelbrown@example.com', '2024-03-01', 80000.00, 'Male', 'Michael', 'Brown'), (4, 'sarahdavis@example.com', '2020-08-25', NULL, 'Female', 'Sarah', 'Davis'), (2, 'davidgarcia@example.com', '2022-09-18', 70000.00, 'Male', 'David', 'Garcia'), (3, NULL, '2023-06-30', 62000.00, 'Female', 'Jennifer', 'Rodriguez'), (5, 'matthewmartinez@example.com', '2021-04-05', 100000.00, 'Male', 'Matthew', 'Martinez'), (1, 'lindalopez@example.com', NULL, 68000.00, 'Female', 'Linda', 'Lopez'), (4, 'christopherhernandez@example.com', '2022-02-28', 95000.00, 'Male', 'Christopher', 'Hernandez'), (2, 'amydiaz@example.com', '2023-10-01', 58000.00, 'Female', 'Amy', 'Diaz'), (3, 'danielmoore@example.com', '2021-07-22', 72000.00, 'Male', 'Daniel', 'Moore'), (5, 'susanjackson@example.com', '2024-04-19', 110000.00, 'Female', 'Susan', 'Jackson'), (1, 'kevinstone@example.com', '2020-03-10', NULL, 'Male', 'Kevin', 'Stone'), (4, 'nicolewhite@example.com', '2023-08-05', 65000.00, 'Female', 'Nicole', 'White'), (2, NULL, '2021-12-14', 78000.00, 'Male', 'Brian', 'Thomas'), (3, 'patriciamiller@example.com', '2024-02-20', 59000.00, 'Female', 'Patricia', 'Miller'), (5, 'markwilson@example.com', '2022-06-08', 120000.00, 'Male', 'Mark', 'Wilson'), (1, 'jenniferanderson@example.com', '2023-04-11', 73000.00, 'Female', 'Jennifer', 'Anderson'), (4, 'stevenjones@example.com', '2020-09-01', 92000.00, 'Male', 'Steven', 'Jones'), (2, 'elizabethperez@example.com', NULL, 61000.00, 'Female', 'Elizabeth', 'Perez'), (3, 'richardtaylor@example.com', '2021-01-25', 68000.00, 'Male', 'Richard', 'Taylor'), (5, NULL, '2023-11-20', 105000.00, 'Female', 'Lisa', 'King'), (1, 'jeffreewalker@example.com', '2022-07-07', NULL, 'Male', 'Jeffrey', 'Walker'), (4, 'margaretdavis@example.com', '2024-01-01', 88000.00, 'Female', 'Margaret', 'Davis'), (2, 'johnsonlee@example.com', '2021-05-18', 81000.00, 'Male', 'Johnson', 'Lee'), (3, 'donnasullivan@example.com', '2023-09-29', 63000.00, 'Female', 'Donna', 'Sullivan'), (5, 'paulscott@example.com', '2022-03-05', 115000.00, 'Male', 'Paul', 'Scott'), (1, NULL, '2020-10-10', 79000.00, 'Female', 'Sharon', 'Mitchell'), (4, 'georgeturner@example.com', NULL, 96000.00, 'Male', 'George', 'Turner');

select * from employee where email is not null;

insert into department (dept_name, dlocation) values ('Sales', 'New York'), ('Marketing', 'Chicago'), ('IT', 'Boston'), ('Human Resources', 'Chicago'), ('Finance', 'New York'), ('Operations', 'Dallas'), ('Research & Development', 'San Francisco'), ('Customer Support', 'Austin'), ('Legal', 'New York'), ('Product Management', 'Seattle'), ('Engineering', 'Chicago'), ('Quality Assurance', 'Boston'), ('Marketing', 'New York'), ('IT', 'Chicago'), ('Sales', 'Dallas'), ('Finance', NULL), ('Operations', 'Seattle'), ('Human Resources', 'New York'), ('Research & Development', 'Chicago'), ('Customer Support', 'Austin'), ('Legal', 'San Francisco'), ('Product Management', 'Boston'), ('Engineering', 'Chicago'), ('Quality Assurance', 'Dallas'), ('Sales', 'Seattle'), ('Finance', 'New York'), ('Operations', 'Chicago'), ('IT', 'Austin'), ('Marketing', NULL), ('Human Resources', 'Boston');

select * from department where dlocation not in ('New York', 'Chicago');

select * from employee where hire_date < '2024-01-01' and hire_date > '2022-12-31';

--AGGREGATE FUNCTIONS;

select sum(salary) as 'Total Salary' from employee;

select avg(budget) as 'Average budget' from project;

select max(salary) as 'Maximum Salary' from employee;

select count(*) as 'Employees in IT' from employee where dept_id = 2;

select min(budget) as 'Minimum budget' from project;

--JOINS

select e.firstname, d.dept_id, d.dept_name from employee e join department d on e.dept_id = d.dept_id;

select count(e.firstname) as 'Count', d.dept_name from employee e join department d on e.dept_id = d.dept_id group by dept_name;

select p.pname, d.dept_name from project p join department d on p.dept_id = d.dept_id;

select e.firstname, d.dlocation from employee e join department d on e.dept_id = d.dept_id where d.dlocation <> 'New York';

select * from project p join department d on p.dept_id = d.dept_id;

--string functions

select CONCAT(firstname, ' ',lastname) as 'Employee Name' from employee;

select UPPER(dept_name) from department;

select SUBSTRING(email,1,3) as 'First 3 Character' from employee where email is not null;

select abs(-50000) as 'Absolute value';

--Advanced Queries

select top 3 * from employee order by hire_date desc;

select
  *,
  case
    when salary >= 70000 then 'High'
    else 'Low'
  end as SalaryCategory
from employee;

select
  *,
  case
    when budget >= 60000 then 'Large'
    when budget >= 40000 then 'Medium'
    else 'Small'
  end as BudgetCategory
from project;

select d.dept_name, sum(p.budget) as 'Total budget' from department d join project p on p.dept_id = d.dept_id group by d.dept_name;

select top 1 * from employee order by len(firstname) desc;

select * from employee where hire_date between '2025-03-22' and DATEDIFF('2025-03-22', 90);

--Deletion and Cleanup

drop database company_db;

delete from employee where salary < 60000.00;

