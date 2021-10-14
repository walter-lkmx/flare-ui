import FluiSlider from './FluiSlider.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Slider',
  component: FluiSlider,
  decorators: [withDesign],
  argTypes: {
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiSlider },
  template: '<flui-slider v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=1338%3A2509',
  },
}