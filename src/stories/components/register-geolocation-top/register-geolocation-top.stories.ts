import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterGeolocationTop } from './register-geolocation-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
    title: 'Register Geolocation Top',
    decorators: [
        moduleMetadata({
            declarations: [
              RegisterGeolocationTop
            ],
            imports: [NgbModule, NgbDropdownModule, BrowserAnimationsModule],
        })
    ]
};

const Template: Story<RegisterGeolocationTop> = args => ({
    component: RegisterGeolocationTop,
    props: {
      ...args,
    },
  });
  
  export const Default = Template.bind({});
  Default.args = {
    currentCountry: 'Spain',
    hide: false,
    message: 'Visit our local site for more information and offers for your country.'
  };