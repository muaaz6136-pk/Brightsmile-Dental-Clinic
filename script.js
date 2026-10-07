const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

  });

}


const makeCards = (items, className = "") => {

  return items.map(item => `

    <article class="card ${className}">

      <div class="icon">
        ${item.icon || "•"}
      </div>

      <h3>
        ${item.title || item.name}
      </h3>

      ${item.role
        ? `<p class="role">${item.role}</p>`
        : ""
      }

      <p>
        ${item.text}
      </p>

    </article>

  `).join("");

};



const features =
  document.getElementById("homeFeatures");


if (features) {

  features.innerHTML =
    makeCards(clinicData.features);

}



const values =
  document.getElementById("values");


if (values) {

  values.innerHTML =
    makeCards(clinicData.values);

}



const services =
  document.getElementById("servicesList");


if (services) {

  services.innerHTML =
    makeCards(
      clinicData.services,
      "service-card"
    );

}



const doctors =
  document.getElementById("doctorsList");


if (doctors) {

  doctors.innerHTML =
    makeCards(
      clinicData.doctors,
      "doctor-card"
    );

}



const treatments =
  document.getElementById("treatmentsList");


if (treatments) {

  treatments.innerHTML =
    clinicData.treatments.map(
      (item, index) => `

      <article class="treatment">

        <span>
          0${index + 1}
        </span>

        <div>

          <h3>
            ${item.title}
          </h3>

          <p>
            ${item.text}
          </p>

        </div>

      </article>

    `
    ).join("");

}



const facilities =
  document.getElementById("facilitiesList");


if (facilities) {

  facilities.innerHTML =
    makeCards(clinicData.facilities);

}



const faqList =
  document.getElementById("faqList");


if (faqList) {

  faqList.innerHTML =
    clinicData.faqs.map(
      item => `

      <article class="faq-item">

        <button
          class="faq-question"
          type="button"
        >

          ${item.q}

          <span>+</span>

        </button>

        <div class="faq-answer">

          <p>
            ${item.a}
          </p>

        </div>

      </article>

    `
    ).join("");


  document
    .querySelectorAll(".faq-question")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const item =
            button.parentElement;

          item.classList.toggle("open");


          button.querySelector("span")
            .textContent =
            item.classList.contains("open")
              ? "−"
              : "+";

        }
      );

    });

}



const appointmentForm =
  document.getElementById("appointmentForm");


if (appointmentForm) {

  appointmentForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const name =
        document
          .getElementById("patientName")
          .value
          .trim();


      const service =
        document
          .getElementById("service")
          .value;


      const date =
        document
          .getElementById("date")
          .value;


      const message =
        document.getElementById(
          "formMessage"
        );


      message.textContent =
        `Thank you, ${name}! Your ${service} request for ${date} has been received in this demo.`;


      message.classList.add("success");


      appointmentForm.reset();

    }
  );

}