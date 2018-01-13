/*
 * Packages and Modules
 *     Contributing Packages to The Registry
 *         Creating a package.json File
 *             Customizing the package.json questionnaire
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 使用命令 $ npm init 创建 package.json 文件时，需要回答很多的问题，
   * 这些问题是可以自定义的，如何自定义？
   *     1. 在 %HOME% 文件夹（C:\Users\Administrator）下创建一个文件：.npm-init.js
   *     2. 修改文件内容为 module.exports = prompt("FOO", "BAR");
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果想在 package.json 中添加自定义的属性，需要修改 .npm-init.js 文件如下：
   *     module.exports = { "FOO": "BAR" }
   */
}
