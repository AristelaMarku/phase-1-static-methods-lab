class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase()
  }
  static sanitize(string){
    return string.replace(/[^\w\s]/gi, '')
  }
}

Formatter.capitalize("alligator")