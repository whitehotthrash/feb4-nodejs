const {app} = require("./server.js")

// grab the port value from the environment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app running on port http://localhost:${PORT}`)
});

// const { getPokemonName } = require("./getPokemonName");
// method 1 for importing and using stuff from packages
//const pokemon = require("pokemon"); // object that has a property that can access data
//console.log(pokemon.random())

// method 2 for importing and using stuff from packages
// object destructuring
// const {random} = require("pokemon");
// console.log(random()) // generic named
// const {random: alias} = require("pokemon");
// console.log(alias()) // alias name

// go over all of this again soon

// // Import a function and run it
// async function app() {
//   let pokemonName = await getPokemonName();
//   //console.log(getPokemonName);
//   console.log(await getPokemonName());
//   console.log(pokemonName);
// }
// app();
