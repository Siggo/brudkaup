const initialMisc = {
  flipped: false
}

export default (misc = initialMisc, action) => {
  switch (action.type) {
    case 'FLIP_VIEW':
      return Object.assign({}, misc, {
        flipped: !misc.flipped
      })

    default:
      return misc
  }
}
