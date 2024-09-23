module.exports = {
	privateKeyPath: 'C:/ssh/id_rsa', // 本地私钥地址，位置一般在C:/Users/xxx/.ssh/id_rsa，建议使用 privateKeyPath，比直接提供 password 更安全
	passphrase: '', // 本地私钥密码，非必填，有私钥则配置
	projectName: '', // 项目名称
	dev: {
		// 测试环境
		name: '测试环境',
		preRun: '', // 部署前需要执行的脚本，可为空
		host: '', // 测试服务器地址
		port: 22, // ssh port，一般默认22
		username: '', // 登录服务器用户名
		password: '', // 登录服务器密码
		distPath: 'dist', // 本地打包dist目录
		webDir: '', // // 测试环境服务器地址

		bakOld: true, // 是否备份旧的，保留上一份旧的
		// 部署预览
		preview: {
			url: '', // 部署后检查部署效果，查看的网页地址
			openInBrowser: false, // 部署完成后是否自动打开部署的网页地址
		},
	},
	prod: {
		// 线上环境
		name: '线上环境',
		preRun: '', // 部署前需要执行的脚本，可为空
		host: '', // 线上服务器地址
		port: 22, // ssh port，一般默认22
		username: '', // 登录服务器用户名
		password: '', // 登录服务器密码
		distPath: 'dist', // 本地打包dist目录
		webDir: '', // // 线上环境服务器地址

		bakOld: true, // 是否备份旧的，保留上一份旧的
		// 部署预览
		preview: {
			url: '', // 部署后检查部署效果，查看的网页地址
			openInBrowser: false, // 部署完成后是否自动打开部署的网页地址
		},
	},
};
