function check_url_validaty(url) {
    // Regex to check validaty of url
    var urlRegex = /^(?:https?|ftp):\/\/(?:\w+:{0,1}\w*@)?(?:[a-zA-Z0-9.-]+)(?::[0-9]+)?(?:\/|\/(?:[\w#!:.?+=&%@!\-\/]))?$/;
    
    // Test the URL against the regular expression
    return urlRegex.test(url);
  }
  
export { check_url_validaty};
