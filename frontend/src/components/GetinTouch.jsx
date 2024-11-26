import React from "react";

const GetinTouch = () => {
  return (
    <div className="w-full h-full">
      {/* <img
        src="https://img.freepik.com/free-vector/background-realistic-abstract-technology-particle_23-2148431735.jpg"
        alt=""
        className="w-full h-full"
      /> */}

      <div className="w-full h-full relative bg-gray-700 text-white p-6 shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50 w-full h-full"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1568226625122-677036fac8a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpYXxlbnwwfHwwfHx8MA%3D%3D')`,
          }}
        ></div>
        <div className="relative py-10 flex-col justify-center items-center">
          <h3 className="flex justify-center items-center text-3xl py-10 font-semibold">
            Get the latest news as it happens
          </h3>
          <p className="flex justify-center items-center text-base font-bold mt-2">
            You'll get the latest updates, news, and industry insights – plus
            the occasional newsflash – direct from the team at NavVis.
          </p>
          <form className="flex flex-col items-center justify-center space-y-6 py-10">
            <div className="flex justify-center items-center space-x-6">
              <input
                id="firstname"
                name="firstname"
                type="text"
                required
                placeholder="First name*"
                className="py-2.5 px-40 pl-3 bg-gray-600"
              />
              <input
                id="email"
                name="email"
                type="text"
                required
                placeholder="Bussiness Email*"
                className="py-2.5 px-40 pl-3 bg-gray-600 "
              />
            </div>
            <div className="flex justify-center items-center">
              <select required className="py-2.5 px-[590px] pl-3 bg-gray-600">
                <option value="">Country*</option>

                <option value="1">GeeksforGeeks</option>
                <option value="2">w3skul</option>
                <option value="3">tuitorial point</option>
                <option value="4">CodeComunity</option>
                <option value="5">Coders</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-center w-full py-8 space-y-6">
              <p
                className="w-[770px]
             text-center text-sm"
              >
                By submitting this form, I request and agree to receive the
                respective information via e-mail. I acknowledge that I am
                entitled to withdraw this consent at any time via the
                unsubscribe link in the respective e-mail.{" "}
              </p>
              <p className="w-[770px] text-center text-sm">
                I further confirm that I agree to the processing of my personal
                data by NavVis for the purposes stated in this form. I am aware
                that I am entitled to withdraw my consent to this data
                processing at any time by sending an e-mail to
                privacy@navvis.com. More information on how to withdraw consent
                or unsubscribe, NavVis' privacy practices, and how NavVis is
                committed to protecting and respecting my privacy can be found
                in NavVis' Privacy Policy.
              </p>
            </div>
            <div>
              <button className="text-sm font-bold py-3 px-8 bg-blue-500">
                Subscribe to the newsletter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetinTouch;
