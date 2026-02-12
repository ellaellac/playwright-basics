import {test, expect} from '@playwright/test';

test('put object', async ({request}) => {
    const response = await request.put('https://api.restful-api.dev/objects/ff8081819782e69e019c4e3a6dbd5ce8', 
        {
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "name": "THIS Apple MacBook Pro 16",
                "data": {
                    "year": 2019,
                    "price": 2049.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB",
                    "color": "silver"
            }     
        }
    })

    let responseBody = await response.json();
    console.log(responseBody);
    console.log(responseBody.updatedAt);
})