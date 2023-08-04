
import PrimaryBtn from '../../components/atom/button';
import { saveAs } from 'file-saver';
import vinith from "../../assets/Vinithkumar_S.pdf";
import { useNavigate } from 'react-router-dom';

export default function About() {
  const navigate =useNavigate();
  const handleDownload = () => {
    const documentUrl = vinith;
    const fileName = 'Vinithkumar_S.pdf';

    saveAs(documentUrl, fileName);
  };

  const hangleContact = () =>{
navigate("/contact")
  }

  return (
    <div>
      <PrimaryBtn
        title="Resume"
        onClick={handleDownload}
      />
      <PrimaryBtn
        title="Contact"
       onClick={hangleContact}
      />
    </div>
  );
}
