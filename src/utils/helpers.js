import { formatEther, formatUnits, parseEther, parseUnits } from 'ethers'

/**
 * 格式化BNB数值 (18位小数)
 */
export function fmtBNB(wei, decimals = 4) {
  if (!wei) return '0'
  const str = formatEther(wei)
  const num = parseFloat(str)
  if (num === 0) return '0'
  if (num < 0.0001) return '<0.0001'
  return num.toFixed(decimals)
}

/**
 * 格式化代币数值
 */
export function fmtToken(wei, tokenDecimals = 18, displayDecimals = 0) {
  if (!wei) return '0'
  const str = formatUnits(wei, tokenDecimals)
  const num = parseFloat(str)
  return num.toLocaleString('en-US', {
    minimumFractionDigits: displayDecimals,
    maximumFractionDigits: displayDecimals,
  })
}

/**
 * 缩写地址
 */
export function shortAddr(addr) {
  if (!addr || addr.length < 10) return addr || '--'
  return addr.slice(0, 6) + '...' + addr.slice(-4)
}

/**
 * 倒计时格式化
 */
export function formatCountdown(seconds) {
  if (seconds <= 0) return '00:00:00'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  return [h, m, s].map(v => String(v).padStart(2, '0')).join(':')
}

/**
 * 解析URL中的推荐人地址
 */
export function getRefFromURL() {
  const hash = window.location.hash
  const match = hash.match(/[?&]ref=([0-9a-fA-Fx]+)/)
  return match ? match[1] : '0x0000000000000000000000000000000000000000'
}

/**
 * 生成推荐链接
 */
export function makeRefLink(address) {
  const base = window.location.origin + window.location.pathname
  return `${base}#/blackhole?ref=${address}`
}
