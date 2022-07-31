window.addEventListener('DOMContentLoaded', function () {
  const replacement = function (selector: string, text: string) {
    const element = document.querySelector(`#${selector}`)
    if (element) element.innerHTML = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replacement(`${dependency}-version`, process.versions[dependency])
  }
})

export {}
