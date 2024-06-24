export const environment = {
  production: true
};

export const SpotifyConfig = {
  apiUrl: 'https://api.spotify.com/v1',
  tokenUrl: 'https://accounts.spotify.com/api/token',
  redirectUrl: 'https://denyschr.netlify.app/login',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  scopes: ['user-read-recently-played', 'user-top-read', 'user-library-read', 'user-read-private']
};
