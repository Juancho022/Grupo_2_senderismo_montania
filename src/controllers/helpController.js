const helpController = {
	ayuda: (req, res) => {
		res.render('help.ejs');
	}
};

module.exports = helpController;