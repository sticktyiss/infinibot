document.addEventListener('DOMContentLoaded', () => {
  const dts = document.querySelectorAll('.accordion dt');
  let activeDD = null;
  let activeDT = null;

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      const dd = dt.nextElementSibling;

      const isOpen = dd === activeDD;

      // Close any open <dd> and remove active class from its <dt>
      if (activeDD) {
        activeDD.classList.remove('open');
        activeDT.classList.remove('active');
      }

      // If the clicked one isn't already open, open it
      if (!isOpen) {
        dd.classList.add('open');
        dt.classList.add('active');
        activeDD = dd;
        activeDT = dt;
      } else {
        activeDD = null;
        activeDT = null;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.feature');

  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 200); // stagger effect
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 1 });

  features.forEach(feature => observer.observe(feature));
});
