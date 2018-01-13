/*
 * Packages and Modules
 *     Contributing Packages to The Registry
 *         Creating Node.js Modules
 */

const foo = require("./03-02-03-01").foo;

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 一个 module 的 package.json 的 main 属性用来指定这个 module 的入口文件，
   * 如果不设置 main 属性，则表示使用它的默认值（"main": "index.js"）
   */
  console.assert(foo() === "FOO");
}
