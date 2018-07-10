import Vue from 'vue'
import {
    Button,
    Loading,
    Notification,
    MessageBox,
    Message,
    Input,
    Table,
    TableColumn,
    Pagination
} from 'element-ui'

Vue.use(Loading.directive)
Vue.component(Notification)
Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.component(Button.name, Button)
Vue.component(Input.name, Input)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Pagination.name, Pagination)
