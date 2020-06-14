/* eslint-disable import/no-commonjs */
exports.onClientEntry = () => {
  if (typeof LogRocket !== 'undefined') {
    // eslint-disable-next-line no-undef
    LogRocket.init('kvalifik-aps/kvalifik')
  }
}
