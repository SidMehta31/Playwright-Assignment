const { test, expect, request } = require('@playwright/test')
const fs = require('fs')
const FormData = require('form-data')

test('Upload previously downloaded file', async ({ request }) => {
  const fileBuffer = fs.readFileSync('utils/downloaded.pdf')
  const form = new FormData()
  form.append('file', fileBuffer, { filename: 'downloaded.pdf' })

  const response = await request.post('https://v2.convertapi.com/upload', {
    multipart: { file: fileBuffer }
  })
  
  expect(response.ok()).toBeTruthy()
  const result = await response.json()
  console.log(result)
})