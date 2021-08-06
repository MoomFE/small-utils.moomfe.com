module.exports = {
  title: 'Small Utils',
  description: '前端工具合集',
  dest: 'docs',
  themeConfig: {
    nav: [
      { text: '指引', link: '/guide/' },
      { text: '组件', link: '/components/' },
      { text: '工具方法', link: '/utils/' },
      { text: '验证器', link: '/validator/' },
      { text: '样式', link: '/styles/' },
      { text: 'GitHub', link: 'https://github.com/MoomFE/Small-Utils' }
    ],
    sidebar: {
      '/components/': [
        '',
        's-form/',
        's-input/',
        's-select/',
        's-textarea/',
        's-scrollbars/'
      ]
    }
  }
}