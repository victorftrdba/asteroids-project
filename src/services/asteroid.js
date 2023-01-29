import api from "../config/api";

const get = async (startDate = null, endDate = null) => {
  const response = await api.get("/feed", {
    params: {
      api_key: "dqu7owu49tlj37zZ1O3jMTa6bETSac610QHsn3Fg",
      start_date: startDate,
      end_date: endDate,
    },
  });

  return response.data.near_earth_objects;
};

export { get };
