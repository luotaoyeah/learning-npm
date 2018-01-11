/*
 * About Two-Factor Authentication
 */

console.log("\n-------------------------------------------------- 01");
/*
 * 2FA（Two-Factor Authentication，双因子认证），
 * 即同时使用 账号密码 + 其他方式 来进行认证，提高安全性，
 * npm 的 2FA 有两种模式：
 *
 *     1. authorization only
 *        涉及到的命令有：
 *            1. npm login（登录）
 *            2. npm profile set（修改 profile，包括密码）
 *            3. npm profile enable-2fa [auth-only|auth-and-writes]（修改 2FA 的模式）
 *            4. npm profile disable-2fa（禁用 2FA）
 *
 *     2. authorization and writes
 *        涉及到的命令有：
 *            1. npm login（登录）
 *            2. npm profile set（修改 profile，包括密码）
 *            3. npm profile enable-2fa [auth-only|auth-and-writes]（修改 2FA 的模式）
 *            4. npm profile disable-2fa（禁用 2FA）
 *
 *            5. npm token create（创建 token）
 *            6. npm token revoke（删除 token）
 *            7. npm publish（发布包）
 *            8. npm unpublish（取消发布包）
 *            9. npm deprecate（废弃包）
 *           10. npm access public/restricted（更改包的可见性）
 *           11. npm access grant/revoke（修改账号和团队对包的访问权限）
 */
