import {test, expect} from '@playwright/test';

test('get object', async ({request}) => {

    const response = await request.get('https://api.restful-api.dev/objects/7');
    let responseBody = await response.json();
    let responseName = await responseBody.name;
    let repsonseYear = await responseBody.data.year;
    let responseStatus = response.status();
    console.log(responseBody);
    console.log(repsonseYear);
} ) 