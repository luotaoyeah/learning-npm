/*
 * Packages and Modules
 *     Introduction to Packages and Modules
 *         About Packages and Modules
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * package 和 module 是有区别的，
   * 一个 package 必须包含 package.json 文件，
   * package 的具体格式有多种形式：
   *     a. 一个包含 package.json 文件的目录
   *     b. 一个压缩包（gzip），其中包含了（a）
   *     c. 一个 URL 地址，指向（b）
   *     d. 一个以 <name>@<version> 的形式发布到 registry 的包，其 URL 地址为（c）
   *     e. <name>@<tag>，其指向的是（d）
   *     f. <name>，以 <name>@latest 的形式指向（e）
   *     g. 一个指向（a）的 git 地址
   *
   * 其中（g）中的 git 地址有下面四种形式：
   *     git://github.com/user/project.git#commit-ish
   *     git+ssh://user@hostname:project.git#commit-ish
   *     git+http://user@hostname/project/blah.git#commit-ish
   *     git+https://user@hostname/project/blah.git#commit-ish
   *
   * 其中的 commit-ish 可以是一个 branch，tag，sha，具体的要求跟 git checkout 后面的参数一样
   */
}

console.log("\n-------------------------------------------------- 02");
{
  /*
   * module 指的是 nodejs 中的模块，它可以是下面几种形式：
   *     1. 一个 JS 文件
   *     2. 一个包含 index.js 的文件夹
   *     3. 一个包含 package.json 的文件夹，
   *        其中 package.json 中的 main 需要指向某个文件
   *
   * 因为一个 module 可能没有 package.json 文件，因此一个 module 可能不是一个 package
   */
}
