import FluiAccordion from './FluiAccordion.vue';

export default {
  title: 'FlareUi/Accordion',
  component: FluiAccordion,
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
