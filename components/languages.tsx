'use client'
import { FC } from 'react'
import Popover from './ui/popover'
import PopoverDesc from './ui/popoverDesc'
import { Button } from './ui/button'
import { BarChartMixed, PieChartDonut } from '@/app/(root)/(routes)/customize/_components'
import toast from 'react-hot-toast'

// Arrow component
const Arrow: FC = () => (
  <p className="text-3xl mx-4">→</p>
)

// Define card styling with fixed width and height
const cardClass = "flex items-center justify-center p-6 border rounded-lg shadow-lg w-full h-full"; // Fixed width and height

const handleValidation = () => {
  toast.success('Validation successful!🍌');
};

const handlePost = () => {
  toast.success('Redirecting to Post page!🐦');
  window.open(`https://twitter.com/intent/tweet?text=We%27re%20excited%20about%20this%20goofy%20SaaS%20project%20and%20want%20to%20hear%20your%20thoughts%2C%20its%20about%20a%20banana%20that%20can%20talk%3F!%20Would%20you%20pay%20for%20a%20product%20like%20this%3F%20Let%20us%20know!%20%F0%9F%A4%94%F0%9F%8D%8C%20%23SaaS%20%23Innovation%20%23TechTalks`, '_blank');

};

const ComponentOne: FC = () => (
  <div className={`${cardClass}`}>
    <Popover />
  </div>
)

const ComponentTwo: FC = () => (
  <div className={`${cardClass}`}>
    <PopoverDesc />
  </div>
)

const ComponentThree: FC = () => (
  <div className={`${cardClass}`}>
    <Button onClick={handleValidation}>Validate!</Button>
  </div>
)

const FourthComponent: FC = () => (
  <div className="flex flex-col items-center p-6 border rounded-lg shadow-lg h-full w-full mt-8">
    <h3 className="text-xl font-bold mb-2">Report</h3>
    <BarChartMixed />
    <PieChartDonut/>
    <h3 className='text-md font-bold'>Generated Tweet:</h3>
    <div className='lg:max-w-xl mt-5'>
         <span className='underline text-md cursor-pointer' onClick={handlePost}>
     We're excited about this goofy SaaS project and want to hear your thoughts, its about a banana that can talk?! Would you pay for a product like this? Let us know! 🤔🍌 #SaaS #Innovation #TechTalks
     </span>    
     <br></br>      
    <Button  className='text-center' onClick={handlePost}
    >
    Tweet It!
    </Button></div>
  
    <p className="text-center mt-2">Description of the result or outcome of the previous steps.</p>
  </div>
)

export const Language: FC = () => {
  return (
    <section className="mt-64">
      <div className="flex justify-center items-center space-x-4">
        <ComponentOne />
        <Arrow />
        <ComponentTwo />
        <Arrow />
        <ComponentThree />
      </div>
      <div className="flex flex-col items-center mt-8">
        <p className="text-3xl mb-2">↓</p>
        <FourthComponent />
        <p className="text-3xl mt-2">↑</p>
      </div>
    </section>
  )
}