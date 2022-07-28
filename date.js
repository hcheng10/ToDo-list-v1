
module.exports.getDate = function() {

  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long"
  }

  // for chinese, we could use "zh-CN", these are called "ISO 639-1 standard language codes"
  return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() { // module.exports = exports

  const today = new Date();
  const options = {
    weekday: "long",
  }

  return today.toLocaleDateString("en-US", options);
}
