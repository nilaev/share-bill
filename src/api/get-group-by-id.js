import data from './get-group-by-id-example.json'

export const fetchData = (url) => {
  return fetch(url, {
    method: 'GET'
  }).then((response) => {
    console.log(response)
    return response.json()
  })
}

export const getGroupById = async (groupId) => {
  try {
    const res = await fetchData(`https://hungry.mymidjourney.ru/api/groups/get/${groupId}`)
    return res.data
    // return data;
  } catch (e) {
    console.error(e)
  }
}