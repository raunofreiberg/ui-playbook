const withMDX = require('@next/mdx')({
	extension: /\.(md|mdx)$/,
});

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	webpack(config) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000,
				},
			},
		});
		return config;
	},
});
