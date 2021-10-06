import FluiBadge from './FluiBadge.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Badge',
  component: FluiBadge,
  decorators: [withDesign],
  argTypes: {
    title: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiBadge },
  template: '<flui-badge v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  title: 'Done',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=862%3A1477',
  },
}