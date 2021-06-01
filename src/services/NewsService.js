export async function getNews(count, offset) {
  const newsURL = `https://api.smallcase.com/news/getNews?count=${count}&offset=${offset}`;
  try {
    const response = await fetch(newsURL);
    const responseJSON = await response.json();
    const data = responseJSON.data;
    //console.log(`Response ${JSON.stringify(data, null, 2)}`);
    return getProcessedData(data);
  } catch (error) {
    console.log(`Error getNews ${error}`);
  }
}

function getProcessedData(dataList) {
  var processedDataListCompactView = [];

  for (let data of dataList) {
    var processedDataItem = {};
    //The _id is not necessarily unique so we shall generate random ID
    processedDataItem.id = `${data._id}${Math.floor(Math.random() * 5)}`;
    //console.log(`processedDataItem.id ${processedDataItem.id}`);
    processedDataItem.headline = data.headline;
    processedDataItem.summary = data.summary;
    processedDataItem.imageUrl = data.imageUrl;
    processedDataItem.createdAt = data.createdAt;
    console.log(processedDataItem);
    processedDataListCompactView.push(processedDataItem);
  }
  //console.log(processedDataListCompactView);
  return processedDataListCompactView;
}
