-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
    SELECT productname, c.CategoryName FROM product AS p 
    JOIN category AS c 
    ON p.CategoryId = c.Id; 
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
    SELECT o.id, shipper.CompanyName FROM 'order' AS o 
    join shipper 
    ON o.ShipVia = shipper.Id 
    WHERE orderdate < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
    SELECT p.productname, od.quantity FROM product AS p 
    JOIN orderdetail AS od 
    ON od.productid = p.Id 
    WHERE od.orderid = '10251';
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
    SELECT o.id AS 'Order ID', c.companyname AS 'Company Name', e.lastname AS 'Employee last name' FROM 'order' AS o 
    JOIN customer AS c 
    ON o.customerid = c.Id 
    JOIN employee AS e 
    ON o.employeeid = e.id;
