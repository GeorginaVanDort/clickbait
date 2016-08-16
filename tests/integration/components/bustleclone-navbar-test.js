import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('bustleclone-navbar', 'Integration | Component | bustleclone navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{bustleclone-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#bustleclone-navbar}}
      template block text
    {{/bustleclone-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
