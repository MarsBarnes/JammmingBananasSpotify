export function findAccessToken() {
  let urlData = new URLSearchParams(window.location.hash);
  if (urlData.has("#access_token")) {
    return urlData.get("#access_token");
  } else {
    return null;
  }
}

export const data = {
  clientId: "8a925bdbdc514eb3bc6c8f1223aaa83f",
  redirectUri: window.location,
};

export default function SignInButton() {
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${data.clientId}&redirect_uri=${data.redirectUri}&scope=playlist-modify-public,playlist-modify-private`;
  const accessToken = findAccessToken();

  if (accessToken) {
    return <div className="signin">You are logged in!</div>;
  } else {
    return (
      <div>
        <a
          className="btn btn-info btn-outline-success my-2 my-sm-0 newSignIn"
          href={url}
        >
          Sign into Spotify
        </a>
      </div>
    );
  }
}

