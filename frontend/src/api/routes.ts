import axios from "axios";

const BASE_URL = process.env.API_URL || "http://localhost:3001/leaderboard";

export interface Leaderboard {
  name: string;
  score: number;
}

export const fetchLeaderBoard = async (): Promise<Leaderboard[]> => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
};

export const addPlayerToLeaderBoard = async (data: {
  name: string;
  score: number;
}): Promise<void> => {
  await axios.post(`${BASE_URL}/player`, data);
};
