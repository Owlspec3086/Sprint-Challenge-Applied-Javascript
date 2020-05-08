// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

axios
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then((response) => {
    // console.log(response);
    let topicsArr = response.data.topics;
    // console.log(topicsArr)
    topicsArr.forEach((e) => {
    //   console.log(e);
      tabs.appendChild(tabsCreator(e));
    });
  })
  .catch((error) => {
    console.log('there is an error', error);
  });

const tabs = document.querySelector('.topics');

function tabsCreator(item) {
  const tabElement = document.createElement('div');
  const tabTopics = document.createElement('div');
  const tabTitle = document.createElement('span');

  tabTitle.textContent = item;

  // console.log(item.topic);
  tabElement.classList.add('tab');
  tabTopics.classList.add('topics');
  tabTitle.classList.add('title');
}
