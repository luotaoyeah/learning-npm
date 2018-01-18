/*
 * Configuring NPM
 *     Package Lockfiles
 *         preshrinkwrap
 *         shrinkwrap
 *         postshrinkwrap
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 当执行安装操作时，会更新 package-lock.json（或者 npm-shrinkwrap.json）文件，
   * 这个过程称之为 shrinkwrap，
   * 我们可以在 scripts 中添加 preshrinkwrap，shrinkwrap，postshrinkwrap 这三个命令，
   * 来监听这个 shrinkwrap 过程，
   */
}
