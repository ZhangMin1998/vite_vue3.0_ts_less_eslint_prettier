import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
// 创建store实例
const store = createPinia()
// 使用持久化插件(全局持久化)
store.use(piniaPluginPersist)
export default store