import './App.css';
import React from 'react'
import Rating from './Components/Rating'
import ThankYou from './Components/ThankYou'
import PropTypes from 'prop-types'

function App() {

  const [rating, setRating] = React.useState(0);
  const [submit, setSubmit] = React.useState(true);
  const [buttonClass, setButtonClass] = React.useState("circle circle--rating")

  const handleClick = (e) => {
    const buttons = document.getElementsByClassName("circle circle--rating--clicked")
    for (const button of buttons) {
      button.classList = "circle circle--rating"
    }
    e.target.classList = "circle circle--rating--clicked"
    setRating(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmit(!submit)
  }

  return (
    <div>
      {submit && <Rating value={rating} onClick={handleClick} onSubmit={handleSubmit} submit={true} />}
      {!submit && <ThankYou value={rating} />}
    </div>
  );
}

App.propTypes = {
  value: PropTypes.number.isRequired
}


export default App;
