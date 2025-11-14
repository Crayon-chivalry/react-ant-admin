function setRootFontSize  () {
  const designWidth = 1920 // PC设计稿宽度
  const baseSize = 192 // PC端基准值

  // 判断是否为移动设备
  const isMobile = window.innerWidth <= 768

  let fontSize
  if (isMobile) {
    // 移动端采用 PC 设计稿等比缩放
    fontSize = (window.innerWidth / designWidth) * baseSize * 4
    // 设置最小字号限制，确保不会太小
    // fontSize = Math.max(fontSize, 45)
  } else {
    // PC端采用 1920 设计稿的计算方式, 大于则按PC端基准值
    fontSize = window.innerWidth >= designWidth 
      ? baseSize
      : (window.innerWidth / designWidth) * baseSize
  }
  document.documentElement.style.fontSize = fontSize + 'px'
}

setRootFontSize()

// 当屏幕大小变化时，调用
window.addEventListener('resize', () => {
  setRootFontSize ()
})