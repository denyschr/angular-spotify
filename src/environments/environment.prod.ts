export const environment = {
  production: true
};

export const SpotifyConfig = {
  apiUrl: 'https://api.spotify.com/v1',
  tokenUrl: 'https://accounts.spotify.com/api/token',
  redirectUri: 'https://denyschr.netlify.app/login',
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
