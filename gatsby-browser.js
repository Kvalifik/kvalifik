/* eslint-disable import/no-commonjs */
require('prismjs/themes/prism-tomorrow.css')

exports.onClientEntry = () => {
  if (typeof LogRocket !== 'undefined') {
    // eslint-disable-next-line no-undef
    LogRocket.init('kvalifik-aps/kvalifik')
  }
}
