# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.
    
    select productName as Name, c.categoryName as Category
    from products as p
    join categories as c on p.categoryID = c.categoryID

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    select orderId, s.shipperName, orderDate 
    from orders as o
    join shippers as s on o.shipperID = s.shipperID
    where orderDate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    select orderId, p.productName, quantity 
    from orderDetails as od
    join products as p on od.productId = p.productId 
    where orderID = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    select orderID, c.customerName, e.lastName 
    from orders as o
    join customers as c on o.CustomerID = c.customerID
    join employees as e on o.employeeID = e.employeeId

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

    select categoryName, count(p.categoryId) as [Count]
    from products as p
    left join categories as c on p.categoryId = c.categoryId
    group by c.categoryId

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

    select orderId, count(orderId) as ItemCount
    from orderDetails
    group by orderId