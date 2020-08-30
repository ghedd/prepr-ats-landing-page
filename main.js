const app = () => {
  let bodyId = document.body.id;

  const burgerBtn = document.getElementById("burger-btn");

  function toggleSiteNav({ target }) {
    // target is the button itself
    const expanded = target.getAttribute("aria-expanded") === "true" || false;
    // console.log(expanded);
    this.setAttribute("aria-expanded", !expanded);
  }

  /* --------------------------------------- */
  /*         observing active section        */
  /* --------------------------------------- */

  const navList = document
    .querySelector(".header__site-nav-group")
    .querySelectorAll(".header__nav-item");
  let sectionNames = [];
  navList.forEach((nav) => {
    if (nav.dataset.section !== undefined) {
      sectionNames.push(nav.dataset.section);
    }
  });

  /*  const sections = document.querySelectorAll("section");

  const options = {
    root: null,
    // threshold: 0.5,
    rootMargin: "-450px",
  }; */

  // methods

  // NOTE: the bellow commented out function
  // can be an alternative for observer

  /*   const setNavItemActive = (navItem, sectionName) => {
    const navEl = navItem.children[0];
    let siblings = [];
    navEl.addEventListener("click", (e) => {
      navEl.classList.add("nav-link--active");
      siblings = [].filter.call(navItem.parentNode.children, (child) => {
        return child.dataset.section !== `${sectionName}`;
      });
      siblings.forEach((sibling) => {
        sibling.children[0].classList.remove("nav-link--active");
      });
    });
  }; */

  /*  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const entryId = entry.target.id;
      navList.forEach((navItem) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          if (navItem.dataset.section === entryId) {
            navItem.children[0].classList.add("nav-link--active");
          } else {
            navItem.children[0].classList.remove("nav-link--active");
          }
        }
      });
    });
  }, options); */

  // console.log(bodyId);
  switch (bodyId) {
    case "index":
      burgerBtn.addEventListener("click", toggleSiteNav);

      /* --------------------------------------- */
      /*              carousel magic             */
      /* --------------------------------------- */

      /* ---------------- setup ---------------- */
      // initial variables
      const track = document.querySelector(".carousel__track");
      const slides = Array.from(track.children);
      const btnLeft = document.querySelector("#carousel-btn-left");
      const btnRight = document.querySelector("#carousel-btn-right");
      const navPanel = document.querySelector(".carousel__nav-panel");
      const navDots = Array.from(navPanel.children);

      // some useful classnames
      const currentSlideClass = "carousel__slide--current";
      const currentDotClass = "nav-panel__dot--active";

      // NOTE: since slide width is relative to
      // viewport, declare sideWidth with
      // let keyword for mutability
      let slideWidth = 0;

      // methods
      const getSlideWidth = () => {
        slideWidth = slides[0].getBoundingClientRect().width;
      };
      const setSlidePosition = (slide, idx) => {
        slide.style.left = slideWidth * idx + "px";
      };

      const moveToSlide = (track, currentSlide, targetSlide) => {
        const moveAmount = targetSlide.style.left;
        track.style.transition = "transform 0.4s ease-in";
        track.style.transform = "translateX(-" + moveAmount + ")";
        currentSlide.classList.remove(`${currentSlideClass}`);
        targetSlide.classList.add(`${currentSlideClass}`);
      };

      const updateDots = (currentDot, targetDot) => {
        currentDot.classList.remove(`${currentDotClass}`);
        targetDot.classList.add(`${currentDotClass}`);
      };

      const hideShowArrow = (slides, targetIdx, btnLeft, btnRight) => {
        if (targetIdx === 0) {
          btnLeft.classList.add("carousel__btn--is-hidden");
          btnRight.classList.remove("carousel__btn--is-hidden");
        } else if (targetIdx === slides.length - 1) {
          btnLeft.classList.remove("carousel__btn--is-hidden");
          btnRight.classList.add("carousel__btn--is-hidden");
        } else {
          btnLeft.classList.remove("carousel__btn--is-hidden");
          btnRight.classList.remove("carousel__btn--is-hidden");
        }
      };

      /* -------------- executions ------------- */

      // actively update slides size
      if (slideWidth === 0) {
        getSlideWidth();
      }
      // set slides position
      slides.forEach(setSlidePosition);

      // buttons' action
      btnRight.addEventListener("click", (e) => {
        getSlideWidth();
        const currentSlide = track.querySelector(`.${currentSlideClass}`);
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = navPanel.querySelector(`.${currentDotClass}`);
        const nextDot = currentDot.nextElementSibling;
        const nextIdx = slides.findIndex((slide) => slide === nextSlide);

        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrow(slides, nextIdx, btnLeft, btnRight);
      });

      btnLeft.addEventListener("click", (e) => {
        getSlideWidth();
        const currentSlide = track.querySelector(`.${currentSlideClass}`);
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = navPanel.querySelector(`.${currentDotClass}`);
        const prevDot = currentDot.previousElementSibling;
        const prevIdx = slides.findIndex((slide) => slide === prevSlide);

        moveToSlide(track, currentSlide, prevSlide);
        updateDots(currentDot, prevDot);
        hideShowArrow(slides, prevIdx, btnLeft, btnRight);
      });

      navPanel.addEventListener("click", (e) => {
        const targetDot = e.target.closest("button");

        if (!targetDot) return;

        const currentSlide = track.querySelector(`.${currentSlideClass}`);
        const currentDot = navPanel.querySelector(`.${currentDotClass}`);

        const targetIdx = navDots.findIndex((dot) => dot === targetDot);
        const targetSlide = slides[targetIdx];

        moveToSlide(track, currentSlide, targetSlide);
        updateDots(currentDot, targetDot);
        hideShowArrow(slides, targetIdx, btnLeft, btnRight);
      });

      //activate observer
      // sections.forEach((section) => {
      //   observer.observe(section);
      // });
      break;

    default:
      // activate burger btn
      burgerBtn.addEventListener("click", toggleSiteNav);
      break;
  }
};

window.onload = app();
