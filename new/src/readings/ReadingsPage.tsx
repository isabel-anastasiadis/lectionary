
import { styled, dark, font } from '../stitches.config';
import { useState }  from 'react';
import Button from '../common/Button';
import Toggle from '../common/Toggle';
import Nav from '../common/Nav';
import Message from '../common/Message';
import Date from '../common/Date';
import Readings from './Readings'

const Wrapper = styled('div', {
  background: '$background',
  fontFamily: 'inter',
  height: '100%',
  padding: '30px',
});

const dateList = [
  'Wednesday, October 13, 2021',
  'Thursday, October 14, 2021',
  'Friday, October 15, 2021',
]

const todaysReadings = {
    morning: [
      {
        text: 'Psalm 111', 
        link: 'https://www.google.com'
      },
      {
        text: '2 Chronicles 29.1-19',
        link: 'https://www.google.com'
      },
      {
        text: 'John 13.21-30', 
        link: 'https://www.google.com'
      }
    ],
    evening: [
      {
        text: 'Psalm 119.129-152', 
        link: 'https://www.google.com'
      },
      {
        text: '2 Kings 18.13-end',
        link: 'https://www.google.com'
      },
      {
        text: 'Philippians 2.1-13', 
        link: 'https://www.google.com'
      }
    ]
}

const ReadingsPage = () => {
  const [timeOfDay, setTimeOfDay] = useState('morning');
  font();
  return (
    <Wrapper className={timeOfDay === 'evening' ? dark : ''}>
      <Nav>
        <Button shape="circ" icon={'arrow'} iconRotate={'90'} onClick={()=>{console.log('Yesterday clicked')}}/>
        <Toggle options={[{value: 'morning', content: 'Morning'}, {value: 'evening', content: 'Evening'}]} selected={timeOfDay} onChange={setTimeOfDay}/>
        <Button shape="circ" icon={'arrow'} iconRotate={'-90'} onClick={()=>{console.log('Tomorrow clicked')}}/>
      </Nav>
      <Message time={timeOfDay === 'evening' ? 'Po' : 'Ata'}/>
      <Date dates={dateList} currentDate={dateList[0]} setCurrentDate={()=> {console.log('Date updated')}}/>
      <Readings readings={timeOfDay === 'morning' ? todaysReadings.morning : todaysReadings.evening}/>
    </Wrapper>
  );
}

export default ReadingsPage;