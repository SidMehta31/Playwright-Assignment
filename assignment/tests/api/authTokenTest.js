const { test, expect, request } = require('@playwright/test')
const settings = require('../../settings.json')

test('Auth token API request', async ({ request }) => {
  const response = await request.get('https://v2.convertapi.com/user', {
    headers: { Authorization: `Bearer ${settings.authToken}` }
  })
  expect(response.ok()).toBeTruthy()
  console.log(await response.json())
})