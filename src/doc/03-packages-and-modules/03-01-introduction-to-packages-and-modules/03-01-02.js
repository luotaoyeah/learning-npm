/*
 * Packages and Modules
 *     Introduction to Packages and Modules
 *         About Scopes
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * scope 可以理解为命名空间，可以用来防止包名冲突，
   *    有些包是 unscoped 的，比如：npm
   *    有些包是 scoped 的，  比如：@types/node，
   *        其中的 types 就是这个包的 scope
   *
   * 当注册了 npmjs 的账号之后，默认就会有一个以账号名称作为名称的 scope，
   * 比如我的账号名为 foo，那么我就可以使用 foo 这个 scope 来发布我的包，
   * 比如：@foo/x，@foo/y 等等
   *
   * 同时，我也可以在我的账号下，创建组织（org），比如创建一个名为 bar 的组织，
   * 那么我就可以使用 bar 这个 scope 来发布我的包，
   * 比如：@bar/x，@bar/y 等等
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * unscoped 和 scoped 包的区别：
   *     1. unscoped 包必须是 public 的，
   *     2. scoped 包默认是 private 的，如果需要发布为 public 的需要显式指定（--access public），
   *     3. private 包必须是 scoped 的，
   */
}
