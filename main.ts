import { createApp, defineComponent, h } from 'vue'

const App = defineComponent(() => {
  return () => h(Comp)
})

interface Props {
  str?: string
  bool?: boolean
  num?: number
  set?: Map<string, string>
}

const Comp = defineComponent((props: Props = { str: 'hello', num: -1 }) => {
  return () =>
    h('div', [JSON.stringify(props), h('br'), Object.keys(props).join(', ')])
})

createApp(App).mount('#app')
