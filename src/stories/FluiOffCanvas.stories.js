import FluiOffCanvas from './FluiOffCanvas.vue';
import FluiButton from './FluiButton.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/OffCanvas',
  component: FluiOffCanvas,
  decorators: [withDesign],
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiOffCanvas, FluiButton },
  template: 
  `<div style="padding: 16px;">
    <flui-button label="Open Off Canvas" :fullMode="false" data-off-canvas-name="demo"/>
    <flui-off-canvas v-bind="$props">
      <p>This is the content of the Off Canvas</p>
    </flui-off-canvas>
  </div>`,
});

export const Normal = Template.bind({});
Normal.args = {
  title: 'OffCanvas',
  offCanvasName: 'demo',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=1103%3A2327',
  },
}
