import FluiAlertBar from './FluiAlertBar.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/AlertBar',
  component: FluiAlertBar,
  decorators: [withDesign],
  argTypes: {
    message: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiAlertBar },
  template: '<flui-alert-bar v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  message: 'Flare is a design system for agile front-end software engineering. 🚀',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=601%3A771',
  },
}