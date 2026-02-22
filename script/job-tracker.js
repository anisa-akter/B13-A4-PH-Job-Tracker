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
  filterJobs("ALL");
});

tabInterviewId.addEventListener("click", function () {
  makeTabActive(tabInterviewId);
  filterJobs("INTERVIEW");
});

tabRejectedId.addEventListener("click", function () {
  makeTabActive(tabRejectedId);
  filterJobs("REJECTED");
});

function makeTabActive(tabId) {
  tabAllId.classList.remove("tab-active", "bg-blue-700", "text-white");
  tabInterviewId.classList.remove("tab-active", "bg-blue-700", "text-white");
  tabRejectedId.classList.remove("tab-active", "bg-blue-700", "text-white");
  tabId.classList.add("tab-active", "bg-blue-700", "text-white");
}

function filterJobs(status) {
  const allCards = document.querySelectorAll("#jobPostIDParent > div[id^='jobPostID']");
  let visibleCount = 0;
  let totalCount = 0;
  
  allCards.forEach((card) => {
    // Skip the template
    if (card.id === "jobPostID") return;
    
    totalCount++;
    
    if (status === "ALL") {
      card.style.display = "block";
      visibleCount++;
    } else {
      const cardStatus = card.querySelector("span").textContent;
      if (cardStatus === status) {
        card.style.display = "block";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    }
  });
  
  // Update available jobs count
  const countElement = document.getElementById("availableJobsCountID");
  if (status === "ALL") {
    countElement.textContent = `${totalCount} jobs`;
  } else {
    countElement.textContent = `${visibleCount} out of ${totalCount} jobs`;
  }
}

function updateJobStatus(jobIndex, newStatus) {
  // Update job data
  jobPosts[jobIndex].status = newStatus;
  
  // Update UI
  const cardId = "jobPostID" + jobIndex;
  const card = document.getElementById(cardId);
  const statusSpan = card.querySelector("span");
  
  // Update status text and styling
  statusSpan.textContent = newStatus;
  statusSpan.classList.remove("bg-gray-200", "text-gray-800", "bg-green-200", "text-green-800", "bg-red-200", "text-red-800");
  
  if (newStatus === "INTERVIEW") {
    statusSpan.classList.add("bg-green-200", "text-green-800");
  } else if (newStatus === "REJECTED") {
    statusSpan.classList.add("bg-red-200", "text-red-800");
  }
  
  // Update counters
  updateCounters();
}

function updateCounters() {
  let totalCount = jobPosts.length;
  let interviewCount = jobPosts.filter(job => job.status === "INTERVIEW").length;
  let rejectedCount = jobPosts.filter(job => job.status === "REJECTED").length;
  
  totalValueID.innerText = totalCount;
  interviewValueID.innerText = interviewCount;
  rejectedValueID.innerText = rejectedCount;
}

function loadJobs(){
    for(let index in jobPosts){
        let jobPost = jobPosts[index];
        let jobPostTemplate = document.getElementById("jobPostID");
        let clonedJobPost = jobPostTemplate.cloneNode(true);
        clonedJobPost.id = "jobPostID" + index;
        clonedJobPost.style.display = "block";
        
        // Update cloned element with real data
        clonedJobPost.querySelector("h4").textContent = jobPost.company;
        let paragraphs = clonedJobPost.querySelectorAll("p");
        paragraphs[0].textContent = jobPost.position;
        paragraphs[1].textContent = `${jobPost.location} • ${jobPost.type} • ${jobPost.salary}`;
        paragraphs[2].textContent = jobPost.description;
        
        // Update status span
        let statusSpan = clonedJobPost.querySelector("span");
        statusSpan.textContent = jobPost.status;
        
        // Update status styling based on status
        statusSpan.classList.remove("bg-gray-200", "text-gray-800");
        if(jobPost.status === "INTERVIEW"){
            statusSpan.classList.add("bg-green-200", "text-green-800");
        } else if(jobPost.status === "REJECTED"){
            statusSpan.classList.add("bg-red-200", "text-red-800");
        } else {
            statusSpan.classList.add("bg-gray-200", "text-gray-800");
        }
        
        // Add event listeners to Interview and Rejected buttons
        const buttons = clonedJobPost.querySelectorAll("button");
        buttons[0].addEventListener("click", function() {
            updateJobStatus(index, "INTERVIEW");
        });
        
        buttons[1].addEventListener("click", function() {
            updateJobStatus(index, "REJECTED");
        });
        
        document.getElementById("jobPostIDParent").appendChild(clonedJobPost);
    }
}



const jobPosts = [
  {
    company: "Google",
    position: "Frontend Developer",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    status: "NOT APPLIED",
    description:
      "Build scalable user interfaces for Google products using modern JavaScript frameworks and performance optimization techniques."
  },
  {
    company: "Microsoft",
    position: "Software Engineer",
    location: "Redmond, WA",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    status: "NOT APPLIED",
    description:
      "Develop enterprise-level cloud applications using .NET and Azure services. Collaborate with cross-functional teams."
  },
  {
    company: "Amazon",
    position: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$115,000 - $155,000",
    status: "NOT APPLIED",
    description:
      "Design and maintain scalable backend systems supporting millions of daily transactions using AWS technologies."
  },
  {
    company: "Meta",
    position: "React Developer",
    location: "Menlo Park, CA",
    type: "Full-time",
    salary: "$125,000 - $170,000",
    status: "NOT APPLIED",
    description:
      "Create dynamic and responsive web applications using React and modern frontend architecture."
  },
  {
    company: "Netflix",
    position: "UI Engineer",
    location: "Los Gatos, CA",
    type: "Full-time",
    salary: "$130,000 - $180,000",
    status: "NOT APPLIED",
    description:
      "Enhance user experience for streaming platforms by building high-performance UI components."
  },
  {
    company: "Airbnb",
    position: "Full Stack Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $165,000",
    status: "NOT APPLIED",
    description:
      "Develop scalable full-stack applications using React, Node.js, and cloud infrastructure."
  },
  {
    company: "Spotify",
    position: "Mobile App Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    status: "NOT APPLIED",
    description:
      "Build and optimize cross-platform mobile applications delivering seamless music streaming experiences."
  },
  {
    company: "Adobe",
    position: "JavaScript Engineer",
    location: "San Jose, CA",
    type: "Full-time",
    salary: "$115,000 - $155,000",
    status: "NOT APPLIED",
    description:
      "Work on creative cloud applications focusing on modern JavaScript frameworks and performance improvements."
  },
  {
    company: "Tesla",
    position: "Frontend Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$105,000 - $145,000",
    status: "NOT APPLIED",
    description:
      "Develop responsive dashboards and internal tools supporting electric vehicle production systems."
  },
  {
    company: "Shopify",
    position: "Web Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    status: "NOT APPLIED",
    description:
      "Create scalable e-commerce web solutions using modern web technologies and performance best practices."
  }
];

loadJobs();
updateCounters();
filterJobs("ALL");

