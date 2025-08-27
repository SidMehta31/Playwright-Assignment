const { test, expect, request } = require('@playwright/test')
const fs = require('fs')

test('Download file and save content', async ({ request }) => {
  const response = await request.get('https://www.convertapi.com/test.pdf')
  expect(response.ok()).toBeTruthy()

  const buffer = await response.body()
  fs.writeFileSync('utils/downloaded.pdf', buffer)
})