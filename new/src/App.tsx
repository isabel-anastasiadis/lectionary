
import { styled, dark, font } from './stitches.config';
import { useState }  from 'react';
import Button from './Button';
import Toggle from './Toggle';
import Nav from './Nav';

const Wrapper = styled('div', {
  background: '$background',
  fontFamily: 'inter',
  height: '100%',
});

const App = () => {
  const [timeOfDay, setTimeOfDay] = useState('morning');
  font();
  return (
    <Wrapper className={timeOfDay === 'evening' ? dark : ''}>
      <Nav>
        <Button shape="circ" icon={'arrow'} iconRotate={'90'} onClick={()=>{console.log('hi')}}/>
        <Toggle options={[{value: 'morning', content: 'Morning'}, {value: 'evening', content: 'Evening'}]} selected={timeOfDay} onChange={setTimeOfDay}/>
        <Button shape="circ" icon={'arrow'} iconRotate={'-90'} onClick={()=>{console.log('hi')}}/>
      </Nav>
    </Wrapper>
  );
}

export default App;
