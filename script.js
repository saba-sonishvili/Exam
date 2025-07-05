
document.querySelectorAll('.tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
      });
    });




const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});


document.addEventListener('DOMContentLoaded', () => {
  const cookieBox = document.getElementById('cookie-box');
  const acceptBtn = document.getElementById('accept-cookie');

  // Show the cookie box only if not already accepted
  if (!localStorage.getItem('cookieAccepted')) {
    cookieBox.classList.add('show');
  }

  // Hide cookie box and save to localStorage when accepted
  acceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', 'true');
    cookieBox.classList.remove('show');
  });
});



const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const message = document.getElementById("message");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const errorBox = document.getElementById("formError");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let errors = [];

    if (message.value.trim() === "") errors.push("Message is required.");
    if (name.value.trim() === "") errors.push("Name is required.");
    if (email.value.trim() === "") {
      errors.push("Email is required.");
    } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      errors.push("Email format is invalid.");
    }
    if (subject.value.trim() === "") errors.push("Subject is required.");

    if (errors.length > 0) {
      errorBox.innerHTML = errors.join("<br>");
    } else {
      errorBox.innerHTML = "";
      alert("Message sent successfully!");
      form.reset();
    }
  });
});






  document.addEventListener("DOMContentLoaded", () => {
    const pastList = document.getElementById("pastHolidays");
    const upcomingList = document.getElementById("upcomingHolidays");

    fetch("https://date.nager.at/api/v3/publicholidays/2025/ID")
      .then((res) => res.json())
      .then((holidays) => {
        const today = new Date();

        holidays.forEach((holiday) => {
          const holidayDate = new Date(holiday.date);
          const li = document.createElement("li");
          li.textContent = `${holiday.date} — ${holiday.localName}`;

          if (holidayDate < today) {
            pastList.appendChild(li);
          } else {
            upcomingList.appendChild(li);
          }
        });
      })
      .catch((err) => {
        console.error("Failed to load holidays:", err);
      });
  });


