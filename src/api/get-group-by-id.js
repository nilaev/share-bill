// import data from './get-group-by-id-example.json'

export const fetchData = (url) => {
  return fetch(url, {
    method: 'GET'
  }).then((response) => {
    return response.json()
  })
}

export const getGroupById = async (groupId) => {
  try {
    return await fetchData(`http://88.218.61.170/api/groups/get/${groupId}`)
    // return data;
  } catch (e) {
    console.error(e)
  }
}
