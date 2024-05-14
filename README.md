
## REST API Endpoints

-----------------------
### Get All Car

Mengembalikan array berisi data mobil dari database.

#### *HTTP Request*
> **GET**   
> `/getAllCars`

#### *Default Request URL*

    http://localhost:9000/api/v1/cms/getAllCars

#### *Expected Response*
Response Code: `200`  
Response Type: `application/json`
Request Params:   

    {
    	"category": string,
    	"name": string,
    	"page": number,
    	"pageSize": string,
    }
    
Response Body:  

    {
    "status": 200,
    "message": "Get all car data successfully",
    "data": [
        {
            "id": "95e7d133-1600-4260-9e75-8606a56fb576",
            "name": "BMW",
            "category": "Medium",
            "price": 10000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "3bf22e19-6616-443c-a671-a8fc27deb0f4",
            "name": "Ferrari",
            "category": "Small",
            "price": 100.05,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "832bf40f-06b0-4a48-b488-e8c60cdeef81",
            "name": "Lamborghini",
            "category": "large",
            "price": 20000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "ac5bce16-25e0-4aef-ada5-55c03a9ae516",
            "name": "Porsche",
            "category": "Small",
            "price": 30000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "5b6ab0cc-c8fa-4a24-980e-105e721b7916",
            "name": "Audi",
            "category": "large",
            "price": 400.05,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "f1db4b4a-873e-444b-8a7b-c70cbdae53c8",
            "name": "Kijang",
            "category": "small",
            "price": 50.05,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "18cd5c40-a801-49cd-8d83-f804f4fb0e65",
            "name": "jeep",
            "category": "large",
            "price": 500000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "e4221d3e-be45-4829-b4cc-31f8e3b1ca05",
            "name": "auwaw",
            "category": "medium",
            "price": 30000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "35da39bd-8541-4769-9c0e-a355e06baae9",
            "name": "rsaa",
            "category": "small",
            "price": 30000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "654e2536-a0ed-4229-a2a6-3ec9dd1d9cf8",
            "name": "tusk",
            "category": "small",
            "price": 40000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        },
        {
            "id": "ec16dc80-e9ae-4b38-a014-f24737905586",
            "name": "ferrari",
            "category": "large",
            "price": 4000000,
            "image": "https://auto2000.co.id/berita-dan-tips/_next/image?url=https%3A%2F%2Fastradigitaldigiroomuat.blob.core.windows.net%2Fstorage-uat-001%2Fmobil-offroad.jpg&w=1200&q=75",
            "starRent": null,
            "finishRent": null,
            "createdAt": "2024-05-13T15:52:32.388Z",
            "updatedAt": "2024-05-13T15:52:32.388Z"
        }
    ]
}

-----------------------

### Create Car 

Menambahkan data mobil baru ke database.

#### *HTTP Request*
> **POST**   
> `/createCar`

#### *Default Request URL*

    http://localhost:9000/api/v1/cms/createCar

#### *Expected Request*
Request Type: `application/json`  
Request Body:   

    {
    	"name": string,
    	"category": string,
    	"price": float,
    	"image": file,
    	"starRent": date,
    	"finishRent": date,
    }


#### *Expected Response Success*
Response Code: `201`   
Response Type: `application/json`   
Response Body:  

    {
    "status": 201,
    "message": "Data Berhasil Disimpan",
    "data": {
        "id": "dc3e04c9-8716-47ae-93c4-2636b8898e7f",
        "name": "test",
        "category": "large",
        "price": "300000",
        "image": "https://res.cloudinary.com/dmuuypm2t/image/upload/v1715665623/challenge_5/1715665615967_APIVeVtw..png",
        "createdAt": "2024-05-14T05:47:04.368Z",
        "updatedAt": "2024-05-14T05:47:04.368Z"
    }
}

#### *Expected Response Failed*
Response Code: `400`   
Response Type: `application/json`   
Response Body:  

    {
         "status": 400,
         "message": "Hanya diperbolehkan untuk mengunggah file gambar (JPG, PNG)!"
    }

Response Body:  

    {
         "status": 400,
         "message": "Unexpected field. Please check your file upload."
    }
-----------------------

### Edit Car Data with ID 

Mengedit data car berdasarkan ID nya di database.

#### *HTTP Request*
> **PUT**   
> `/api/v1/cms/updateCar/:id`

#### *Default Request URL*

    http://localhost:9000/api/v1/cms/updateCar/:id

#### *Expected Request*
Request Type: `application/json`   
Request Body:   

    {
    	"name": string,
    	"category": string,
    	"price": number,
    	"image": file,
    	"starRent": date,
    	"finishRent": date,
    }


#### *Expected Response*
Response Code: `200`    
Response Type: `application/json`   
Response Body:   

    {
    	 "status": 200,
         "message": "Car updated successfully",
         "data": {
                "id": "dc3e04c9-8716-47ae-93c4-2636b8898e7f",
                "name": "test 2",
                "category": "roro",
                "price": "1010",
                "image": "https://res.cloudinary.com/dmuuypm2t/image/upload/v1715666531/challenge_5/1715666520976_gU2xDHIx..png",
                "starRent": null,
                "finishRent": null,
                "createdAt": "2024-05-14T05:47:04.368Z",
                "updatedAt": "2024-05-14T06:02:11.509Z"
        }
    }

#### *Expected Response Failed*
Response Code: `400`   
Response Type: `application/json` 
Response Body:  
    
        {
             "status": 404,
             "message": "Car with the specified ID not found"
        }
        
Response Body:  
    
        {
             "status": 400,
             "message": "Hanya diperbolehkan untuk mengunggah file gambar (JPG, PNG)!"
        }
    
Response Body:  
    
        {
             "status": 400,
             "message": "Unexpected field. Please check your file upload."
        }

-----------------------
### Delete Car with ID

Menghapus data car berdasarkan dengan ID dari database.

#### *HTTP Request*
> **DELETE**   
> `deleteCar/:id`

#### *Default Request URL*

    http://localhost:9000/api/v1/cms/deleteCar/:id

#### *Expected Response*
Response Code: `200`   
Response Type: `application/json`   
Response Body:   

    {
         "status": 200,
         "message": "Data Berhasil Dihapus"
    }

#### *Expected Response Failed*
Response Code: `400`   
Response Type: `application/json` 
Response Body:  
    
        {
             "status": 404,
             "message": "Car with the specified ID not found"
        }

-----------------------
