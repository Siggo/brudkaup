export const flipp = (callback) => {
  // Debug stuff
  var secrets = []
  secrets.push({
    // ýkt flipp
    sequence: [70, 76, 73, 80, 80],
    callback: () => {
      callback()
    },
    index: 0
  })
  window.onkeyup = (e) => {
    var key = e.keyCode ? e.keyCode : e.which
    // console.log('key [' + e.key + ']:', key)
    secrets.forEach((secret) => {
      // Check if it's the right key in the sequence
      if (secret.sequence[secret.index] === key) {
        // Check if it's the last key in the sequence
        if (secret.index === (secret.sequence.length - 1)) {
          secret.index = 0
          secret.callback()
        } else {
          secret.index++
        }
      } else {
        secret.index = 0
      }
    })
  }
}
