function requestServerForJS() {
	console.log("Called at:"+ new Date().getTime());
    var s1 = document.createElement("script");
    var url = "https://social-widget.oss.net.bd/widget-data?portal-id="+ window.ba_sw_id;
    s1.setAttribute("src", url);
    document.body.appendChild(s1);
  }

requestServerForJS();

function batworldCheckApi() {
    var checkUrl = "https://social-widget.oss.net.bd/widget-data/reload-js?portal-id="+ window.ba_sw_id;
    var apiOptions = {
      method: "GET"
       
    };
    fetch(checkUrl, apiOptions)
      .then((response) => response.json())
      .then((data) => {
        if (JSON.stringify(data.reload)==='true') {
          requestServerForJS();
        }
      });
  }

setInterval(batworldCheckApi, 60*60*1000);
