
export const miscActions = {
  flipView: function (flipped) {
    return {
      type: 'FLIP_VIEW'
    }
  },
  toggleLanguage: function(lang) {
    return {
      type: 'TOGGLE_LANGUAGE',
      lang
    }
  }
}
