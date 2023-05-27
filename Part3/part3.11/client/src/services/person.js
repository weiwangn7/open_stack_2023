import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then(res => res.data);
};

const create = newPerson => {
  const req = axios.post(baseUrl, newPerson);
  return req.then(res => res.data);
};

const deletePerson = id => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then(res => res.data);
};

const update = (id, changePerson) => {
  const req = axios.put(`${baseUrl}/${id}`, changePerson);
  return req.then(res => res.data);
};

export default { getAll, create, deletePerson, update };
