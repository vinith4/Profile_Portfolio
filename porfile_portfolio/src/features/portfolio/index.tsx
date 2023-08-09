
import PrimaryCard from '../../components/molecule/card'
import covid from "../../assets/project_image/covid2.png"
import chat from "../../assets/project_image/chat.png"
import smartWellness from "../../assets/project_image/smart wellness system.jpeg"
import cabin from "../../assets/project_image/cabin.jpeg"
import cabinReport from "../../assets/project_image/Main report.pdf"
import { saveAs } from 'file-saver';

export default function Portfolio() {

  const handleCovid = () => {
    const URL = 'https://github.com/vinith4/COVID_VIEWER';
    window.open(URL, '_blank');
  };

  const handleCabin = () => {
    const documentUrl = cabinReport;
    const fileName = 'Smart Cabin Assistant Report';

    saveAs(documentUrl, fileName);
 
  };

  const handleChat = () => {
    const URL = 'https://github.com/vinith4/Chat-Application';
    window.open(URL, '_blank');
  };

  const handleWellness = () => {
    const URL = 'https://ieeexplore.ieee.org/document/9526433';
    window.open(URL, '_blank');
  };

 

  return (
    <div>
      <div className='pb-12'>
        <h1 className='text-center text-2xl md:text-4xl'>Recent Works</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-8 gap-8'>

        <div>
          <PrimaryCard
            image={covid}
            title="Covid Viewer"
            onClick={handleCovid}
          />
        </div>
        <div>
          <PrimaryCard
            image={chat}
            title="Chat Application"
            onClick={handleChat}
          />
        </div>
        <div>
          <PrimaryCard
            image={smartWellness}
            title="Smart Eco-friendly Wellness Monitor for New Normal"
            onClick={handleWellness}
          />
        </div>
        <div>
          <PrimaryCard
            image={cabin}
            title="Smart Cabin Assistant"
            onClick={handleCabin}
          />
        </div>
      </div>
    </div>
  )
}
