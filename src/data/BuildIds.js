const Version = require('../model/Version');
/**
 * BuildIds utility
 *
 * @internal
 */
class BuildIds {
  /**
   *
   * @param {string} id
   *
   * @return {Version|undefined}
   */
  static identify(id) {
    const build = BuildIds.ANDROID_BROWSERS[id];
    if (build) {
      if (Array.isArray(build)) {
        return new Version(build);
      } else {
        return new Version({value: build});
      }
    }
  }
}
BuildIds.ANDROID_BUILDS = require('../../data/build-android').ANDROID_BUILDS;

module.exports = BuildIds;
