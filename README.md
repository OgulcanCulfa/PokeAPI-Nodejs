# IMPORTANT!

Please follow these steps if you are working with this project on local machine:

1 - Open the IDE's terminal <br>
2 - type "npm i"

Then type "npm run start" to run the project. 

# PokeAPI-Nodejs

Get pokemon datas through PokeAPI with Node.js,Express.js



## Tech

- Node.js - https://nodejs.dev/
- Express.js - https://expressjs.com/


## Service routes

### pokemon


| Route | HTTP Method | Request Body | Url Param | Url Query Parameter | Description |
| :-------------: | :-------------: | :-----: | :-----: | :-----: | :-------------: |
| /getAllPokemons?limit&offset | GET | - | - | limit, offset (optional) | Get pokemons with paginated. Default limit is 20 | 
| /getOnePokemon/:name | GET | - | name | - | Get pokemon detail by name |
