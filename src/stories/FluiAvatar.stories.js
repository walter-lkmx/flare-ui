import FluiAvatar from './FluiAvatar.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Avatar',
  component: FluiAvatar,
  decorators: [withDesign],
  argTypes: {
    title: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiAvatar },
  template: '<flui-avatar v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {

};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=1327%3A2378',
  },
}