/*
 * Configuring NPM
 *     Folder Structures Used by NPM
 *         prefix
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 通过 $ npm config get prefix 查看 prefix 配置，
   * 在 windows 平台上，prefix 的值为 nodejs 的安装位置：C:\Program Files\nodejs
   * 当安装全局包时，就会安装到这个目录下面（C:\Program Files\nodejs\node_modules），
   *
   * 如果安装的是 scoped package，则会多一层目录，
   *     比如，使用命令 $ npm install @x/y -g 安装之后，
   *     会安装到 C:\Program Files\nodejs\node_modules\@x\y 目录下面
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 对于可执行的包，
   *     全局包，其可执行文件位于 {prefix} 目录下面（windows），
   *     本地包，其可执行文件位于 node_modules/.bin 目录下面，
   */
}
