
import { useState } from 'react'
import './App.css'

interface CalculatorState {
  currentNumber: string;
  previousNumber:  string;
  operation:  string | null;
  isNewNumber: boolean;
}

function App() {
    const [state, setState] = useState<CalculatorState>({
      currentNumber: '0',
      previousNumber: '',
      operation: null,
      isNewNumber: true,
    });

    const handleNumberClick = (
      event: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      const value = event.currentTarget.value;
      if(state.isNewNumber) {
        setState({
          ...state,
          currentNumber: value,
          isNewNumber: false,
        });
      } else {
        setState({
          ...state,
          currentNumber: state.currentNumber + value,
        });
      }
    };
    
    const handleOperatorClick = (
      event: React.MouseEvent<HTMLInputElement, MouseEvent>
    ) => {
      const operator = event.currentTarget.value;
      const current = parseFloat(state.currentNumber || '0');
      if(state.previousNumber !== '' && state.operation) {
        const prev = parseFloat(state.previousNumber);
        let result = 0;
        switch (state.operation) {
          case '+':
            result = prev + current;
            break;
        }
      }
    }

    const handleClear = () => {
      console.log('clear');
    };

    const handleDot = () => {
      console.log('dot');
    };
    return (
      <article className='calculator'>
        <form name='forms'>
          <input type="text" name='output' value={state.currentNumber} readOnly/>
          <input type="button" className='clear' value='C' onClick={handleClear}/>
          <input type="button" className='operator' value='/'/>
          <input type="button" value='1' onClick={handleNumberClick}/>
          <input type="button" value='2' onClick={handleNumberClick}/>
          <input type="button" value='3' onClick={handleNumberClick}/>
          <input type="button" className='operator' value='*' onClick={handleOperatorClick}/>
          <input type="button" value='4' onClick={handleNumberClick}/>
          <input type="button" value='5' onClick={handleNumberClick}/>
          <input type="button" value='6' onClick={handleNumberClick}/>
          <input type="button" className='operator' value='+' onClick={handleOperatorClick}/>
          <input type="button" value='7' onClick={handleNumberClick}/>
          <input type="button" value='8' onClick={handleNumberClick}/>
          <input type="button" value='9' onClick={handleNumberClick}/>
          <input type="button" className='operator' value='-' onClick={handleOperatorClick}/>
          <input type="button" className='dot' value='.' onClick={handleDot}/>
          <input type="button" value='0' onClick={handleNumberClick}/>
          <input type="button" className='operator result' value='=' onClick={handleOperatorClick}/>
          
        </form>

      </article>
    );
}

export default App
