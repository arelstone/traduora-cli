import axios from 'axios'

export const BASE_URL = 'http://localhost:8080/api/v1'

export const getAuthToken = async (): Promise<string> => {
  const result = await axios.post(`${BASE_URL}/auth/token`,
    {
      client_id: 'da3cc709-a6a7-4964-8cfd-59fb7c0696a5',
      client_secret: 'kChctVjlIX3cHxlybjPgxrTZtPo23vta',
      grant_type: 'client_credentials',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    })

  return result.data.access_token
}

export const axiosOptions = () => ({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ODVmZTY3ZS02YTU3LTQ2OGYtYTJjZC02OTM4M2Q0ZjNiODciLCJ0eXBlIjoidXNlciIsImlhdCI6MTU4NTU1ODQ5NiwiZXhwIjoxNTg1NjQ0ODk2fQ.8j12ZdqK7hHwOzCeid17wc4JinzNNY-3pY3ZhZUMHOo',
  },
})
