import {test, expect} from '@playwright/test';

test('post object', async ({request}) => {

    const repsonse = await request.post('https://api.restful-api.dev/objects', {
        headers: {
            'Content-Type': 'application/json'
        }, 
        data: {
            "name": "Apple MacBook Pro 16",
            "data": {
                "year": 2026,
                "price": 1234.56,
                "CPU model": "M3",
                "Hard disk size": "2 TB"
            }
        }
    })

    let repsonseBody = await repsonse.json();
    console.log(repsonseBody);
    console.log(repsonseBody.data["CPU model"]);
         
})