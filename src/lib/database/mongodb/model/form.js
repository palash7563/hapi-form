const mongo = require('mongoose');

mongo.Promise = global.Promise;

/* eslint-disable */
const Schema = mongo.Schema;
/* eslint-enable */

const link = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default mongo.model('linkShortner', link);
