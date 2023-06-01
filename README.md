# API Documentation

This repository provides documentation for the RESTful API endpoints and methods available.

## Base URL


----------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    ## User Endpoints
----------------------------------------------------------------------------------------------------------------------------------------------------------

### Register User   ------------------------------>  POST /api/register

- **URL:** `/api/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  - `name`: User's name.
  - `email`: User's email address.
  - `password`: User's password.
  - `address`: User's address.
- **Response:**
  - **Status Code:** 201 (Created)






### User Login      ------------------------------>  POST /api/login

- **URL:** `/api/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Request Body:**
  - `email`: User's email address.
  - `password`: User's password.
- **Response:**
  - **Status Code:** 201 (Created)








### Reset Password  ------------------------------>  PATCH /api/user/:id/reset

- **URL:** `/api/user/:id/reset`
- **Method:** `PATCH`
- **Description:** Resets the password for a user.
- **Request Parameters:**
  - `id`: User's ID.
- **Request Body:**
  - `newPass`: New password.
- **Response:**
  - **Status Code:** 204 (No Content)





----------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                ## Restaurant Endpoint
----------------------------------------------------------------------------------------------------------------------------------------------------------



### Get All Restaurants     ------------------------------>  GET /api/restaurants

- **URL:** `/api/restaurants`
- **Method:** `GET`
- **Description:** Retrieves all restaurants.
- **Response:**
  - **Status Code:** 200 (OK)






### Get Restaurant by ID    ------------------------------>  GET /api/restaurants/:id

- **URL:** `/api/restaurants/:id`
- **Method:** `GET`
- **Description:** Retrieves a restaurant by its ID.
- **Request Parameters:**
  - `id`: Restaurant's ID.
- **Response:**
  - **Status Code:** 200 (OK)









### Add Restaurant      ------------------------------>  POST /api/restaurants

- **URL:** `/api/restaurants`
- **Method:** `POST`
- **Description:** Adds a new restaurant.
- **Request Body:**
  - `name`: Restaurant's name.
  - `address`: Restaurant's address.
- **Response:**
  - **Status Code:** 200 (OK)







### Get Restaurant Menu     ------------------------------>  GET /api/restaurants/:id/menu

- **URL:** `/api/restaurants/:id/menu`
- **Method:** `GET`
- **Description:** Retrieves the menu of a restaurant by its ID.
- **Request Parameters:**
  - `id`: Restaurant's ID.
- **Response:**
  - **Status Code:** 200 (OK)









### Add Menu Item to Restaurant     ------------------------------>  POST /api/restaurants/:id/menu

- **URL:** `/api/restaurants/:id/menu`
- **Method:** `POST`
- **Description:** Adds a new menu item to a restaurant.
- **Request Parameters:**
  - `id`: Restaurant's ID.
- **Request Body:**
  - `name`: Menu item's name.
  - `description`: Menu item's description.
  - `price`: Menu item's price.
  - `image`: Menu item's image.
- **Response:**
  - **Status Code:** 200 (OK)











### Delete Menu Item        ------------------------------>  DELETE /api/restaurants/:id/menu/:menuId

- **URL:** `/api/restaurants/:id/menu/:menuId`
- **Method:** `DELETE`
- **Description:** Deletes a menu item from a restaurant by its ID.
- **Request Parameters:**
  - `id`: Restaurant's ID.
  - `menuId`: Menu item's ID.
- **Response:**
  - **Status Code:** 200 (OK)




-----------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                    ## Order Endpoints
-----------------------------------------------------------------------------------------------------------------------------------------------------------


### Create Order    ------------------------------>  POST /api/orders

- **URL:** `/api/orders`
- **Method:** `POST`
- **Description:** Allows a user to place an order.
- **Request Body:**
  - `restaurant`: ID of the restaurant.
  - `items`: Array of ordered items.
  - `totalPrice`: Total price of the order.
  - `deliveryAddress`: Delivery address.
- **Response:**
  - **Status Code:** 201 (Created)








### Get All Orders   ------------------------------>  GET /api/orders

- **URL:** `/api/orders`
- **Method:** `GET`
- **Description:** Retrieves all orders.
- **Response:**
  - **Status Code:** 200 (OK)









### Get Order by ID ------------------------------>  GET /api/orders/:id

- **URL:** `/api/orders/:id`
- **Method:** `GET`
- **Description:** Retrieves an order by its ID.
- **Request Parameters:**
  - `id`: Order's ID.
- **Response:**
  - **Status Code:** 200 (OK)









### Update Order        ------------------------------>  PATCH /api/orders/:id

- **URL:** `/api/orders/:id`
- **Method:** `PATCH`
- **Description:** Updates a specific order by its ID.
- **Request Parameters:**
  - `id`: Order's ID.
- **Request Body:**
  - Updated order details.
- **Response:**
  - **Status Code:** 204 (No Content)

