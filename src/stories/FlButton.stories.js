import FlButton from './FlButton.vue';

export default {
  title: 'Components/Button',
  component: FlButton,
  parameters: {
    docs: {
      source: {
        type: 'auto',
      }
    }
  }
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { FlButton },
  setup() {
    return { args };
  },
  template: '<fl-button v-bind="args" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { fullMode: true, label: 'Button' };