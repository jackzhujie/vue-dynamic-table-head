import VueDynamicTableHead from './vue-dynamic-table-head/src'

const components = [
    VueDynamicTableHead
]

const install = Vue => {
    if(install.installed) return
    install.installed = true
    components.map(component => {
        Vue.component(component.name,component)
    })
}

/** 支持使用标签方式引入 */
if(typeof window != 'undefined' && window.Vue){
    install(window.Vue)
}

export default {
    install,
    ...components
}
