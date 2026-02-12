import {test, expect} from '@playwright/test';

test('delete object', async ({request}) => {
    const response = await request.delete('https://api.restful-api.dev/objects/ff8081819782e69e019c4e3a6dbd5ce8');
    const responseStatus = response.status();
    console.log(responseStatus);
    const responseBody = await response.json();
    console.log(responseBody)

})