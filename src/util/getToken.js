let token = null;
export function findAccessToken() {
  let urlData = new URLSearchParams(window.location.hash);
  if (urlData.has("#access_token")) {
    token = urlData.get("#access_token");
    window.location.hash = '';
  }
  return token;
}

export const data = {
  clientId: "8a925bdbdc514eb3bc6c8f1223aaa83f",
  redirectUri: window.location,
};

export default function SignInButton() {
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${data.clientId}&redirect_uri=${data.redirectUri}&scope=playlist-modify-public,playlist-modify-private`;
  const accessToken = findAccessToken();

  if (accessToken) {
    // return <div className="signin ">You are logged in!</div>;
    return (
      <div className="newSignIn">
        <a className="removeSpotifyHyperlinkStyling" href="/">
          Sign Out
        </a>
      </div>
    );
  } else {
    return (
      <div className="newSignIn">
        <a className="removeSpotifyHyperlinkStyling" href={url}>
          Sign In To Spotify
        </a>
      </div>
    );
  }
}
