const initialMisc = {
  flipped: false,
  lang: 'is'
}

export default (misc = initialMisc, action) => {
  switch (action.type) {
    case 'FLIP_VIEW':
      return Object.assign({}, misc, {
        flipped: !misc.flipped
      })
    case 'TOGGLE_LANGUAGE':
      return Object.assign({}, misc, {
        lang: action.lang
      }) 

    default:
      return misc
  }
}
