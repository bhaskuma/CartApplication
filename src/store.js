import { legacy_createStore as createStore } from 'redux'
import rootreducer from './component/redux/reducers/main'

const store = createStore(rootreducer)

export default store