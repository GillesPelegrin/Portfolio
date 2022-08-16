import TopicTitle from "../../topic-title";
import React, { useState } from "react";
import { useToast } from "../../toast/use-toast";

export default function Language() {
  const toast = useToast(20000);
  const emptyContactForm = {
    name: "",
    email: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState(emptyContactForm);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleSubmit(e) {
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contactForm }),
    })
      .then(() =>
        toast(
          "success",
          "You have successfully send a mail to Gilles Pelegrin!"
        )
      )
      .then(() => setContactForm(emptyContactForm))
      .catch((error) =>
        toast("error", "Something went wrong while sending this email")
      );
  }

  return (
    <>
      <div
        id="contact"
        className=" mx-3 flex flex-col items-center justify-center
         gap-8 md:mx-6 md:gap-10 lg:mx-20 lg:flex-grow lg:flex-row lg:justify-between 2xl:mx-40"
        style={{ height: `calc(100vh * 4/6)` }}
      >
        <TopicTitle title="Contact" />
        <div
          className=" xl:p w-full rounded border border-4 border-white bg-white px-4 py-6 font-serif text-base
          text-color-title shadow-card md:w-1/2 md:p-6 md:text-xl 2xl:p-10 2xl:text-2xl"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:gap-6 2xl:gap-8"
          >
            <div className="flex flex-col">
              <label htmlFor="name">Name / Company</label>
              <input
                id="name"
                type="text"
                className="rounded border border-black pl-2 focus:outline-primary"
                required={true}
                value={contactForm.name}
                onChange={(event) =>
                  setContactForm({
                    ...contactForm,
                    ...{ name: event.target.value },
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="rounded border border-black pl-2 focus:outline-primary"
                required={true}
                value={contactForm.email}
                onChange={(event) =>
                  setContactForm({
                    ...contactForm,
                    ...{ email: event.target.value },
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                type="text"
                rows={4}
                className="rounded border border-black pl-2 focus:outline-primary"
                required={true}
                value={contactForm.message}
                onChange={(event) =>
                  setContactForm({
                    ...contactForm,
                    ...{ message: event.target.value },
                  })
                }
              ></textarea>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="rounded-md border border-4 border-secundary px-2 py-1 font-semibold text-secundary hover:bg-secundary hover:text-white  md:px-4 md:py-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
