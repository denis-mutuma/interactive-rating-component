import thankyouImage from "../Images/illustration-thank-you.svg"

export default function ThankYou({ value }) {
    return (
        <div className="container">
            <div className="rating--content">
                <img />
                <div className="thank--you--div" >
                    <img className="thank--you--image" src={thankyouImage}></img>
                    <div className="thank--you--rating">
                        {value > 0 ? <div>You rated us {value} out of 5 stars</div> : <div>Thank you for your feedback</div>}
                    </div>
                    <div className="thank--you">
                        <h1>Thank you!</h1>
                    </div>
                    <div>
                        <p id="thankyou--paragraph">We appreciate you taking time to give a rating.
                            If you ever need more support, don't hesitate
                            to get in touch!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}