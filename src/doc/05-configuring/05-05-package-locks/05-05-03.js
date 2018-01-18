/*
 * Configuring NPM
 *     Package Lockfiles
 *         --no-save
 *         --no-shrinkwrap
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当执行 $ npm install，$ npm uninstall，$ npm update 这几个命令时，
   * 会自动更新 package.json 和 package-lock.json 文件，
   *
   * 如果想更新 package.json，但是不更新 package-lock.json，
   * 可以加上配置选项：--no-shrinkwrap
   *
   * 如果不想更新 package.json，也不更新 package-lock.json，
   * 可以加上配置选项：--no-save
   */
}
