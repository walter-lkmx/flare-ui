import FluiTooltip from './FluiTooltip.vue';

export default {
  title: 'FlareUi/Tooltip',
  component: FluiTooltip,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiTooltip },
  template: `<p>Front-End Engineering, or Front-End Engineering Design, is an engineering design approach used to control project expenses <flui-tooltip v-bind="$props"><span data-tooltip="demo">and</span></flui-tooltip> thoroughly plan a project before a fix bid quote is submitted. It may also be referred to as click here Pre-project planning, front-end loading, feasibility analysis, or early project planning.</p>`,
});

export const Normal = Template.bind({});
Normal.args = {
  message: 'See more...',
  tooltipName: 'demo',
};
