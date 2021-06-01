export async function getNews(count, offset) {
  const newsURL = `https://api.smallcase.com/news/getNews?count=${count}&offset=${offset}`;
  try {
    const response = await fetch(newsURL);
    const responseJSON = await response.json();
    const data = responseJSON.data;
    console.log(`Response ${JSON.stringify(data, null, 2)}`);
    getProcessedData(data);
  } catch (error) {
    console.log(`Error getNews ${error}`);
  }
}

function getProcessedData(dataList) {
  var processedDataListCompactView = [];

  for (let data of dataList) {
    var processedDataItem = {};
    processedDataItem.headline = data.headline;
    processedDataItem.summary = data.summary;
    processedDataItem.imageUrl = data.imageUrl;
    processedDataItem.createdAt = data.createdAt;
    console.log(processedDataItem);
    processedDataListCompactView.push(processedDataItem);
  }
  console.log(processedDataListCompactView);
  //return processedDataListCompactView;
}
