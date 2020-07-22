export default async (req, res) => {
	// 1. Destructure the email address from the request body.
	const { email } = req.body;

	if (!email) {
		// 2. Throw an error if an email wasn't provided.
		return res.status(400).json({ error: 'Email is required' });
	}

	console.log(process.env.MAILCHIMP_API_KEY);

	try {
		// 3. Fetch the environment variables.
		const LIST_ID = process.env.MAILCHIMP_LIST_ID;
		const API_KEY = process.env.MAILCHIMP_API_KEY;
		// 4. API keys are in the form <key>-us3.
		const DATACENTER = API_KEY.split('-')[1];

		// 5. The status of 'subscribed' is equivalent to a double opt-in.
		const data = {
			email_address: email,
			status: 'subscribed',
		};

		// 6. Send a POST request to Mailchimp.
		const response = await fetch(`https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
			body: JSON.stringify(data),
			headers: {
				Authorization: `apikey ${API_KEY}`,
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});

		console.log(response.statusText);

		// 7. Swallow any errors from Mailchimp and return a better error message.
		if (response.status >= 400) {
			return res.status(400).json({
				error: `There was an error subscribing to the newsletter. Shoot me an email at [freiberg.rauno@gmail.com] and I'll add you to the list.`,
			});
		}

		// 8. If we made it this far, it was a success! 🎉
		return res.status(201).json({ error: '' });
	} catch (error) {
		return res.status(500).json({ error: error.message || error.toString() });
	}
};
