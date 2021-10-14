import FluiProgress from './FluiProgress.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Progress',
  component: FluiProgress,
  decorators: [withDesign],
  argTypes: {
    title: '',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiProgress },
  template: '<flui-progress v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {

};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=1331%3A2384',
  },
}