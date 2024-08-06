<h1 align="center">Angular Spotify</h1>

<p align="center">
  <img src="src/assets/readme/angular.svg" alt="Angular logo" width="60px" height="60px"/>
  <img src="src/assets/readme/spotify.svg" alt="Spotify logo" width="60px" height="60px"/>
  <br>
  <em>A simple music web application that integrates with Spotify API to provide basic music playback and discovery features. Built with Angular 17+ and Angular Modules.</em>
  <br>
</p>

<p align="center">
  <a href="https://angular-spotify-denyschr.netlify.app/"><strong>angular-spotify</strong></a>
  <br>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular logo" />&nbsp;
  <img src="https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=ReactiveX&logoColor=white" alt="RxJS logo" />&nbsp;
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" alt="TypeScript logo" />
  <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS logo" />&nbsp;
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier logo" />&nbsp;
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="Eslint logo" />&nbsp;
  <img src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white&style=for-the-badge" alt="Git logo" />&nbsp;
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM package manager logo" />&nbsp;
  <img src="https://img.shields.io/badge/Spotify_API-1ED760?&style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify logo" />&nbsp;
</p>

<hr>

## Demo

https://github.com/user-attachments/assets/06fca6d3-7ddb-4531-8234-f95b3018179b

https://github.com/user-attachments/assets/c0a87965-2c1a-43f4-967e-2acb912993b2

## Getting started

To get started with the project, follow these steps:

1. Open your terminal and clone the repository:

```bash
git clone https://github.com/denyschr/angular-spotify.git
```

2. Go to the root directory of the project:

```bash
cd angular-spotify
```

3. Install the necessary dependencies:

```bash
npm install
```

4. Run the project:

```bash
ng serve
```

> ##### You can also run this project by using `npm run start` or `npx ng serve` (if you're using [nvm](https://github.com/nvm-sh/nvm))

5. Open a dev server with the browser:

```bash
http://localhost:4200/
```

6. Enjoy!

## Authorization code flow

Being as it's risky to store the client secret on the client side, I followed the `authorization code flow with PKCE`.

View [Authorization Code PKCE Guide](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow) for more details.

## Unit/e2e testing

Automated tests were skipped for this project

## License

This project is licensed under the [MIT](LICENSE) license
