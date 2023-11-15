import data from './get-group-id-example.json';

export const fetchData = (url) => {
  return fetch(url).then((response) => response.json());
};

export const getGroupId = async (groupId) => {
  try {
    // const res = await fetchData(`.../groups/${groupId}`);
    // return res.data;
    return data;
  } catch (e) {
    console.error(e);
  }
}