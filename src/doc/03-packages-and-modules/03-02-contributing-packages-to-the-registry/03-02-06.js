/*
 * Packages and Modules
 *     Contributing Packages to The Registry
 *         About Semantic Versioning
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * package 的版本应该遵循 SemVer（Sematic Version）规则，即：
   *     1. 版本号包含三个部分：major.minor.patch，其中：
   *         1. patch：向后兼容的 BUG 修复，
   *         2. minor：向后兼容的新功能添加，
   *         3. major：不向后兼容
   *
   * 可以通过命令 $ npm version [major | minor | patch] 来更新当前项目的版本
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * semver 版本常用的一些规则如下，可以通过 https://semver.npmjs.com/ 进行试验：
   *     1. 1.2.3           1.2.3                       等于指定版本，major/minor/patch 都必须一致
   *     2. ^1.2.3          1.2.3 <= version < 2.0.0    大于等于指定版本，但是 major 必须一致
   *     3. ~1.2.3          1.2.3 <= version < 1.3.0    大于等于指定版本，但是 major 和 minor 必须一致
   *     4. 1.2.3 - 4.5.6   1.2.3 <= version <= 4.5.6   指定版本范围
   */
}
