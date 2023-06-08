export function findAccessToken() {
  let urlData = new URLSearchParams(window.location.hash);
  if (urlData.has("#access_token")) {
    return urlData.get("#access_token");
  } else {
    return null;
  }
}

console.log(findAccessToken);

export const data = {
  clientId: "8a925bdbdc514eb3bc6c8f1223aaa83f",
  redirectUri: "http://localhost:3000/",
};

export default function SignInButton() {
  const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${data.clientId}&redirect_uri=${data.redirectUri}&scope=playlist-modify-public,playlist-modify-private`;
  const accessToken = findAccessToken();

  function handleClick() {
    return <a href={url}>Sign into Spotify</a>;
  }

  if (accessToken) {
    return <div className="signin">You are logged in!</div>;
  } else {
    return (
      <div>
        <a className="nav-link p-2 bd-highlight signin" href={url}>
          Sign into Spotify
        </a>
      </div>
    );
  }
}

// <div>
//   <a className="btn btn-primary" href={url}>
//     Sign into Spotify
//   </a>
// </div>;
