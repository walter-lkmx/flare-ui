import FluiHeader from './FluiHeader';
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'FlareUi/Header',
  component: FluiHeader,
  decorators: [withDesign],
  parameters: {
    layout: 'fullscreen',
  },
};

// export const WithLayout = Template.bind({});
// WithLayout.parameters = {
//   layout: 'centered',
// };

const Template = (args, {
  argTypes
}) => ({
  components: {
    FluiHeader
  },
  props: Object.keys(argTypes),
  template: `
  <flui-header v-bind="$props">

    <template v-slot:headerMainNavigation>
    </template>

    <template v-slot:headerActions></template>

  </flui-header>`,
});
export const Normal = Template.bind({});
Normal.args = {
  mode: `full`,
  logo: 'flare--white.png',
  mainNavigation: [
    {
      title: 'Home',
      to: '/home',
    },
    {
      title: 'Docs',
      to: '/docs',
    },
    {
      title: 'Examples',
      to: '/examples',
    },
    {
      title: 'Blog',
      to: '/blog',
    },
    {
      title: 'Faq',
      to: '/faq',
    },
    {
      title: 'About',
      to: '/about',
    },
  ],
  actions: [
    {
      title: '🌶',
      to: '/',
    },
    {
      title: '🌮',
      to: '/',
    },
  ],
};
Normal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/Zv5cp2PFUMFR3G3fp6qb15/Flare-Igniter-🧬?node-id=418%3A171',
  },
}