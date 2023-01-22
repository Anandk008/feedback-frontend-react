import React from 'react'
import Feedbackitem from './Feedbackitem.jsx'
import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner.jsx'


function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext)

  if(!isLoading && (!feedback || feedback.length === 0)){
    return <p>No Feedback Yet</p>
  }
  
  return isLoading ? <Spinner /> : (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
        key={item.id}
        initial={{opacity: 0, duration: 0.8}}
        animate={{opacity: 1, duration:0.8}}
        exit={{opacity: 0, duration:0.8}}
        >
        <Feedbackitem key={item.id} item={item} />
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  )
}


export default FeedbackList
