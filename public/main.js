console.log("我是main.js");

getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onload = () => {
    //下载完成，但不知道是否成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建style标签
        const style = document.createElement("style");
        //填写style内容
        style.innerHTML = request.response;
        //插到头里面
        document.head.appendChild(style);
      } else {
        alert("加载CSS失败");
      }
    }
  };
  request.send();
};

getJS2.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    //下载完成，但不知道是否成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建script标签
        const script = document.createElement("script");
        //填写script内容
        script.innerHTML = request.response;
        //插到body里面
        document.body.appendChild(script);
      } else {
        alert("加载JS失败");
      }
    }
  };
  request.send();
};

getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    //下载完成，但不知道是否成功
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        //创建div标签
        const div = document.createElement("html");
        //填写div内容
        div.innerHTML = request.response;
        //将div插入到body中
        document.body.appendChild(div);
      } else {
        alert("加载HTML失败");
      }
    }
  };
  request.send();
};

getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      } else {
        alert("加载XML失败");
      }
    }
  };
  request.send();
};
getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      } else {
        alert("加载JSON失败");
      }
    }
  };
  request.send();
};
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        // const string = JSON.parse(request.response);
        const string = request.response.toString();
        console.log(string);
        const span = document.createElement("html");
        span.textContent = string;
        xxx.appendChild(span);
      } else {
        alert("加载JSON失败");
      }
      n += 1;
    }
  };
  request.send();
};
