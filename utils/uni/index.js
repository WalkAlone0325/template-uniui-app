import { toast, modal } from './uni'
import * as uitl from './util'
import { debounce } from './debounce'
import { throttle } from './throttle'
import router from './router'

function setupUtil() {
  const $u = {
    toast,
    modal,
    debounce,
    throttle,
    ...uitl,
    router
  }
  uni.$u = $u
}

export default setupUtil
