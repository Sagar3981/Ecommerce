import { useState } from "react"

const Loginpage = () => {
    const [login, setLogin] = useState(false)
    const handleClick = () => {
        setLogin(true)
    }
    const handleOnClick = () => {
        setLogin(false)
    }
    return (
        <>
            <div className="loginCard">
                <div className="fullWhiteCrad">
                    <div className="blueCard">
                        <h1>{login ? "Sign Up" : "Login"}</h1>
                        <h5>{login ? "Looks like you're new here! Sign up to get started" : "Get access to your Orders, Wishlist and Recommendations"}</h5>
                        < div className="flipkartlogin">
                            <img src="/public/assets/loginPageImg/loginffkt-removebg-preview.png" alt="" />
                        </div>
                    </div>
                    <div className="whiteCard">
                        <div className="email-number">
                            <label htmlFor="">{login ? "Enter Email" : "Enter Email/Phone Number"}</label>
                            <br />
                            <input type="text" />
                        </div>
                        <p>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
                        <div className="otpBtn">
                            <button>{login ? "Continue" : "Request OTP"}</button>
                        </div>
                        {login && <div className="loginBtn">
                            <button onClick={handleOnClick}>Existing User?Login in</button>
                        </div>}
                        {!login && <div>
                            <h6 onClick={handleClick}>New to Flipkart? Create an account</h6>
                        </div>}

                    </div>
                </div>
            </div >
        </>
    )
}
export default Loginpage