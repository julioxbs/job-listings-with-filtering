import data from "../data.json";
const elementJobList = document.getElementById("lists__jobs") as HTMLElement;
const filterList = document.getElementById("filter") as HTMLElement;
const containerFilter = document.getElementById("filter__tags") as HTMLElement;
let arr: string[] = [];

type dataType = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}[];

// Render data to HTML
function renderHTML(data: dataType) {
  elementJobList.innerHTML = "";
  data.forEach((job) => {
    elementJobList.innerHTML += `
          <div class="job box__shadow ${job.featured && "featured__border"}">
            <div class="job__info">
              <img class="img__company" src="${job.logo}" alt="${job.company} logo">
              <div class="job__info--wrap">
                <ul class="list">
                  <li class="job__company">${job.company}</li>
                  <li style="display:${
                    job.new ? "block" : "none"
                  };" class="job__new">NEW!</li>
                  <li style="display:${
                    job.featured ? "block" : "none"
                  };" class="job__featured">FEATURED</li>
                </ul>
               
    
                <p class="job__title">${job.position}</p>

                <ul class="list">
                  <li class="muted">${job.postedAt}</li>
                  <li class="muted">.</li>
                  <li class="muted">${job.contract}</li>
                  <li class="muted">.</li>
                  <li class="muted">${job.location}</li>
                </ul>

                <hr>
              </div>
            </div>
              
            <ul class="list">
            ${jobTags(job.role, job.languages, job.level, job.tools)
              .map((val) => `<li class="tag">${val}</li>`)
              .join("")}  
              </ul>
          </div>`;
  });
}

renderHTML(data);

// Create job tags
function jobTags(
  role: string,
  languages: string[],
  level: string,
  tools: string[]
) {
  let tags = [role, ...languages, level, ...tools];
  return tags;
}

function filterJob() {
  console.log("filter job chamado");
  let result: dataType = [];

  data.forEach((val) => {
    if (validJobs(val)) {
      result.push(val);
    }
  });

  return renderHTML(result);
}

function validJobs(item: {
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}) {
  let isValid = true;

  arr?.forEach((tag) => {
    if (
      item.role !== tag &&
      item.level !== tag &&
      !item.languages.includes(tag) &&
      !item.tools.includes(tag)
    ) {
      isValid = false;
    }
  });
  return isValid;
}

// Add tag to filter list
window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.className === "tag") {
    if (!arr.includes(target.innerText)) {
      arr.push(target.innerText);
      addTagInFilterList();
      filterJob();
    }
  }
});

function addTagInFilterList() {
  containerFilter.classList.remove("hidden");
  filterList.innerHTML = "";

  if (arr.length != 0) {
    arr.forEach((val, i) => {
      filterList.innerHTML += `<li id="${i}" class="tag tag__filter">${val}</li>`;
    });
  }
}

// Remove tag from filter list
window.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  if (target.classList[1] === "tag__filter") {
    arr.splice(Number(target.id), 1);
    addTagInFilterList();
    filterJob();
  }

  if (arr.length === 0) containerFilter.classList.add("hidden");
});

// Remove all filters of array
document.getElementById("clear__btn")?.addEventListener("click", () => {
  filterList.innerHTML = "";
  containerFilter.classList.add("hidden");
  arr = [];
  filterJob();
});
