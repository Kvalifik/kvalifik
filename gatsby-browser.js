exports.onClientEntry = () => {
  if(typeof LogRocket !== 'undefined'){
      LogRocket.init('kvalifik-aps/kvalifik');
  }
}
