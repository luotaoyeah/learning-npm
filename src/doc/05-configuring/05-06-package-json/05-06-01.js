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
    ],
    /*
     * files 属性用来指定哪些文件`会`被打包
     * 语法格式跟 .gitignore 一致，默认值为 ["*"]，即打包所有文件
     *
     * 相反的，.npmignore 文件用来指定哪些文件`不`被打包，
     * 当 .npmignore 不存在时，会使用 .gitignore 的内容作为 .npmignore 的默认内容
     *
     * 当某个文件同时出现在 files 和 .npmignore 中时，该文件`会`被打包
     *
     * 有些文件不会受 files 和 .npmignore 的影响，始终都`会`被打包：
     *     package.json
     *     README
     *     CHANGES / CHANGELOG / HISTORY
     *     LICENSE / LICENCE
     *     NOTICE
     *     package.json#main 属性指定的文件
     * 除了 package.json 之外，其他的文件，文件名`不`区分大小写，且可以是任意的后缀
     *
     * 有些文件不会受 files 和 .npmignore 的影响，始终都`不会`被打包：
     *     .git
     *     .svn
     *     .hg
     *     .lock-wscript
     *     .wafpickle-N
     *     .*.swp
     *     .DS_Store
     *     ._*
     *     .npmrc
     *     CVS
     *     npm-debug.log
     *     node_modules
     *     config.gypi
     *     *.orig
     *     package-lock.json
     */
    files: ["*"],
    /*
     * 用来指定模块的入口
     * 入口文件的地址是相对于项目的根目录的
     * 如下，如果指定 main 为 dist/index.js，
     *     则当用户引入模块时：import "<pkgname>"，
     *     实际上相当于：     import "<pkgname>/dist/index.js"
     */
    main: "dist/index.js",
    /*
     * 用来指定用于浏览器的脚本的文件地址
     * browser 跟 main 的区别：
     *     当在 nodejs 环境下引入模块时，会使用 main 属性，
     *     当在浏览器环境下引入脚本时，会使用 browser 属性
     *
     * 比如使用 webpack 打包时，
     *     如果指定 target 为 node，则引入模块时会使用 main 属性，
     *     如果指定 target 为 browser，则引入模块时会使用 browser 属性
     *
     * 参考 https://github.com/defunctzombie/package-browser-field-spec
     */
    browser: "dist/index-browser.js"
  };
}
