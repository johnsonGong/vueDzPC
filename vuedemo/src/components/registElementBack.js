import Vue from 'vue'
import {
    Button,
    Select,
    Notification,
    MessageBox,
    Message,
    Table,
    TableColumn,
    Breadcrumb,
    BreadcrumbItem,
    Pagination,
    Dialog,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    Row,
    Option,
    Form,
    FormItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Transfer,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Col,
    Cascader,
    Carousel,
    CarouselItem,
    Tooltip,
    DatePicker,
    TimePicker,
    Upload,
    Tag,
    Progress,
    TimeSelect,
    InputNumber,
    Tabs,
    TabPane,
    Tree,
    Loading,
    Collapse,
    CollapseItem,
    Switch,
    Rate
} from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'

Vue.use(Loading.directive)

Vue.component(Notification)
Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Pagination.name, Pagination)
Vue.component(Dialog.name, Dialog)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Input.name, Input)
Vue.component(Row.name, Row)
Vue.component(Option.name, Option)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Transfer.name, Transfer)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(Checkbox.name, Checkbox)
Vue.component(CheckboxButton.name, CheckboxButton)
Vue.component(CheckboxGroup.name, CheckboxGroup)
Vue.component(Col.name, Col)
Vue.component(Cascader.name, Cascader)
Vue.component(Tooltip.name, Tooltip)
Vue.component(DatePicker.name, DatePicker)
Vue.component(TimePicker.name, TimePicker)
Vue.component(Upload.name, Upload)
Vue.component(Tag.name, Tag)
Vue.component(Progress.name, Progress)
Vue.component(TimeSelect.name, TimeSelect)
Vue.component(InputNumber.name, InputNumber)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Tree.name, Tree)
Vue.component(Switch.name, Switch)
Vue.component(Rate.name, Rate)
Vue.component(Collapse.name, Collapse)
Vue.component(CollapseItem.name, CollapseItem)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(CollapseTransition.name, CollapseTransition)
