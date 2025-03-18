import { useState } from "react";
import { IoIosSend } from "react-icons/io";

function VisitPokharaForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};
    if (!name) newErrors.name = "Full Name is required!";
    if (!email) newErrors.email = "Email is required!";
    if (!travelDate) newErrors.travelDate = "Travel date is required!";
    if (!purpose) newErrors.purpose = "Please select a purpose!";
    return newErrors;
  };

  const submit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    console.log("Form submitted", {
      name,
      email,
      phone,
      travelDate,
      purpose,
      message,
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-6 mt-10">
        Request Visit to Pokhara
      </h2>
      <form className="flex flex-col gap-4" onSubmit={submit}>
        <div>
          <label className="block text-gray-500">Full Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-100 p-2 rounded-md w-full"
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-400">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-gray-500">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-100 p-2 rounded-md w-full"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-400">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-gray-500">Phone Number (Optional)</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-gray-100 p-2 rounded-md w-full"
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <label className="block text-gray-500">Travel Date</label>
          <input
            type="date"
            name="travelDate"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            className="bg-gray-100 p-2 rounded-md w-full"
          />
          {errors.travelDate && (
            <p className="text-red-400">{errors.travelDate}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-500">Purpose of Visit</label>
          <select
            name="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="bg-gray-100 p-2 rounded-md w-full"
          >
            <option value="">Select a purpose</option>
            <option value="Tourism">Tourism</option>
            <option value="Business">Business</option>
            <option value="Family Visit">Family Visit</option>
            <option value="Other">Other</option>
          </select>
          {errors.purpose && <p className="text-red-400">{errors.purpose}</p>}
        </div>

        <div>
          <label className="block text-gray-500">Additional Message</label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="bg-gray-100 p-2 rounded-md w-full"
            placeholder="Provide more details about your visit request"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md flex items-center gap-2"
        >
          <IoIosSend className="text-xl" />
          <span>Submit Request</span>
        </button>
      </form>

      {/* Map of Pokhara */}
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Map of Pokhara</h3>
        <iframe
          title="Pokhara Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14127.134477702302!2d83.95116430378896!3d28.209583533246522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959413e2277d35%3A0x58a66bde0975c091!2sPokhara!5e0!3m2!1sen!2snp!4v1710203045678"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          className="rounded-md shadow-md"
        ></iframe>
      </div>
    </div>
  );
}

export default VisitPokharaForm;
