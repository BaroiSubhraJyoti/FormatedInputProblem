const handleInputChange = (event) => {
  const caretPosition = event.target.selectionStart;
  const prevLength = event.target.value;
  let number = extractNumber(event.target.value);
  event.target.value = formatNumber(number);
  if (event.data) {
    if (caretPosition != prevLength.length) {
      const newCharetPostion = getNewCharPos(
        caretPosition,
        number,
        isNumber(event.data)
      );
      event.target.selectionStart = newCharetPostion;
      event.target.selectionEnd = newCharetPostion;
    }
  } else {
    event.target.selectionStart = caretPosition;
    event.target.selectionEnd = caretPosition;
  }
};
const getNewCharPos = (caretPosition, number, isNumber) => {
  if (!isNumber) {
    return caretPosition - 1;
  }
  let valueLength = number.length;
  if (valueLength > 3) {
    console.log('yeah', caretPosition);
    switch (caretPosition) {
      case 1: {
        return caretPosition + 1;
      }
      case 2: {
        return caretPosition;
      }
      case 3: {
        return caretPosition;
      }
      case 4: {
        return caretPosition + 3;
      }
      case 5: {
        return caretPosition + 2;
      }
      case 6: {
        return caretPosition + 1;
      }
      case 7: {
        return caretPosition;
      }
      case 8: {
        return caretPosition;
      }
      case 9: {
        return caretPosition;
      }
      case 10: {
        return caretPosition + 1;
      }
      default: {
        return caretPosition;
      }
    }
  } else {
    return caretPosition + 1;
  }
};

const isNumber = (input) => {
  return input.charCodeAt(0) > 47 && input.charCodeAt(0) < 58;
};

const extractNumber = (value) => {
  let result = '';
  for (let el of value) {
    if (isNumber(el)) {
      result += el;
    }
  }
  return result;
};

const formatNumber = (value) => {
  let formatValue = '';
  let valueLength = value.length;
  if (valueLength > 3 && valueLength < 7) {
    formatValue = '(' + value.slice(0, 3) + ') ' + value.slice(3);
  } else if (valueLength >= 7) {
    formatValue =
      '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6);
  } else {
    formatValue = value;
  }
  return formatValue;
};

const inputElement = document.getElementById('phone');
inputElement.addEventListener('input', handleInputChange);
