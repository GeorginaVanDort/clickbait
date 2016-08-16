import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  title: DS.attr(),
  shortTitle: DS.attr(),
  text: DS.attr(),
  imgUrl: DS.attr()
});
