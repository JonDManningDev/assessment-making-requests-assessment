const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5001";
const constellations = `${BASE_URL}/constellations`;

function index() {
  axios.get(constellations)
  .then(({data}) => {
    console.log(data);
  });
};

function create(body) {
  axios.post(constellations, body)
  .then(({data}) => console.log(data));
};

function show(id) {
  axios.get(`${constellations}/${id}`)
  .then(({data}) => console.log(data));
};

function update(id, body) {
  axios.put(`${constellations}/${id}`, body)
  .then(({data}) => console.log(data));
};

function destroy(id) {
  axios.delete(`${constellations}/${id}`)
  .then(({data}) => console.log(data));
};

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
