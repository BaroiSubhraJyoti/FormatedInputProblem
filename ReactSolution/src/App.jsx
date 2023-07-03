import { useState, useEffect } from 'react';
import './style.css';
import {
  formatNumber,
  isNumber,
  extractNumber,
  getNewCharPos,
} from './utils/utils';
function App() {
  const [phoneNo, setPhoneNo] = useState('');
  const [charetPosition, setCharetPosition] = useState(0);
  const [forceCharetPositioning, setForceCharetPositioning] = useState(false);
  const handleInputChange = (event) => {
    const caretPosition = event.target.selectionStart;
    const prevLength = event.target.value;
    let number = extractNumber(event.target.value);
    setPhoneNo(formatNumber(number));
    if (event.nativeEvent.data) {
      if (caretPosition != prevLength.length) {
        const newCharetPostion = getNewCharPos(
          caretPosition,
          number,
          isNumber(event.nativeEvent.data)
        );
        setCharetPosition(newCharetPostion);
        setForceCharetPositioning(!forceCharetPositioning);
      }
    } else {
      setCharetPosition(caretPosition);
      setForceCharetPositioning(!forceCharetPositioning);
    }
  };

  const updateCharetPostion = () => {
    const element = document.getElementById('phone');
    element.selectionStart = charetPosition;
    element.selectionEnd = charetPosition;
  };

  useEffect(() => {
    updateCharetPostion();
  }, [charetPosition, forceCharetPositioning]);

  return (
    <>
      <input
        type="tel"
        id="phone"
        placeholder="mobile number"
        autoComplete="off"
        value={phoneNo}
        onChange={handleInputChange}
      />
      <div>
        <label htmlFor="phone">(123) 456-789</label>
      </div>
    </>
  );
}

export default App;
