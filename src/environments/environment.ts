export const environment = {
  production: false
};

export const SpotifyConfig = {
  clientId: 'd49c038f96234ecf946b2bab56d6a127',
  apiUrl: 'https://api.spotify.com/v1',
  tokenUrl: 'https://accounts.spotify.com/api/token',
  redirectUrl: 'http://localhost:4200/login',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  scopes: ['user-read-recently-played', 'user-top-read', 'user-library-read', 'user-read-private']
};
