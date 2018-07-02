export default (element, modal) => {
  var i = 0
  for (i = 0; i < element.length; i++) {
    element[i].onmousemove = (e) => {
      const scrollBody = document.documentElement && document.documentElement.scrollTop || document.body.scrollTop
      const x = e.pageX - e.target.offsetLeft
      const y = modal && e.pageY - e.target.offsetTop + modal.scrollTop - scrollBody || e.pageY - e.target.offsetTop - scrollBody
      e.target.style.setProperty('--x', `${x}px`)
      e.target.style.setProperty('--y', `${y}px`)
    }
  }
}
