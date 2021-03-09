(function(history){
  if(!history) return;
  
  var pushState = history.pushState;
  history.pushState = function(state) {
      if (typeof history.onpushstate == "function") {
          history.onpushstate({state: state});
      }
        
      
    if(window.Appcues) {
      console.log('appcues page event');
      window.Appcues.page();
    }

    return pushState.apply(history, arguments);
  };
})(window.history);