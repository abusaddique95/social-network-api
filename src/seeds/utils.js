// const { faker } = require("@faker-js/faker");

// const User = require("../models/User");
// const Thought = require("../models/Thought");

// const generateUsers = (numberOfUsers) => {
//   const usersArray = new Array(numberOfUsers).fill("");

//   const users = usersArray.map(() => {
//     return {
//       userName: faker.internet.userName(),
//       email: faker.internet.email(),
//       thoughts: [],
//       friends: [],
//     };
//   });

//   return users;
// };

// const seedUsers = async (numberOfUsers) => {
//   await User.deleteMany({});

//   const users = generateUsers(numberOfUsers);

//   await User.insertMany(users);

//   console.log("[INFO]: Successfully seeded users");
// };

// const generateThoughts = (numberOfThoughts) => {
//   const thoughtsArray = new Array(numberOfThoughts).fill("");

//   const thoughts = thoughtsArray.map(() => {
//     return {
//       thoughtText: faker.lorem.words(10),
//       createdAt: faker.date.recent(),
//       userName: faker.internet.userName(),
//       reactions: [],
//     };
//   });

//   return thoughts;
// };

// const seedThoughts = async (numberOfThoughts) => {
//   await Thought.deleteMany({});

//   const thoughts = generateThoughts(numberOfThoughts);

//   await Thought.insertMany(thoughts);

//   console.log("[INFO]: Successfully seeded thoughts");
// };

// module.exports = { seedUsers, seedThoughts };
