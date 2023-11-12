import React , { useState, useEffect }from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

const Pricing = () => {
  
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const targetDate = new Date(2023, 12, 11); // Months are zero-based, so 9 is October
  
      const difference = targetDate - currentDate;
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      console.log(timeLeft);
      return timeLeft;
    };
  
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
      const updateTimer = () => {
        const timeLeft = calculateTimeLeft();
        setDays(timeLeft.days);
        setHours(timeLeft.hours);
        setMinutes(timeLeft.minutes);
        setSeconds(timeLeft.seconds);
      };
  
      const timer = setInterval(updateTimer, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Cimpla Launching Soon In...</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
             
                </PricingCardIcon>
                <PricingCardPlan>Days</PricingCardPlan>
                <PricingCardCost>
                  {days}
                </PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                 
                </PricingCardIcon>
                <PricingCardPlan>Hours</PricingCardPlan>
                <PricingCardCost>{hours}</PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
               
                </PricingCardIcon>
                <PricingCardPlan>Minutes</PricingCardPlan>
                <PricingCardCost>{minutes}</PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                
                </PricingCardIcon>
                <PricingCardPlan>Seconds</PricingCardPlan>
                <PricingCardCost>{seconds}</PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing