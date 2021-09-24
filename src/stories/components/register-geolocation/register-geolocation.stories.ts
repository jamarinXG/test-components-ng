import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterGeolocationModal } from './register-geolocation.component';

export default {
    title: 'Register Geolocation Modal',
    decorators: [
        moduleMetadata({
            declarations: [
                RegisterGeolocationModal
            ],
            imports: [NgbModule, NgbDropdownModule],
        })
    ]
};

const Template: Story<RegisterGeolocationModal> = args => ({
    component: RegisterGeolocationModal,
    props: {
      ...args,
    },
  });
  
  export const Default = Template.bind({});
  Default.args = {
    currentCountry: 'Spain',
    modalBody: 'Change your country location'
  };