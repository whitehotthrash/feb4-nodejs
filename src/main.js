const { app } = require("./server.js");
const mongoose = require("mongoose");

async function dbConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/CoderIsAwesome");
    console.log("Database connect!");
  } catch (error) {
    console.log(`dbConnect failed! Error:\n${JSON.stringify(error)}`);
  }
}

async function dbWipe(){
  console.log("Emptying database...");
  await mongoose.connection.db.dropDatabase();
  console.log("Datanase has been wiped!");
}

async function dbClose() {
  await mongoose.connection.close();
  console.log("Database disconnect!");
}

const Developer = mongoose.model("Developer", {
  name: String,
  skills: [String],
});

async function appFunction() {
  await dbConnect();

  let newDev = new Developer({
    name: "Tim",
    skills: ["HTML", "CSS", "JavaScript"],
  });

  await newDev
    .save()
    .then(() => {
      console.log("Save successful!");
    })
    .catch((error) => {
      console.log("Some error occurred:\n" + error);
    });

  console.log("Closing DB to prevent hanging...");
  await dbClose();
}

appFunction();

// grab the port value from the environment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Example app running on port http://localhost:${PORT}`);
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
