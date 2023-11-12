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
  const days = 60;
const hoursInADay = 24;
const minutesInAnHour = 60;
const secondsInAMinute = 60;

useEffect(() => {
  localStorage.setItem('timer', JSON.stringify(time));
}, [time]);

const [time, setTime] = useState(JSON.parse(localStorage.getItem('timer')) || {
  days,
  hours: hoursInADay,
  minutes: minutesInAnHour, 
  seconds:secondsInAMinute
});

useEffect(() => {
  const interval = setInterval(() => {
    setTime((prevTime) => {
      const newTime = { ...prevTime };

      // Count down seconds
      if (newTime.seconds > 0) {
        newTime.seconds--;
      } else {
        newTime.seconds = 59;

        // Count down minutes
        if (newTime.minutes > 0) {
          newTime.minutes--;
        } else {
          newTime.minutes = 59;

          // Count down hours
          if (newTime.hours > 0) {
            newTime.hours--;
          } else {
            newTime.hours = 23;

            // Count down days
            if (newTime.days > 0) {
              newTime.days--;
            } else {
              // Countdown complete
              clearInterval(interval);
            }
          }
        }
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