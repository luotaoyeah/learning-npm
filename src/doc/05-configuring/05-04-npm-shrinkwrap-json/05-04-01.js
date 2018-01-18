/*
 * Configuring NPM
 *     npm-shrinkwrap.json
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * npm-shrinkwrap.json 和 package-lock.json 的文件内容是完全一样的，区别在于：
   *
   *     1. 执行 $ npm shrinkwrap 命令之后，生成 npm-shrinkwrap.json 文件，
   *        执行任意会修改 node_modules 和 package.json 的命令之后，生成 package-lock.json 文件
   *
   *        如果 package-lock.json 已经存在了，则执行 $ npm shrinkwrap 之后，
   *        package-lock.json 会被重命名为 npm-shrinkwrap.json
   *
   *     2. npm-shrinkwrap.json 可以发布到 registry，
   *        package-lock.json 不能被发布到 registry
   *
   *     3. 如果 npm-shrinkwrap.json 和 package-lock.json 同时存在，
   *        则 package-lcok.json 会被忽略
   */
}
