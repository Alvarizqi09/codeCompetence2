import { TEInput, TERipple } from "tw-elements-react";
import { useState } from "react";

const Description = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className='flex bg-gray-400 justify-between items-center text-center font-semibold p-5 place-content-center'>
      <div className='m-14'>
        <h3 className='text-4xl font-semibold text-gray-800 mb-6'>
          Contact us!
        </h3>
        <p className='text-gray-700 text-lg leading-7 mb-8 text-justify'>
          Have a quick question? Fill out this form and we will get back to you as soon as possible!
        </p>
      </div>
      <div className="max-w-sm rounded-lg bg-zinc-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between  text-black space-x-3">
            <TEInput
              type="text"
              name="firstName"
              label="First Name"
              className="mb-6 text-black"
              onChange={handleInputChange}
              value={formData.firstName}
            ></TEInput>
            <TEInput
              type="text"
              name="lastName"
              label="Last Name"
              className="mb-6 text-black"
              onChange={handleInputChange}
              value={formData.lastName}
            ></TEInput>
          </div>
          <div>
            <TEInput
              type="email"
              name="email"
              label="Email"
              className="mb-6 text-black"
              onChange={handleInputChange}
              value={formData.email}
            ></TEInput>
          </div>
          <div>
            <div className="relative mb-6">
              <textarea
                className="peer border-2 text-black block min-h-[auto] w-full rounded border-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:border-neutral-600 focus:border-primary"
                name="message"
                rows={3}
                onChange={handleInputChange}
                value={formData.message}
              ></textarea>
              <label
                htmlFor="exampleFormControlTextarea13"
                className="peer-focus:bg-transparent text-black pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary dark:peer-focus:bg-neutral-700"
              >
                Message
              </label>
            </div>
          </div>
          <TERipple rippleColor="light" className="w-full">
            <button
              type="submit"
              className="inline-block rounded w-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            >
              Send
            </button>
          </TERipple>
        </form>
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 max-w-md rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data Form</h2>
              <p>First Name: {formData.firstName}</p>
              <p>Last Name: {formData.lastName}</p>
              <p>Email: {formData.email}</p>
              <p>Message: {formData.message}</p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 inline-block bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary-600 transition duration-150 ease-in-out"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
