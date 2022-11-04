const path = require('path')

module.exports = {
	indexHtml: (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'))
	},
	indexCss: (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.css'))
	},
	indexJs: (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.js'))
	}
}