import './App.css'
import ReviewCard from './components/ReviewCard'

function App() {

  return (
    <>
      <div className='flex justify-center '>
        <ReviewCard title={"Amount Pending"} amount={"8,23,534"} />
      </div>
    </>
  )
}

export default App
