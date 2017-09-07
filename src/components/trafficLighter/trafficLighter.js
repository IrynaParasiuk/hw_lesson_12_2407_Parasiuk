import './trafficLighter.styl';

function trafficLighter(selector, timeInterval=1500) {
  const template = `
     <div class="traffic-lighter_switcher">on/off</div>
     <div class="traffic-lighter_lights traffic-lighter_lights__red"></div>
     <div class="traffic-lighter_lights traffic-lighter_lights__yellow"></div>
     <div class="traffic-lighter_lights traffic-lighter_lights__green"></div>
  `;
  const rootElement = document.querySelector(selector);
  let isEnabled = false;
  let lights;
  let activeElementIndex = 0;
  let intervalId = null;

  function toggleNext() {
    if(activeElementIndex+1 < lights.length) {
      activeElementIndex += 1;
    } else {
      activeElementIndex = 0;
    }
  }

  function startInterval() {
    if(isEnabled && !intervalId) {
      console.log('Interval started!');
      intervalId = setInterval(function () {
        toggleNext();
        switchLight(lights[activeElementIndex]);
      }, timeInterval);
    }

  }

  function stopInterval() {
    clearInterval(intervalId);
    intervalId = null;
  }

  function resetInterval() {
    stopInterval();
    startInterval();
  }

  function render() {
    rootElement.classList.add('traffic-lighter');
    rootElement.innerHTML = template;
    lights = rootElement.querySelectorAll('.traffic-lighter_lights');
    console.log(lights);
  }

  function switchOffLights() {
    console.log(lights);
    for (let light of lights) {
      light.classList.remove('traffic-lighter_lights__active');
    }
  }

  function toggleLighter () {
    isEnabled = !isEnabled;

    if(!isEnabled) {
      stopInterval();
      switchOffLights();
      rootElement.classList.remove('traffic-lighter__active');
    } else {
      rootElement.classList.add('traffic-lighter__active');
      switchLight(lights[activeElementIndex]);
      startInterval();
    }
  }

  function switchLight(el) {
    switchOffLights();
    el.classList.add('traffic-lighter_lights__active');
  }

  function getIndexOfActiveElement(domElement) {
    let index = 0;
    for(let i = 0; i < lights.length; i++) {
      if(lights[i] === domElement) {
        index = i;
      }
    }
    return index;
  }

  function handleEvents() {
    rootElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('traffic-lighter_lights') && isEnabled === true) {
        activeElementIndex = getIndexOfActiveElement(e.target);
        switchLight(e.target);
        resetInterval();
      }
      if (e.target.classList.contains('traffic-lighter_switcher')) {
        toggleLighter();
      }
    });

    rootElement.addEventListener('mouseenter', function () {
      console.log('MouseEnter');
      stopInterval();
    });

    rootElement.addEventListener('mouseleave', function () {
      console.log('MouseLeave');
      startInterval();
    })
  }

  function init() {
    render();
    handleEvents();
  }

  init();
}

export { trafficLighter };