/*
 * Packages and Modules
 *     Updating and Managing Your Published Packages
 *         Deprecating and Undeprecating Packages or Package Versions
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 如果要废弃某个包，可以使用命令：
   *     $ npm deprecate @luotao/learning-npm "IT IS DEPRECATED"
   * 如果要废弃包的某个版本，可以使用命令：
   *     $ npm deprecate @luotao/learning-npm@0.0.1 "DEPRECATED"
   *
   * 废弃之后的后果是：
   *     1. 在 npmjs 包的首页会提示该包已经被废弃了，
   *     2. 当其他人安装该包时，会有如下的提示：
   *        npm WARN deprecated @luotao/learning-npm@0.0.1: IT IS DEPRECATED
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 如果要将某个废弃的包或者包的某个版本恢复，使用的命令是一样的，区别在于：
   *     恢复时，后面的消息需要传空：$ npm deprecate <package> ""
   */
}
