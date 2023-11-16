import data from './get-group-by-id-example.json'

export const fetchData = (url) => {
  return fetch(url, {
    method: 'GET'
  }).then((response) => {
    console.log(response)
    return response.json()
  })
}

export const API_URL = 'http://185.231.154.195/api'

export const getGroupById = async (groupId) => {
  try {
    // console.log(`${API_URL}/groups/get/${groupId}`)
    // const res = await fetchData(`${API_URL}/groups/get/${groupId}`)
    // console.log(res)
    // return res.data
    return data;
  } catch (e) {
    console.error(e)
  }
}