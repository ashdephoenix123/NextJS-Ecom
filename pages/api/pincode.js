import pincode from '../pincode.json'
export default async function handler(req, res) {
    res.status(200).json(pincode)
}
