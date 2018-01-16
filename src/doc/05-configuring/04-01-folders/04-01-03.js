/*
 * Configuring NPM
 *     Folder Structures Used by NPM
 *         Cycles, Conflicts, and Folder Parsimony
 */

console.log("\n-------------------------------------------------- 01");
{
  /*
   * 因为 nodejs 的模块系统有这样的规则：
   *     在引入某个模块时，会首先在当前目录下的 node_modules 目录中寻找，
   *     如果没找到，会一直往上级目录的 node_modules 目录中寻找，
   *     直到找到这个模块，或者找到项目根目录下的 node_modules 目录，
   *
   * 在安装 NPM 包时，如何解决循环依赖，以及重复依赖的问题？利用的就是上面的规则，
   * 在安装某个包的依赖之前，会首先往上级目录寻找，如果找到了相同版本的包，则直接使用，
   * 如果在上级目录中没有找到对应的包，或者找到的包的版本不一致，
   * 才会在当前包的 node_modules 目录下安装这个依赖，
   */
}
