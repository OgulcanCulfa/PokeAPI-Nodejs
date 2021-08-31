const router = require("express")();
const { pokemonService } = require("../services/index");
const messages = require("../messages/messages");

// pokemonların ve pokemon fotoğraflarının getirilmesini sağlayan endpoint.
router.get("/getAllPokemons", async (req, res) => {
  try {
    // url'den limit bilgisi alınıyor. Validasyonu yapılmadı.
    let limit = parseInt(req.query.limit);
    // url'den offset bilgisi alınıyor. Validasyonu yapılmadı.
    let offset = parseInt(req.query.offset);
    // bilgileri getiren servis çağırılıyor.
    const result = await pokemonService.getAllPokemonsWithImage(limit, offset);
    
    res.json(result);
  } catch (err) {
    
    res.status(500).send(messages.apiError);
  }
});


//Tek bir pokemona ait detay bilgileri getiren endpoint.
router.get("/getOnePokemon/:name", async (req,res) => {
    try {
        // url'den name bilgisi alınıyor. Validasyonu yapılmadı.
        const name = req.params.name;
        // bilgileri getiren servis çağırılıyor.
        const result = await pokemonService.getOnePokemonDetail(name);
        //sonuçlar döndürülüyor.
        res.json(result);
    } catch (err) {
        // hata halinde hata mesajı string olarak dönüyor.
        res.status(500).send(messages.apiError);
    }
})

module.exports = router;
