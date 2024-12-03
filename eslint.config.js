import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  unocss: true,
  vue: true,
  typescript: true,
  stylistic: {
    indent: 2,
    quotes: 'single'
  }
},
{
  files: ['**/*vue'],
  rules:{
  }
},
{ 
  files: ['**/*.ts'],
  rules: {},
})
