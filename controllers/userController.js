class UserController {
    // Send OTP to user
    static userLogin = async (req, res) => {
        res.status(200).send({ "message": "OTP sent successfully" })
    }
}
export default UserController