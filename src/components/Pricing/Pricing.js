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
  const day = 60;
  const hour =  day * 24;
  const minutes = hour * 60;
  const second = minutes * 60;

  const [time, setTime] = useState({
    days: day,
    hours: hour,
    minutes: minutes,
    seconds: second,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = { ...prevTime };
        newTime.seconds--;
        if (newTime.seconds === 60) {
          newTime.seconds = 0;
          newTime.minutes--;
        }
        if (newTime.minutes === 60) {
          newTime.minutes = 0;
          newTime.hours--;
        }
        if (newTime.hours === 24) {
          newTime.hours = 0;
          newTime.days--;
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Coming Soon...</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
             
                </PricingCardIcon>
                <PricingCardPlan>Days</PricingCardPlan>
                <PricingCardCost>{time.days}</PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                 
                </PricingCardIcon>
                <PricingCardPlan>Hours</PricingCardPlan>
                <PricingCardCost>{time.hours}</PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
               
                </PricingCardIcon>
                <PricingCardPlan>Minutes</PricingCardPlan>
                <PricingCardCost>{time.minutes}</PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                
                </PricingCardIcon>
                <PricingCardPlan>Seconds</PricingCardPlan>
                <PricingCardCost>{time.seconds}</PricingCardCost>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing