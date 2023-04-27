const sgMail = require('@sendgrid/mail')

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg = {
                to: "akashsarki24@gmail.com", // Change to your recipient
                from: "mail@sharkk.studio",
                subject: req.body.subject,
                text: "req.body.message",
                html: `<strong>${req.body.message}</strong>`
            }
            await sgMail.send(msg)
            res.status(200).json({ success: true, message: 'Thank You for messaging Us!' })

        } else {
            throw new Error('Invalid request method')
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
