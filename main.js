"use strict";

{
  const contentA = document.querySelector(".panel");
  const panel = document.querySelector(".panel-group");
  const tabGroup = document.querySelector(".tab-group");
  let currentIndex = 0;

  let tabContent = [
    {
      tabNum: "tab1",
      content: "contentA",
    },
    {
      tabNum: "tab2",
      content: "contentB",
    },
    {
      tabNum: "tab3",
      content: "contentC",
    },
  ];

  tabContent.forEach((tab, index) => {
    // 配列の分だけタブを生成
    const li = document.createElement("li");
    const content = document.createElement("div");
    li.textContent = tab.tabNum;
    li.classList.add("tab");
    // currentIndexの初期は0
    if (index === currentIndex) {
      li.classList.add("is-active");
    }

    li.addEventListener("click", () => {
      contentA.textContent = tab.content;
      let liContents = document.querySelectorAll("li");
      //   現在のactiveクラスをリセット
      liContents[currentIndex].classList.remove("is-active");
      currentIndex = index;
      // console.log(index);
      liContents[currentIndex].classList.add("is-active");
    });
    panel.appendChild(content);
    tabGroup.appendChild(li);
  });
}
