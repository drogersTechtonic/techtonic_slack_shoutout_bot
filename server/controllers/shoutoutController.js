const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
const db = require('knex')(config);

const shoutoutController = {
  getRecentShoutouts: async () => {
    return await db('shoutouts')
      .select()
      .then((shoutouts) => {
        const sorted = shoutouts.sort((a, b) => b.date - a.date);
        return sorted.slice(0, 4);
      });
  },
};

module.exports = shoutoutController;