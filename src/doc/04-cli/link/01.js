/*
 * CLI
 *     link
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * $ npm link 用来创建符号链接（symlink）（Symbolic Link）
   * 操作步骤如下，分为两个步骤：
   *
   *     1. 创建：在 package01 的根目录执行 $ npm link 命令，
   *             会在 C:\Program Files\nodejs\node_modules 目录下创建一个 symlink，
   *             这个 symlink 指向 package01 的根目录
   *
   *     2. 使用：在 package02 的根目录执行 $ npm link package01 命令，
   *             会在 package02/node_modules 目录下创建一个 symlink，
   *             这个 symlink 指向第一步创建的 symlink
   *
   * 这样就相当于在 package02 的 node_modules 目录下存在 package01 这个包，
   * 我们在 package02 的代码中就可以正常使用 package01 这个包，
   * 同时，如果修改了 package01 中的代码，在 package02 中可以自动感知到这些修改，
   * 因此，$ npm link 命令可以方便地用来进行包的本地测试
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果要取消 $npm link 操作，操作如下：
   *
   *     1.（对应于上面的步骤2）
   *         1. 可以直接删除 package02/node_modules/package01 目录，
   *         2. 或者在 package02 根目录执行 $ npm uninstall @package01
   *            类似于卸载某个包
   *
   *     2.（对应于上面的步骤1）
   *         1. 可以直接删除 C:\Program Files\nodejs\node_modules\package01 目录，
   *         2. 或者执行 $ npm uninstall package01 -g
   *            类似于全局卸载某个包
   */
}
