
import PrimaryCard from '../../components/molecule/card'

export default function Portfolio ()  {
    const handleclick = () =>{

    }
  return (
    <div className='grid grid-cols-3'>
    <div>
    <PrimaryCard
    image="https://theskymalviya-portfolio.netlify.app/img/portfolio3.jpg"
    title="Smart Eco-friendly Wellness Monitor for New Normal"
    onClick={handleclick}
    />
  </div>
  </div>
  )
}
