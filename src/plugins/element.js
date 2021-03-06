import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 全局挂载 message为任意名称 仅是个变量
Vue.prototype.$message = Message
