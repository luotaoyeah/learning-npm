/*
 * Configuring NPM
 *     package-lock.json
 *         file format
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   *
   */

  const lock = {
    /*
     * 包名，跟 package.json 中的 name 一致
     */
    name: "@luotao/learning-npm",
    /*
     * 版本，跟 package.json 中的 version 一致
     */
    version: "0.0.2",
    /*
     * 该文件的版本
     */
    lockfileVersion: 1,
    /*
     * 所有依赖
     */
    dependencies: {
      foo: {
        /*
         * 包的版本
         */
        version: "0.0.1",
        integrity: "sha512-XXX==",
        /*
         * 压缩包的 URL 地址
         */
        resolved: "https://registry.npmjs.org/foo/-/foo-0.0.1.tgz",
        /*
         *
         */
        dev: true,
        /*
         *
         */
        optional: true,
        /*
         * requires 表示该包的 package.json 文件中的 dependencies 下面的内容
         */
        requires: {
          x: "0.0.1",
          y: "0.0.2"
        },
        /*
         * dependencies 表示该包的目录下的 node_modules 目录下实际安装的包的情况
         */
        dependencies: {}
      }
    }
  };
}
