import React from 'react'
import './App.css';
const TIME_OF_HAPPY = '2024/03/01';

const CounterView = props =>{
  const { days, hours, minutes, seconds } = props
  return (
    <div>
      <div className="csvg-digit"
          data-tad-bind="days">
        <div className="csvg-digit-number"
            id="el_dw1">
          {days}
        </div>
        <div className="csvg-digit-label"
            id="el_dw1t">
          days
        </div>
      </div>
      <div className="csvg-digit"
          data-tad-bind="hours">
        <div className="csvg-digit-number"
            id="el_h1">
          {hours}
        </div>
        <div className="csvg-digit-label"
            id="el_h1t">
          hours
        </div>
      </div>
      <div className="csvg-digit"
          data-tad-bind="minutes">
        <div className="csvg-digit-number"
            id="el_m1">
          {minutes}
        </div>
        <div className="csvg-digit-label"
            id="el_m1t">
          minutes
        </div>
      </div>
      <div className="csvg-digit"
          data-tad-bind="seconds">
        <div className="csvg-digit-number"
            id="el_s1">
          {seconds}
        </div>
        <div className="csvg-digit-label"
            id="el_s1t">
          seconds
        </div>
      </div>
    </div>
  )
}

const getDistance = () => {
  // Set the date we're counting from
  const countFromDate = new Date(TIME_OF_HAPPY).getTime()

  // Get todays date and time
  const now = new Date().getTime()

  // Find the distance between now and the date from
  const distance = countFromDate - now

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}

class Counter extends React.Component {
// class Counter {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  updateCounter() {
    const t = getDistance()

    this.setState({
      days: t[0],
      hours: t[1],
      minutes: t[2],
      seconds: t[3],
    })
  }

  componentDidMount() {
    this.updateCounter()
    setInterval(() => {
      this.updateCounter()
    }, 1000)


    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    window.onYouTubeIframeAPIReady = () => {
      player = new window.YT.Player('player', {
        // height: '390',
        // width: '640',
        videoId: '9jK-NcRmVcw',
        playerVars: {
          'playsinline': 1,
          'start': 117,
        },
        events: {
          // 'onReady': onPlayerReady,
          // 'onStateChange': onPlayerStateChange
        }
      });
    }
  }


  render() {
    return (
      <CounterView {...this.state} />
    )
  }
}

function App() {
  // const { ready } = this.state
  return (
    <div>
      <div className="background"></div>
      <div className={`csvg-countdown hasWeeks`}>
        {/* <AudioPlayer src={BGM} ready={ready}/> */}
        {/* <img className="screenshot" src={screenshot} alt="black and white screenshot"/> */}
        <h1 className="csvg-title font-cursive">
        Happy working in Academia Sinica!
        </h1>
        <Counter/>
        <div id="player"></div>
      </div>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/9jK-NcRmVcw?si=IrvbggH-FUoYbr3d&amp;controls=0"></iframe> */}
    </div>
  );
}

export default App;
