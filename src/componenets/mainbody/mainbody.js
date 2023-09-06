import './mainbody.css';
import shoesimage from '../shoe_image.png'
import amazaonimage from '../amazon.png'
import flipkartimage from '../flipkart.png'

function Mainbody() {
  return (
    <div className='bodyarea'>
      <div className='textarea'>
        <div className='headingoftextarea'>YOUR FEET DESERVE THE BEST</div>

        <div>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</div>


        <div className='btnareaoftextarea'>
          <button className='redbtn'>Shop Now</button>
          <button className='whitebtn'>Category</button>
        </div>
        <div className='againparaoftextarea'>Also Available On</div>
        <div>
          <img src={flipkartimage} />
          <img className='leftsidepush' src={amazaonimage} />
        </div>
      </div>
      <div className='imagearea'>
        <img src={shoesimage} />
      </div>
    </div>
  );
}

export default Mainbody;
