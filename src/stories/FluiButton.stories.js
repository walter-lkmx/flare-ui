import FluiButton from './FluiButton.vue';

export default {
  title: 'FlareUi/Button',
  component: FluiButton,
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
  label: 'Button',
  fullMode: false,
};
