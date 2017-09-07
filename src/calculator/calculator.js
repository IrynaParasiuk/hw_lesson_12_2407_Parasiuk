/**
 * Created by IlyaLitvinov on 10.04.17.
 */

import './calculator.styl';

/**
 * @param {String} selector Simple css selector of root element
 */
function calculator (selector) {
  const widgetTemplate = ` 
    <input type="number" class="display">
    <button class="sum" data-operator="makeSum">+</button>
    <button class="sub" data-operator="makeSub">-</button>
    <button class="reset" data-operator="makeReset">C</button>
    <button class="result" data-operator="makeResult">=</button>
    <div class="output"></div>
    <div class="numbers">
      <button class="num-0">0</button>
      <button class="num-1">1</button>
      <button class="num-2">2</button>
      <button class="num-3">3</button>
      <button class="num-4">4</button>
      <button class="num-5">5</button>
      <button class="num-6">6</button>
      <button class="num-7">7</button>
      <button class="num-8">8</button>
      <button class="num-9">9</button>
    </div> 
  `;

  const rootElement = document.querySelector(selector);

  let input;
  let btnSum;
  let btnSub;
  let btnReset;
  let btnResult;
  let output;

  let result = 0;

  function renderStatic() {
    rootElement.innerHTML = widgetTemplate;

    input = rootElement.querySelector('.display');
    btnSum = rootElement.querySelector('.sum');
    btnSub = rootElement.querySelector('.sub');
    btnReset = rootElement.querySelector('.reset');
    btnResult = rootElement.querySelector('.result');
    output = rootElement.querySelector('.output');
  }

  function calculate(operatorParam) {
    switch(operatorParam) {
      case 'makeSum':
        result = sum(result, Number(input.value));
        break;
      case 'makeSub':
        result = sub(result, Number(input.value));
        break;
      case 'makeReset':
        result = 0;
        break;
    }

    print(result);
    input.value = 0;
  }

  function print(data) {
     output.innerHTML = '<h1 data-test="hello-world">' + data + '</h1>';

  }

  function sum (a, b) {
    return a+b;
  }

  function sub (a, b) {
    return a-b;
  }

  function clickHandler() {
    console.log('this:', this);
    calculate(this.getAttribute('data-operator'));
  }

  function wrapper (event) {
    console.log('this:', this);
    console.log(event.clientX, event.clientY);
    console.log('event.target', event.target);
  }

    function handleEvents() {
    rootElement.addEventListener('click', wrapper);
    btnSub.addEventListener('click', wrapper);

    input.addEventListener('keypress', function (e) {
      console.log(e);
    });
    // btnSum.onclick = clickHandler
    // btnSum.onclick = clickHandler;
    // btnSub.onclick = clickHandler;
    // btnReset.onclick = clickHandler;
    // btnResult.onclick = clickHandler;
    // rootElement.onmousemove= function () {
    //   console.log('Mouse over');
    // };
    // input.onkeypress = function () {
    //   console.log('Key pressed');
    // }
  }


  renderStatic();
  handleEvents();
}

export { calculator }