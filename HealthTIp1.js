const newsSlides = [
  {
    image: "Images/Han1.png",
    title: "WHO chief heads to Tenerife to oversee Sunday arrival of hantavirus-hit ship",
    link: "https://news.un.org/en/story/2026/05/1167476g"
  },
  {
    image: "Images/Elbona.png",
    title: "Ebola outbreak in DR Congo collides with conflict and hunger, WHO warns",
    link: "https://news.un.org/en/story/2026/05/1167592"
  },
  {
    image: "Images/Han2.png",
    title: "How to stay safe from Hantavirus",
    link: "https://www.cdc.gov/hantavirus/prevention/index.html"
  }
];

const healthTips = [
  {
    image: "Images/Gocamp.png",
    title: "Want a better night's sleep? Go camping",
    link: "https://www.bbc.com/future/article/20260409-want-a-better-nights-sleep-go-camping"
  },
  {
    image: "https://www.houstonmethodist.org/-/media/images/contenthub/article-images/nutrition/2022/hub_howtostopovereating_article.ashx?mw=1382&hash=B7726139168CAB3155B0168FD5912C5B",
    title: "Tips to Avoid Overeating",
    link: "https://www.houstonmethodist.org/blog/articles/2022/jan/how-to-stop-overeating-10-tips-to-avoid-eating-too-much/"
  },
  {
    image: "Images/hiking.png",
    title: "The hiking movement to reclaim green spaces",
    link: "https://www.bbc.com/future/article/20240109-the-hiking-groups-tackling-racism-in-nature"
  },
  {
    image: "Images/Exercise.png",
    title: "Five minutes of exercise a day could help millions of people live longer",
    link: "https://www.bbc.com/future/article/20260515-why-only-five-minutes-of-exercise-could-help-millions-of-people-live-longer"
  },
  {
    image: "Images/Sleeptracking.png",
    title: "Sleep tracking and longevity claims: The new era of wellness retreats",
    link: "https://www.bbc.com/travel/article/20260519-the-evolution-of-the-wellness-retreat"
  },
  {
    image: "Images/listeningsounds.webp",
    title: "These breathing techniques could reduce your stress in minutes",
    link: "https://www.bbc.com/future/article/20260513-how-5-minutes-of-breathwork-can-lower-your-stress"
  }
];

let slideIndex = 1;

const slideContainer = document.getElementById("slideContainer");
const slideDots = document.getElementById("slideDots");
const grid = document.getElementById("blogGrid");

newsSlides.forEach((post, index) => {
  slideContainer.innerHTML += `
    <a href="${post.link}" class="mySlides fade slide-link">
      <div class="numbertext">${index + 1} / ${newsSlides.length}</div>
      <img src="${post.image}" alt="${post.title}">
      <div class="text">${post.title}</div>
    </a>
  `;

  slideDots.innerHTML += `<span class="dot" onclick="currentSlide(${index + 1})"></span>`;
});

healthTips.forEach(tip => {
  grid.innerHTML += `
    <a href="${tip.link}" class="card">
      <img src="${tip.image}" alt="${tip.title}">
      <div class="overlay">
        <h3>${tip.title}</h3>
      </div>
    </a>
  `;
});

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
