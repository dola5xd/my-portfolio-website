import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.message) {
      return;
    }

    try {
      setIsSending(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          name: formData.name,
        }),
      });

      // handle success
      if (response.ok) {
        setFormData({
          email: "",
          message: "",
          name: "",
        });
        setSending(true);
      }
    } catch (error) {
      console.log("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };

  if (sending)
    return (
      <h1 className="gradient-text text-center text-2xl lg:text-5xl">
        Thanks for your email! <span>I will response soon!</span>
      </h1>
    );

  return (
    <form onSubmit={handleSubmit} className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-1 lg:p-2 w-1/2">
          <div className="relative">
            <label
              htmlFor="name"
              className="leading-7 text-sm text-dark-gray-500"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              value={formData.name}
              type="text"
              id="name"
              name="name"
              disabled={isSending}
              className="w-full bg-dark-gray-800 bg-opacity-50 rounded border border-dark-gray-500 focus:border-indigo-500 focus:bg-dark-background text-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-1 lg:p-2 w-1/2">
          <div className="relative">
            <label
              htmlFor="email"
              className="leading-7 text-sm text-dark-gray-500"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
              disabled={isSending}
              value={formData.email}
              className="w-full bg-dark-gray-800 bg-opacity-50 rounded border border-dark-gray-500 focus:border-indigo-500 focus:bg-dark-background text-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div className="p-1 lg:p-2 w-full">
          <div className="relative">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-dark-gray-500"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              disabled={isSending}
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-dark-gray-800 bg-opacity-50 rounded border border-dark-gray-500 focus:border-indigo-500 focus:bg-dark-background text-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button
            className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 disabled:bg-gray-500 rounded text-lg"
            disabled={isSending}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
