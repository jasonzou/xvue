import components from 'unplugin-vue-components/vite'

export default function setupComponents() {
  return components({
    resolvers: [
    ],
    dirs: ['src/components'],
    include: [/\.vue$/, /\.vue\?vue/, /\.tsx$/],
    dts: 'src/types/components.d.ts',
  })
}
