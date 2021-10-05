import FluiModal from './FluiModal.vue';
import FluiButton from './FluiButton.vue';

export default {
  title: 'FlareUi/Modal',
  component: FluiModal,
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
