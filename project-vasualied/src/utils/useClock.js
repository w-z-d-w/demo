//计时器工具类
//2020-11-16
export function dateFilter(v) {
  const m = fillZero(v.getMonth() + 1)
  const d = fillZero(v.getDate())
  return `${v.getFullYear()}-${m}-${d}`
}
//11:16:22
export function timeFilter(v) {
  const h = fillZero(v.getHours())
  const m = fillZero(v.getMinutes())
  const s = fillZero(v.getSeconds())
  return `${h}:${m}:${s}`
}

function fillZero(v) {
  return v < 10 ? '0' + v : v
}


