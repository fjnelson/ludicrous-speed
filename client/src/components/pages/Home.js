import React from "react";
import { Header, Icon } from "semantic-ui-react";

const HeaderExampleSettingsIcon = () => (
  <Header as="h2" icon>
    <Icon name="settings" />
    Hello Stranger!
    <Header.Subheader>
      Breaking down barriers, one story at a time.
    </Header.Subheader>
  </Header>
);

export default HeaderExampleSettingsIcon;

<h2 class="ui icon header">
  <i aria-hidden="true" class="settings icon"></i>Account Settings
  <div class="sub header">
    Manage your account settings and set e-mail preferences.
  </div>
</h2>;
