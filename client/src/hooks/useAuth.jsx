export function setAccessToken() {
  const hash = window.location.hash;
  let accessToken = localStorage.getItem("access_token");

  if (!accessToken && hash) {
    let urlParams = new URLSearchParams(window.location.hash.replace("#", "?"));
    let accessToken = urlParams.get("access_token");

    window.location.hash = "";
    localStorage.setItem("access_token", accessToken);
  }
  return accessToken;
}
