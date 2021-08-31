const axios = require("axios");
const apiUrl = "https://pokeapi.co/api/v2/";

module.exports = {
  // pokemonların ve pokemon fotoğraflarının getirilmesini sağlayan servis. Varsaayılan değerler: limit => 20, offset => 0
  getAllPokemonsWithImage: async (limit = 20, offset = 0) => {
    try {
      // pokemon sayısı fazla olduğundan sayfalama amacıyla limit ve offset kullanılmıştır.
      const results = await axios.get(
        apiUrl + `pokemon/?limit=${limit}&offset=${offset}`
      );
      return pokemonInformations(results.data);
    } catch (err) {
      if (err) throw err;
    }
  },
  // Tek bir pokemona ait detay bilgileri getiren servis.
  getOnePokemonDetail: async (_name) => {
    try {
      const { data } = await axios.get(apiUrl + `pokemon/${_name}`);
      const { abilities, sprites, name, id } = data;
      const results = { abilities, photos: sprites, name, id };
      return results;
    } catch (err) {
      if (err) throw err;
    }
  },
};

// her bir pokemonun fotoğraf bilgisinin getirilebilmesi için API isteğinin yapıldığı fonksiyon.
const pokemonInformations = async (pokemons) => {
  try {
    const iteratePokemons = pokemons.results.map(async (pokemon) => {
      let { data } = await axios.get(pokemon.url);
      let { id, name, sprites } = data;
      let results = {
        id: id,
        name: name,
        photo: sprites.front_default,
      };
      return results;
    });
    const datas = await Promise.all(iteratePokemons);
    const { count, next, previous } = pokemons;
    return Object.assign({ count, next, previous }, datas);
  } catch (err) {
    if (err) throw err;
  }
};
