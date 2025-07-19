import { Col, Row, } from 'react-bootstrap';
import './Home.css'


const Home = () => {
  return (
    <>
      <div className="top">
        <h1>
          Dashboard
        </h1>
      </div>
      <div className='middle'>
        <div className='sec'>
          <div className='minsec'></div>
          <div className='minsec'></div>
        </div>
        <div className='sec'>
          <div className='minsec'></div>
          <div className='minsec'></div>
          <div className='minsec'></div>
        </div>
      </div>
      <div className='middle2'>
        <div className='m2left'></div>
        <div className='m2right'>
          <div className='m2rightchild'></div>
          <div className='m2rightchild'></div>
          <div className='m2rightchild'></div>
        </div>
      </div>
    </>
  )
};

export default Home;
