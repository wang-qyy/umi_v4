export default {
  tailwindcss: {},
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  // routes: [
  //   {
  //     path: '/test.html',
  //     component: '@/pages/test/index',
  //     title: 'tailwindcss 测试页面',
  //   },
  // ],
  mpa: {
    entry: {
      test: { title: 'test' },
    },
  },
};
