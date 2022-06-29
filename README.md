# InventoryApplication
The goal of our project is to create a comfortable GUI for inventory management of pets products shops.

There are two user types - admin and user.
Login Page:
<img src="https://user-images.githubusercontent.com/105801035/176411348-73b3e9d8-e8ca-43c4-97ba-83891bd540a0.png" width="300" height="300"/>


Our inventory management system allows the administrator to add products, edit their details, and filter them by category. 
Admins GUI:
![image](https://user-images.githubusercontent.com/105801035/176411504-41abb69a-7871-4334-bc03-8173085be05c.png)

The administator can also manage his employees - add new users, remove existing users, or edit their permissions.
![image](https://user-images.githubusercontent.com/105801035/176411682-7bd5765f-aac8-48a8-87af-e6ba1a6be7f7.png)


Regular users (employees) can only view the company's products and filter them by category (including category of missing products).
Users GUI:
![image](https://user-images.githubusercontent.com/105801035/176411611-02be88bf-2542-4b38-8770-3f6cb528d128.png)


In order to build the system, we created a database in Mongo DB that contained the products list and the details of the users. We connected our website to the Mongo DB server in order to save and update the changes that the admin performs in the system.
The data that was kept was:
* Products - name, price, quantity, minimum quantity, category, image.
* Users - username, password, type.




<img width="429" alt="GUI" src="https://user-images.githubusercontent.com/105801035/169852871-59279571-419d-48ec-ab09-e1ed34c6477d.png">
