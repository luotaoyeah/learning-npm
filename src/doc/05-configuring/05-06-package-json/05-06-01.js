/*
 * Configuring NPM
 *     package.json
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * package.json 文件的内容必须符合 JSON 规范，而不仅仅是一个 JS 对象，
   * 比如，所有的属性名都必须使用双引号包裹
   */

  const pkg = {
    /*
     * 包名
     * 只能包含小写字母，
     * 不能以 . 或 _ 开头，
     * 不能超过 214 个字符，
     */
    name: "@luotao/learning-npm",
    /*
     * 版本
     * 如果要将包发布到 registry 中，
     * 则 name 和 version 是必须的，
     * version 属性的值需要符合 semver 规则
     */
    version: "0.0.2",
    /*
     * 描述信息
     * 在 npmjs 上搜索包时，会显示该描述信息
     */
    description: "@luotao/learning-npm",
    /*
     * 关键字
     * 是一个字符串数组，
     * 使用 $ npm search 命令搜索包时，会搜索该属性中的关键字
     */
    keywords: ["xxx", "yyy"],
    /*
     * 首页
     * 项目首页地址
     */
    homepage: "<url>",
    /*
     * 项目的 issue 地址，以及报告 issue 的邮箱
     * 如果只指定 url 地址，可以直接使用字符串的形式（bugs: "http://xxx"），
     * 当执行 $ npm bugs <pkgname> 命令时，会自动使用浏览器打开这个地址
     */
    bugs: {
      url: "<url>",
      email: "<email>"
    },
    /*
     * 许可协议
     */
    license: "UNLICENSED",
    /*
     * 作者
     * 可以使用对象的形式（author: { name: "<name>", email: "<email>", url: "<url>" }）
     * 可以使用字符串的形式（author: "luotao[ <<email>>][ (<url>)]"）
     */
    author: {
      name: "<name>",
      email: "<email>",
      url: "<url>"
    },
    /*
     * 贡献者列表
     */
    contributors: [
      {
        name: "<name>",
        email: "<email>",
        url: "<url>"
      }
    ]
  };
}
