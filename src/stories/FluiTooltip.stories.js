import FluiTooltip from './FluiTooltip.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Tooltip',
  component: FluiTooltip,
  decorators: [withDesign],
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
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=877%3A1511',
  },
}