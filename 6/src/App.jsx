import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// BEGIN (write your solution here)
const FactorialDisplay = ({ number }) => {
    const calculateFactorial = (num) => {
      if (num <= 0) return 1;
      return num * calculateFactorial(num - 1);
    };
  
    const factorialResult = calculateFactorial(number);
    return <div>{`Factorial of ${number} is ${factorialResult}`}</div>;
  };
  
  const App = () => {
    const { t, i18n } = useTranslation();
    const [inputValue, setInputValue] = useState(0);
  
    const switchLanguage = (event) => {
      const selectedLanguage = event.target.dataset.testid;
      i18n.changeLanguage(selectedLanguage);
    };
  
    const buttonClass = (currentLang) => {
      return i18n.language === currentLang ? 'btn btn-primary' : 'btn btn-outline-primary';
    };
  
    return (
      <div className="App">
        <div className="btn-group mb-3" role="group">
          <button
            type="button"
            data-testid="en"
            className={buttonClass('en')}
            onClick={switchLanguage}
          >
            {t('languages.en')}
          </button>
          <button
            type="button"
            data-testid="ru"
            className={buttonClass('ru')}
            onClick={switchLanguage}
          >
            {t('languages.ru')}
          </button>
        </div>
        <br />
        <div className="btn-group mb-3" role="group">
          <button type="button" className="btn btn-outline-primary" onClick={() => setInputValue(1)}>
            {`${t('factorial')} 1`}
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setInputValue(5)}>
            {`${t('factorial')} 5`}
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setInputValue(10)}>
            {`${t('factorial')} 10`}
          </button>
          <button type="button" className="btn btn-outline-primary" onClick={() => setInputValue(20)}>
            {`${t('factorial')} 20`}
          </button>
        </div>
        <FactorialDisplay number={inputValue} />
      </div>
    );
  };

// END

export default App;
