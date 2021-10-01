import FluiBadge from './FluiBadge.vue';

export default {
  title: 'FlareUi/Badge',
  component: FluiBadge,
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
