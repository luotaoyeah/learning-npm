/*
 * Configuring NPM
 *     npmrc（NPM Config File）
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * NPM 的配置有三种指定的方式：
   *     1. 命令参数
   *        如：$ npm install foo --global 中的 --global 就是配置参数
   *     2. 环境变量
   *     3. 配置文件
   *
   * 其中配置文件会按照优先级，解析四个位置的配置文件，按照优先级从高到低：
   *
   *     1. project config
   *          位于当前项目根目录的 .npmrc 文件
   *
   *     2. user config
   *          可以通过 $ npm config get userconfig 查看配置文件的位置，
   *          在 windows 平台默认为 C:\Users\<user>\.npmrc
   *
   *     3. global config
   *          可以通过 $ npm config get globalconfig 查看配置文件的位置，
   *          在 windows 平台默认为 C:\Program Files\nodejs\etc\npmrc
   *
   *     4. npm builtin config
   *          不可更改，可以通过 $ npm config list -l 查看所有的默认配置
   */
}
