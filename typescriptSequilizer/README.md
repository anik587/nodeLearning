# recommendation_engine

Recommendation engine currently using graphQL.

Instructions

1. Pull source code.
2. Run `npm install`.
3. Rename `.env.example` to `.env`.
4. Rename `config.example.json` to `config.json` (Inside config folder).
5. Rename `config.example.json` to `config.json` (Inside config folder).
6. Change environemnt variables in `.env` (if necessary `NODE_ENV`).
7. Confiure redis and mysql connection in corresponding file (`config.production.js` for production and       `config.development.js` according to your .env).
8. Run `nodemon`. (If not define install globally `npm i -g nodemon`)
9. Import `recommendation engine.postman_collection.json` into your postman.
10. Create `token` and `refresh` using `get token` (Based on your application credentials from secret.json file).
11. Edit collection and replace your variables accordingly (Example for Binge `tokenBinge` & `refreshBinge`).
12. Finally make request.