const db = require('../config/connection');
const { Post, User } = require('../models');
const postSeeds = require('./postSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Post.deleteMany({});
    await Post.create(postSeeds);
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});





const db = require('../config/connection');
const { Post, User } = require('../models');
const postSeeds = require('./postSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Post.deleteMany({});
    await Post.create(postSeeds);
    await User.deleteMany({});
    await User.create(userSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});