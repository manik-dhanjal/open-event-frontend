import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | forms/orders/guest-order-form', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.setProperties({
      errorMessage : null,
      userExists   : false,
      loginExistingUser() {},
      createNewUserViaEmail() { }
    });
    await render(hbs`{{forms/orders/guest-order-form isLoading=isLoading
        errorMessage=errorMessage
        userExists=userExists
        loginExistingUser=loginExistingUser
        createNewUserViaEmail=createNewUserViaEmail}}`);

    assert.ok(this.element.innerHTML.trim().includes('Registration'));

  });
});
