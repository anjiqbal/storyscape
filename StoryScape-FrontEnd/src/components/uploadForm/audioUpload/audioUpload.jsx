import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./audioUpload.css";

function AudioUpload() {
  /* upload audio file */
  const handleFiles = (event) => {
    const files = event.target.files;
    document.getElementById("track").src = URL.createObjectURL(files[0]);
    document.getElementById("track").load();
    console.log(event);
    document.querySelector("div.player").classList.toggle("d-none");
    document.querySelector(".file-upload-wrapper").classList.toggle("d-none");
  };

  useEffect(() => {
    const audioElement = document.getElementById("track");
    const durationElement = document.getElementById("duration");
    const timesliderElement = document.getElementById("timeslider");
    const canPlayHandler = () => {
      console.log(audioElement.duration);
      durationElement.innerHTML = sec2time(audioElement.duration);
      timesliderElement.max = audioElement.duration * 1000;
    };
    audioElement.addEventListener("canplay", canPlayHandler);
    return () => audioElement.removeEventListener("canplay", canPlayHandler);
  }, []);

  /* start button */
  const handleStartClick = () => {
    const trackElement = document.getElementById("track");
    trackElement.play();
    document.getElementById("start").classList.toggle("d-none");
    document.getElementById("pause").classList.toggle("d-none");
  };

  /* pause button */
  const handlePauseClick = () => {
    const trackElement = document.getElementById("track");
    trackElement.pause();
    document.getElementById("pause").classList.toggle("d-none");
    document.getElementById("start").classList.toggle("d-none");
  };

  /* reset button */
  const handleResetClick = () => {
    const trackElement = document.getElementById("track");
    trackElement.load();
    document.getElementById("start").classList.toggle("d-none");
    document.getElementById("pause").classList.toggle("d-none");
  };

  /* timeupdate log */
  useEffect(() => {
    const trackElement = document.getElementById("track");
    const currentTimeElement = document.getElementById("currentTime");
    const timesliderElement = document.getElementById("timeslider");
    const timeUpdateHandler = () => {
      const currentTimeSec = trackElement.currentTime;
      const currentTimeMs = trackElement.currentTime * 1000;
      currentTimeElement.innerHTML = sec2time(currentTimeSec);
      timesliderElement.value = currentTimeMs;
      initRangeEl();
      const arrayTime = [sec2time(currentTimeSec), currentTimeMs];
      console.log(currentTimeMs);
    };
    trackElement.addEventListener("timeupdate", timeUpdateHandler);
    return () =>
      trackElement.removeEventListener("timeupdate", timeUpdateHandler);
  }, []);

  function sec2time(timeInSeconds) {
    var pad = function (num, size) {
        return ("000" + num).slice(size * -1);
      },
      time = parseFloat(timeInSeconds).toFixed(3),
      hours = Math.floor(time / 60 / 60),
      minutes = Math.floor(time / 60) % 60,
      seconds = Math.floor(time - minutes * 60),
      milliseconds = time.slice(-3);
    return pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
  }

  /* timeline slider */
  const valueTotalRatio = (value, min, max) => {
    return ((value - min) / (max - min)).toFixed(2);
  };

  const getLinearGradientCSS = (ratio, leftColor, rightColor) => {
    return [
      "-webkit-gradient(",
      "linear, ",
      "left top, ",
      "right top, ",
      "color-stop(" + ratio + ", " + leftColor + "), ",
      "color-stop(" + ratio + ", " + rightColor + ")",
      ")",
    ].join("");
  };

  const updateRangeEl = (rangeElement) => {
    const ratio = rangeElement.value / (rangeElement.max - rangeElement.min);
    const gradientCSS = getLinearGradientCSS(ratio, "#000", "#ccc");
    rangeElement.style.background = gradientCSS;
  };

  const initRangeEl = () => {
    const timesliderElement = document.getElementById("timeslider");
    updateRangeEl(timesliderElement);
  };

  const handleRangeChange = (event) => {
    const trackElement = document.getElementById("track");
    const newTimeMs = event.target.value;
    const newTimeSec = newTimeMs / 1000;
    trackElement.currentTime = newTimeSec;
    initRangeEl();
  };

  return (

    <div className="outer-container">
         <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Audio Upload</h3>
         
          <div className="file-upload-wrapper">
            <label htmlFor="audioFile">Choose audio file</label>
            <input type="file" id="audioFile" onChange={handleFiles} accept="audio/*" />
          </div>
          <div className="player d-none">
            <audio id="track">
              <source src="" type="audio/mpeg" />
            </audio>
            <div className="controls">
              <div className="row">
                <div className="col-md-6">
                  <div className="btn-group">
                    <button id="start" type="button" className="btn btn-outline-primary" onClick={handleStartClick}>Start</button>
                    <button id="pause" type="button" className="btn btn-outline-primary d-none" onClick={handlePauseClick}>Pause</button>
                    <button id="reset" type="button" className="btn btn-outline-primary" onClick={handleResetClick}>Reset</button>

                  </div>
                  <div className="col-md-6">
                    <div className="duration text-right">
                      <span id="currentTime">00:00:00</span> /{" "}
                      <span id="duration">00:00:00</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="range-slider">
                      <input
                        type="range"
                        id="timeslider"
                        min="0"
                        max="100"
                        onChange={handleRangeChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AudioUpload;
