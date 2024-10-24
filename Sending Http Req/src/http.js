import axios from "axios";
export const fetchAvailablePlaces = async () => {
  const response = await axios.get("http://localhost:3000/places");
  if (response.statusText !== "OK") {
    const error = new Error("Failed to fetch places");
    throw error;
  }
  return response;
};

export const fetchAvailableUserPlaces = async () => {
    const response = await axios.get("http://localhost:3000/user-places");
    if (response.statusText !== "OK") {
      const error = new Error("Failed to fetch user places");
      throw error;
    }
    return response;
  };
export const updateUserPlaces = async (places) => {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({places}),
  });
  const resData = await response.json();
  if(!response.ok){
    throw new Error('Failed to update user data.');
  }
  return resData.message;
};
