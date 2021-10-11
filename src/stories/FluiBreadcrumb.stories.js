import FluiBreadcrumb from './FluiBreadcrumb';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Breadcrumb',
  component: FluiBreadcrumb,
  decorators: [withDesign],
  argTypes: {
    message: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiBreadcrumb },
  template: '<flui-breadcrumb v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  message: 'Parent',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=1073%3A2034',
  },
}