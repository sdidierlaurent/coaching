export default defineAppConfig({
  ui: {
    colors: {
      primary: 'violet',
      secondary: 'teal',
      neutral: 'zinc'
    },
    pageCard: {
      slots: { root: 'rounded-2xl', container: 'p-5 sm:p-6' }
    },
    button: {
      slots: { base: 'rounded-full' }
    }
  }
})
