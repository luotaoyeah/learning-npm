/*
 * Configuring NPM
 *     package-lock.json
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * package-lock.json 文件，
   * 精确地记录了当前的包依赖树，精确地记录了包之间的依赖关系，以及每个包当前安装的具体版本，
   *
   * 它应该被提交到代码仓库，
   *
   * 当执行任何会修改 node_modules 目录或者 package.json 文件的命令时，
   * package-lock.json 文件就会自动生成（如果当前不存在），或者自动进行更新（如果已经存在）
   *
   * package-lock.json 文件的作用：
   *
   *     1. 使得后续安装（其他开发，CI，CD）的包的版本可以跟当前保持完全一致，
   *     2. 通过记录 package-lock.json 的历史版本，可以精确地对依赖的版本进行追踪，
   *     3. 优化包的安装过程，避免重复解析已经安装过的包的元信息，
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * package-lock.json 和 npm-shrinkwrap.json 的区别：
   *     1. 从文件内容上来看，它们完全一样，
   *     2. 如果它们同时存在，则 package-lock.json 会被忽略，
   *     3. package-lock.json 不会被发布到包仓库，
   *     4. 如果 package-lock.json 没有位于项目根目录，则会被忽略，
   */
}
