
//参数1  时间   参数2 函数
export function debounce(delay, callback) {
  let task
  return function() {
    clearTimeout(task)
    task = setTimeout(() => {
      callback.apply(this, arguments) //更改this指向
    }, delay)
  }
}
