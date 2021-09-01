# PokeAPI-Nodejs

Get pokemon datas through PokeAPI with Node.js,Express.js

## Tech

- Node.js - https://nodejs.dev/
- Express.js - https://expressjs.com/


## Service routes

### pokemon


| Route | HTTP Method | Request Body | Url Param | Url Query Parameter | Description |
| :-------------: | :-------------: | :-----: | :-----: | :-----: | :-------------: |
| /getAllPokemons | GET | - | - | limit, offset (optional) | Get pokemons with paginated. Default limit is 20 | 
| /getOnePokemon | GET | - | name | - | Get pokemon detail by name |
