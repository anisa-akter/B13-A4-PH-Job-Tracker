// Initialize the job application counts
let totalValueID = document.getElementById("totalValueID");
totalValueID.innerText = 0;

let interviewValueID = document.getElementById("interviewValueID");
interviewValueID.innerText = 0;

let rejectedValueID = document.getElementById("rejectedValueID");
rejectedValueID.innerText = 0;

// Add event listeners to the tabs
let tabAllId = document.getElementById("tabAllId");
let tabInterviewId = document.getElementById("tabInterviewId");
let tabRejectedId = document.getElementById("tabRejectedId");

tabAllId.addEventListener("click", function () {
  makeTabActive(tabAllId);
});

tabInterviewId.addEventListener("click", function () {
  makeTabActive(tabInterviewId);
});

tabRejectedId.addEventListener("click", function () {
  makeTabActive(tabRejectedId);
});

function makeTabActive(tabId) {
  tabAllId.classList.remove("tab-active", "bg-blue-700", "text-white");
  tabInterviewId.classList.remove("tab-active", "bg-blue-700", "text-white");
  tabRejectedId.classList.remove("tab-active", "bg-blue-700", "text-white");
  tabId.classList.add("tab-active", "bg-blue-700", "text-white");
}
