var request = require('request');

function remindBirthday(req, res) {
	var kerberos = req.query.kerberos;
	var test = (req.query.test == "true" || req.query.test);
	var birthdayURL = test ? "http://localhost:1337/birthday" : "http://72.29.29.198:1337/birthday"
    request.get(birthdayURL + "?kerberos=" + kerberos,  function(error, response, body) {
        if (error || response.statusCode != 200) {
            console.log(error);
            res.json(error || {});
            return;
        };
        res.json({success:true})
    })
}

exports.birthday = remindBirthday
