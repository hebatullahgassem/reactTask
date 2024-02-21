import './Card.css';
import React, {useState} from 'react';

const CardComponent = () => {
  const [openCard, setOpenCard] = useState(null);
  const [className, setClassName] = useState('card');

  const handleClick = (cardID) => {
    if (openCard === cardID){
      setOpenCard(null);
      setClassName('card');
    } else {
      setOpenCard(cardID);
      setClassName('card2');
    }
  }

  return(
    <div className='cardsList'>
      <div className={className} onClick={() => handleClick(1)}>
        <div className='head'>
          <p className='number'>01</p>
          <h1 className='title'>Where are these chairs assembled?</h1>
          <button onClick={handleClick}>{openCard === 1 ? '-' : '+'}</button>
        </div>
        {openCard === 1 && <p className='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspematur veniam repellendus.</p>}
      </div>
      <div className={className} onClick={() => handleClick(2)}>
        <div className='head'>
          <p className='number'>02</p>
          <h1 className='title'>How long do I have to return my chair?</h1>
          <button onClick={handleClick}>{openCard === 2 ? '-' : '+'}</button>
        </div>
        {openCard === 2 && <p className='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspematur veniam repellendus.</p>}
      </div>
      <div className={className} onClick={() => handleClick(3)}>
        <div className='head'>
            <p className='number'>03</p>
            <h1 className='title'>Do you ship to countries outside the EU?</h1>
            <button onClick={handleClick}>{openCard===3 ? '-' : '+'}</button>
          </div>
        {openCard === 3 && <p className='content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspematur veniam repellendus.</p>}
      </div>
    </div>
  );
}






export default CardComponent;

// import './Card.css';
// import React, {useState} from 'react';

// export default function  Card ({children}){
//   const [isOpen, setIsOpen] = useState(false);
//   const [className, setClassName] = useState('card');

//   function displayContent (e){
//     //toggle
//     setIsOpen(!isOpen);
//     {isOpen ? setClassName('card') : setClassName('card2')}
//   }

//   return(
//     <>
//     <div className={className} onClick={displayContent}>
//       <div className='head'>
//       <p className="number">{children[0]}</p> 
//       <h1 className="title">{children[1]}</h1>
//       <button onClick={displayContent}>{isOpen ? '-' : '+'}</button>
//       </div>
//         {isOpen && <p className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspematur veniam repellendus.</p>}
//       </div>
//     </>
//   );
// }