/*
 * Packages and Modules
 *     Contributing Packages to The Registry
 *         Specifying dependencies and devDependencies in a package.json File
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * package.json 文件中的 dependencies 和 devDependencies 属性，
   * 用来指定项目的依赖包，其中：
   *     dependencies 表示生产环境（production）需要依赖的包，
   *     devDependencies 表示开发环境（development）和测试环境（test）需要依赖的包，
   *
   * 当我们执行 $ npm install 命令时，这两个属性下面的包都会被安装，
   * 当使用命令 $ npm install <package> 或者 $ npm install <package> --save-prod 安装时，
   *     该包会被放到 dependencies 下面，
   * 当使用命令 $ npm install <package> -save-dev 安装时，
   *     该包会被放到 devDependencies 下面，
   */
}
