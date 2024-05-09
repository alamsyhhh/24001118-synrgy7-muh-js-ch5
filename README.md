
## REST API Endpoints
### Hello World Test

-----------------------
### Get All Car

Mengembalikan array berisi data mobil dari database.

#### *HTTP Request*
> **GET**   
> `/api/cars`

#### *Default Request URL*

    http://localhost:9000/api/cars

#### *Expected Response*
Response Code: `200`  
Response Type: `application/json`  
Response Body:  

    {
    	"status": "200",
    	"message": "Get all car data successfully",
    	"data": [
    		{
    			"id": number,
    			"name": string,
    			"size": string,
    			"rent_per_day": number,
    			"image_id": string,
    			"image_url": string,
    			"createdAt": timestamp,
    			"updatedAt": timestamp
    		}
    	]
    }

-----------------------

### Add New Car 

Menambahkan data mobil baru ke database.

#### *HTTP Request*
> **POST**   
> `/api/cars/`

#### *Default Request URL*

    http://localhost:9000/api/cars

#### *Expected Request*
Request Type: `application/json`  
Request Body:   

    {
    	"name": string,
    	"size": string,
    	"rentPerDay": number,
    	"imageId": string,
    	"imageUrl": string,
    }


#### *Expected Response*
Response Code: `201`   
Response Type: `application/json`   
Response Body:  

    {
    	"status": "success",
    	"message": "Add data successfully"
    }

-----------------------
### Add Car Image to Cloudinary

Meng-upload car image ke Cloudinary lalu mengembalikan *public_id* dan *url* nya.

#### *HTTP Request*
> **POST**   
> `/api/cars/picture/cloudinary`

#### *Default Request URL*

    http://localhost:4000/api/cars/picture/cloudinary

#### *Expected Request*
Request Type: `multipart/form-data`   
Request Body:   

    picture: file


#### *Expected Response*
Response Code: `201`   
Response Type: `application/json`   
Response Body:   

    {
    	"status": "200",
    	"message": "Upload image successfully",
    	"url": string,
    	"public_id": string
    }

-----------------------
### Edit Car Data with ID 

Mengedit data car berdasarkan ID nya di database.

#### *HTTP Request*
> **PUT**   
> `/api/cars/{carId}`

#### *Default Request URL*

    http://localhost:4000/api/cars/{carId}

#### *Expected Request*
Request Type: `application/json`   
Request Body:   

    {
    	"name": string,
    	"size": string,
    	"rentPerDay": number,
    	"editImg": boolean,
    	"imageId": string, // OPTIONAL, if editImg = false
    	"imageUrl": string, // OPTIONAL, if editImg = false
    }


#### *Expected Response*
Response Code: `200`    
Response Type: `application/json`   
Response Body:   

    {
    	"status": "success",
    	"message": "Edit data with id={carId} successfully"
    }

-----------------------
### Delete Car with ID

Menghapus data car berdasarkan dengan ID dari database.

#### *HTTP Request*
> **DELETE**   
> `/api/cars/{carId}`

#### *Default Request URL*

    http://localhost:4000/api/cars/{carId}

#### *Expected Response*
Response Code: `200`   
Response Type: `application/json`   
Response Body:   

    {
        "status": "success",
        "message": "Delete data with id={carId} successfully"
    }

-----------------------
