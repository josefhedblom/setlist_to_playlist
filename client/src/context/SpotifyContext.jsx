export const SpotifyContext = () => {
  const token = localStorage.getItem("access_token");
  return token;
};
