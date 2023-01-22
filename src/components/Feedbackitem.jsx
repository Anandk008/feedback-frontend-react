import Card from './shared/Card'
import propTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function Feedbackitem({item, handleDelete}) {
  const {deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
        <div className="num-display"> {item.rating} </div>
        <button className="close">
          <FaTimes onClick={() => deleteFeedback(item.id)} color='purple'/>
        </button>
        <button className="edit">
          <FaEdit onClick={() => editFeedback(item)} color='purple' />
        </button>
      <div className="text-display"> {item.text} </div>
    </Card>
  )
}
Feedbackitem.propTypes = {
  item: propTypes.object.isRequired
}

export default Feedbackitem
