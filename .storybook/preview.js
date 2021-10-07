import "../src/assets/sass/style.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Figma',
    values: [
      {
        name: 'Light',
        value: '#F5F5F5',
      },
      {
        name: 'Dark',
        value: '#1F1F1F',
      },
      {
        name: 'Figma',
        value: '#DADADA',
      },
    ],
  },
}