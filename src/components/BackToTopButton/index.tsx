import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import styled from "styled-components";

export const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <BackButton style={{display: visible ? 'inline' : 'none'}}>
     <AiOutlineArrowUp onClick={scrollToTop} />
    </BackButton>
  );
}

const BackButton = styled.div`
  position: fixed; 
   width: 50px;
   height: 50px;
   right: 5%;
   bottom: 40px;
   border-radius: 50%;
   font-size: 2.5rem; 
   z-index: 1;
   cursor: pointer;
   color: var(--purple-600);
   background-color: var(--navbar);

   display: flex;
   align-items: center;
   justify-content: center;
   text-align: center;
`