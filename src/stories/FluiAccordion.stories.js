import FluiAccordion from './FluiAccordion.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Accordion',
  component: FluiAccordion,
  decorators: [withDesign],
  argTypes: {
    title: 'test',
    details: 'test',
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiAccordion },
  template: '<flui-accordion v-bind="$props" />',
});

export const Normal = Template.bind({});
Normal.args = {
  title: 'What is Flare?',
  details: 'Flare is a design system for agile front-end software engineering. 🚀',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=1071%3A2028',
  },
}