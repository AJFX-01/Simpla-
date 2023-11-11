import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import Counter  from "../../components/counter/counter";

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            {/* <InfoSection {...homeObjThree} /> */}
            {/* <InfoSection {...homeObjTwo} /> */}
            <Pricing />
            {/* <InfoSection {...homeObjFour} /> */}
        </>
    )
}

export default Home;