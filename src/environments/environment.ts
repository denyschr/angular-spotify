export const environment = {
  production: false
};

export const SpotifyConfig = {
  apiUrl: 'https://api.spotify.com/v1',
  tokenUrl: 'https://accounts.spotify.com/api/token',
  redirectUrl: 'http://localhost:4200/login',
  authEndPoint: 'https://accounts.spotify.com/authorize',
  scopes: [
    'user-read-currently-playing',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-recently-played',
    'user-top-read',
    'user-read-playback-position',
    'user-library-read',
    'user-library-modify',
    'playlist-read-private',
    'playlist-read-collaborative'
  ]
};
