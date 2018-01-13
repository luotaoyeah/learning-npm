/*
 * Packages and Modules
 *     Contributing Packages to The Registry
 *         Creating a package.json File
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 发布到仓库的包必须包含 package.json 文件，
   * package.json 中，name 和 version 是必填的，其中：
   *     name：      表示包名，可以包含（小写字母，-，_），不能包含空格，
   *     version：   表示版本，必须满足 SemVer（Sematic Version） 规则
   *     author：    表示作者，格式为：name[ <email>][ (website)]，其中 email 和 website 是可选的
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * 可以通过命令来创建一个 package.json 文件：$ npm init
   * 如果所有的配置都希望使用默认值，则可以使用命令：$ npm init --yes
   */
}

console.log("\n-------------------------------------------------- 03");
{
  /*
   * 可以配置 npm init 命令的默认值，
   * 比如配置初始化时默认的用户：$ npm set init.author.name "luotao"
   * 比如配置初始化时默认的邮箱：$ npm set init.author.email "luotaoyeah@gmail.com"
   *
   * 这样配置之后，如果使用命令 $ npm init --yes 来初始化一个 package.json 文件，
   * 则其中的 author 就为 "author": "luotao <luotaoyeah@gmail.com>"
   */
}
