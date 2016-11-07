import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fwf-movie', 'Integration | Component | fwf movie', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fwf-movie}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fwf-movie}}
      template block text
    {{/fwf-movie}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
