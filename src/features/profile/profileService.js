import axios from "axios";

const API_URL = "http://localhost:3001/api/v1/user/";

const profile = async (profileData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL + "profile", profileData, config);

  return response.data;
};

const profileService = {
  profile,
};

export default profileService;
