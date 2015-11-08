import config from '../config/enviornment';
import FixtureAdapter from 'ember-data-fixture-adapter';
import DS from 'ember-data'

var adapter;
if (config.eviornment === 'test') {
  adapter = FixtureAdapter.extend({});
} else {
  adapter = DS.RESTAdapter.extend({
    host: 'http:localhost:4000/api'
  })
}

export default adapter;