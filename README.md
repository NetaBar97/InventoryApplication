# InventoryApplication
The goal of our project is to create a comfortable GUI for inventory management of pets products shops.

* There are two user types - admin and user.
Login Page: <br><br>
<img src="https://user-images.githubusercontent.com/105801035/176411348-73b3e9d8-e8ca-43c4-97ba-83891bd540a0.png" width="400" height="300"/>

* Our inventory management system allows the administrator to add products, edit their quantities, and filter them by category (including category of missing products). 
Admins GUI: <br><br>
<img src="https://user-images.githubusercontent.com/105801035/176411504-41abb69a-7871-4334-bc03-8173085be05c.png" width="400" height="300"/>

* The administator can also manage his employees - add new users, remove existing users, or edit their permissions. <br><br>
<img src="https://user-images.githubusercontent.com/105801035/176411682-7bd5765f-aac8-48a8-87af-e6ba1a6be7f7.png" width="400" height="300"/>

* Regular users (employees) can only view the company's products and filter them by category (including category of missing products). <br><br>
Users GUI:
<img src="https://user-images.githubusercontent.com/105801035/176411611-02be88bf-2542-4b38-8770-3f6cb528d128.png" width="400" height="300"/>
<br>

* In order to build the system, we created a database in Mongo DB that contained the products list and the details of the users. We connected our website to the Mongo DB server in order to save and update the changes that the admin performs in the system. <br>
The data that was kept was: <br>
Products - name, price, quantity, minimum quantity, category, image. <br>
Users - username, password, type. <br>
<img src="https://user-images.githubusercontent.com/105801035/176414844-9f789ced-9e67-49c4-92e7-60fb7fd2ab3c.png" width="400" height="300"/>

* Our MVC: <br>
Model: MongoDB based database located in the cloud. <br>
Viewer: The display on the site is based on static HTML pages and CSS that are in the public folder. <br>
Controller: The server that connects between them using Fetch calls. <br>


* Our initial project vision:

<img width="429" alt="GUI" src="https://user-images.githubusercontent.com/105801035/169852871-59279571-419d-48ec-ab09-e1ed34c6477d.png">
