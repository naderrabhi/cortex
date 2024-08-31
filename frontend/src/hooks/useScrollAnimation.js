import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const useScrollAnimation = (element) => {
    const myRef = useRef(element);
    const [scrollDirection, setScrollDirection] = useState('down');
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    const [isVisible, setIsVisible] = useState(false);
  
    const isInView = useInView(myRef, { triggerOnce: false, threshold: 0.1 });
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > prevScrollPos) {
          setScrollDirection('down');
        } else {
          setScrollDirection('up');
        }
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);
  
    useEffect(() => {
      if (scrollDirection === 'up') {
        setIsVisible(false);
      }
    }, [scrollDirection]);
  
    useEffect(() => {
      if (isInView && scrollDirection === 'down') {
        setIsVisible(true);
      } else if (isInView && scrollDirection === 'up') {
        setIsVisible(true);
      } else if (!isInView && scrollDirection === 'up') {
        setIsVisible(true);
      }else {
        setIsVisible(false);
      }
    }, [isInView, scrollDirection]);

  return { myRef, isVisible };
};

  

export default useScrollAnimation;
