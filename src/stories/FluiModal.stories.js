import FluiModal from './FluiModal.vue';
import FluiButton from './FluiButton.vue';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Modal',
  component: FluiModal,
  decorators: [withDesign],
  parameters: {
    layout: 'fullscreen'
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FluiModal, FluiButton },
  template: 
  `<div style="padding: 16px;">
    <flui-button label="Open modal" :fullMode="false" data-modal-name="demo"/>
    <flui-modal v-bind="$props">
      <p>This is the content of the modal</p>
    </flui-modal>
  </div>`,
});

export const Normal = Template.bind({});
Normal.args = {
  title: 'Modal title',
  modalName: 'demo',
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=412%3A314',
  },
}
