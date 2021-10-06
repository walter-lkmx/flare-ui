import FluiButton from './FluiButton.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Button',
  component: FluiButton,
  decorators: [withDesign],
  argTypes: {
    fullMode: false,
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiButton },
  template: '<flui-button @onClick="onClick" v-bind="$props" />',
});


export const Normal = Template.bind({});
Normal.args = {
  label: 'Buttonn',
  fullMode: false,
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-%F0%9F%A7%AC?node-id=1114%3A2612',
  },
}
