
function metaGame () {
  let lastVT = document.getElementById('last-v-t').value;
  let location = document.getElementById('location').value;
  // let nowIsT = document.getElementById('now-t').value;


  let timeLV = timeToObj(lastVT)

  // let timeNow = timeToObj(nowIsT);


  let list = createVibrosTimeList(timeLV, 3, 25);
  addListonPage('place', list, 'span', location)
}

function createVibrosTimeList(startTimeObj, tact, counter) {
  let timeArr = [];
  let date = startTimeObj.date.split('-');

  for (let i = 0; i <= counter; i++) {
    let hour = startTimeObj.time.hour*1 + tact*1;
    let min = startTimeObj.time.min*1 + 2;

    if (min >= 60) {
      hour = hour+1;
      min = min - 60;
    }

    for (hour; hour >= 24; hour - 24) {
      date[2] = date[2]*1 + 1;
      hour = hour - 24;
    }


    startTimeObj.time.hour = hour;
    startTimeObj.time.min = min;

    timeArr[i] = `${date.join('-')} - ${hour < 10 ? '0' + hour : hour}:${min < 10 ? '0' + min : min}`
  }
  console.log(timeArr)
  return timeArr;
}

function timeToObj (timeString) {
  return {
    date: timeString.split("T")[0],
    time: {
      hour: timeString.split("T")[1].split(":")[0],
      min: timeString.split("T")[1].split(":")[1]
    }
  };
}

function addListonPage (place, list, tag, location) {
  let listPlace = document.getElementById(`${place}`)
  let listFragment = document.createElement('div');
  listFragment.style.display = 'flex';
  listFragment.style.flexDirection = 'column';
  listFragment.style.marginRight = '15px';

  let item = document.createElement(`${tag}`);
  item.innerText = location;
  listFragment.append(item);

  for (let i = 0; i < list.length; i++) {
    let item = document.createElement(`${tag}`);
      item.innerText = list[i];
      listFragment.append(item);
  }
  listPlace.append(listFragment);
}

let btn = document.getElementById('btn');
btn.addEventListener("click", metaGame)
