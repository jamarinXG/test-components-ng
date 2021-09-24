import { moduleMetadata, Story, Meta, storiesOf } from '@storybook/angular';
import { GeolocationBlockingModal } from './geolocation-blocking.component';

import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

export default {
    title: 'Geolocation Blocking Modal',
    decorators: [
        moduleMetadata({
            declarations: [
                GeolocationBlockingModal
            ],
            imports: [NgbModule, NgbDropdownModule],
        })
    ]
};

const Template: Story<GeolocationBlockingModal> = args => ({
    component: GeolocationBlockingModal,
    props: {
      ...args,
    },
  });
  
  export const Default = Template.bind({});
  Default.args = {
    currentCountry: 'Spain'
  };