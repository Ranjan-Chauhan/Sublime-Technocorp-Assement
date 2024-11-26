import React from "react";
import GetinTouch from "./GetinTouch";

const Home = () => {
  return (
    <div>
      <header className="flex items-center border-b-2 shadow-lg py-4 px-20 space-x-10">
        <div className="font-bold">SOLUTION</div>
        <div className="font-bold">ABOUT NAVVIS</div>
        <div className="font-bold">FEATURED NEWS</div>
        <div className="font-bold">RESOURCES</div>
        <div className="font-bold">NEWSLETTER</div>
      </header>
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex-col justify-center space-y-2 items-center text-6xl font-bold text-center mb-12">
            <div>Reality capture and</div>
            <div>reality access solutions</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Capture Section */}
            <div className="text-center">
              <img
                src="https://www.existingconditions.com/hubfs/image-png-Oct-09-2023-04-35-51-8679-PM.png"
                alt="Capture"
                className="mx-auto mb-4 h-56 w-80 bg-blend-color-burn"
              />
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Capture
              </h3>
              <p className="text-gray-700 mb-6">
                Use{" "}
                <a href="#" className="text-blue-500 underline">
                  NavVis LX-Series
                </a>{" "}
                alongside any surveying devices already in your inventory. For
                accuracy that exceeds industry standards from any wearable or
                handheld device, NavVis LX-Series is powered by precision SLAM
                technology that's entirely in a class of its own. Customers use
                NavVis technology for 90% of their projects.
              </p>
              <a href="#" className="text-blue-600 font-semibold">
                Learn more →
              </a>
            </div>

            {/* Process Section */}
            <div className="text-center">
              <img
                src="https://www.transparentpng.com/thumb/computer/9KxXVp-technological-items-png-laptop-desktop-phone-tablet-usage-fee-technology.png"
                alt="Process"
                className="mx-auto mb-4 h-56 w-80 bg-blend-color-burn"
              />
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Process
              </h3>
              <p className="text-gray-700 mb-6">
                Process, geo-register, and automatically align scan data from
                NavVis devices with survey-grade accuracy. Generate
                photorealistic point clouds and panoramic images seamlessly.
              </p>
              <a href="#" className="text-blue-600 font-semibold">
                Learn more →
              </a>
            </div>

            {/* Access Section */}
            <div className="text-center">
              <img
                src="https://sattec.com.sa/wp-content/uploads/2022/06/372-3720615_edinburgh-computer-repair-pc-laptop-lenovo-ideacentre-aio.jpg"
                alt="Access"
                className="mx-auto mb-4 bg-blend-color-burn"
              />
              <h3 className="text-xl font-semibold mb-4 text-blue-600">
                Access
              </h3>
              <p className="text-gray-700 mb-6 h-56 w-80">
                With{" "}
                <a href="#" className="text-blue-500 underline">
                  NavVis IVION
                </a>
                , point clouds and panoramic images are transformed into
                intelligent spaces accessible from any standard web browser.
                Create virtual sites or digital twins based on your scan data,
                establishing a single source of truth for connected planning and
                decision-making.
              </p>
              <a href="#" className="text-blue-600 font-semibold">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Learn more about ...</h2>
          {/* First Row */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <button className="bg-gray-800 text-white py-3 w-72 hover:bg-gray-700">
              Our products and pricing
            </button>
            <button className="bg-gray-800 text-white py-3 w-72 hover:bg-gray-700">
              Our industry solutions
            </button>
            <button className="bg-gray-800 text-white py-3 w-72 hover:bg-gray-700">
              Improving efficiency with NavVis
            </button>
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-800 text-white py-3 w-64 hover:bg-gray-700">
              Our careers and culture
            </button>
            <button className="bg-gray-800 text-white py-3 w-64 hover:bg-gray-700">
              Our customer support
            </button>
            <button className="bg-gray-800 text-white py-3 w-64 hover:bg-gray-700">
              How to contact us
            </button>
          </div>
        </div>
      </section>

      <featureSection className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 - Double Width */}
            <div className="h-[250px] relative bg-blue-900 text-white p-6 rounded-lg shadow-md overflow-hidden md:col-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url('https://nancy-rubin.com/wp-content/uploads/2021/08/iStock-1299734004.jpg')`,
                }}
              ></div>
              <div className="relative place-items-start pt-24">
                <p className="text-sm font-semibold">SPECIAL OFFER</p>
                <h3 className="text-lg font-bold mt-2">
                  NavVis LX-Series Bundle
                </h3>
                <p className="mt-2">Secure your bundle offer →</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative bg-gray-800 text-white p-6 rounded-lg shadow-md overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661932816149-291a447e3022?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjdG9yeSUyMHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D')`,
                }}
              ></div>
              <div className="relative place-items-start pt-24">
                <p className="text-sm font-semibold">SAMPLE DATA</p>
                <h3 className="text-lg font-bold mt-2">
                  Power Station Construction Site
                </h3>
                <p className="mt-2">Download the sample data →</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="h-[250px] relative bg-gray-700 text-white p-6 rounded-lg shadow-md overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg')`,
                }}
              ></div>
              <div className="relative place-items-start pt-24">
                <p className="text-sm font-semibold">PRESS RELEASE</p>
                <h3 className="text-lg font-bold mt-2">NavVis MLX Launch</h3>
                <p className="mt-2">Read the press release →</p>
              </div>
            </div>

            {/* Card 4 - Double Width */}
            <div className="relative bg-gray-700 text-white p-6 rounded-lg shadow-md overflow-hidden md:col-span-2">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1568226625122-677036fac8a8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZpYXxlbnwwfHwwfHx8MA%3D%3D')`,
                }}
              ></div>
              <div className="relative place-items-start pt-24">
                <p className="text-sm font-semibold">WHITE PAPER</p>
                <h3 className="text-lg font-bold mt-2">
                  Transform Process Operations
                </h3>
                <p className="mt-2">Access the white paper →</p>
              </div>
            </div>
          </div>
        </div>
      </featureSection>

      <section>
        <div className="max-w-6xl mx-auto text-center my-10">
          <h2 className="text-3xl font-bold mb-8">Resources </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Card 1 */}
            <div className="h-[400px] relative bg-gray-50 text-slate-900 p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <h3 className="text-lg font-bold"> Sample data</h3>
                <p className="text-sm font-semibold mt-2">
                  Get free downloads of point clouds, models, linework, and more
                  thanks to seamless integration with 3rd party software.
                </p>
                <p className="mt-2">Secure your bundle offer →</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative  bg-gray-50 text-slate-900 p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <h3 className="text-lg font-bold"> Case studies</h3>
                <p className="text-sm font-semibold mt-2">
                  Get free downloads of point clouds, models, linework, and more
                  thanks to seamless integration with 3rd party software.
                </p>
                <p className="mt-2">Secure your bundle offer →</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="h-[400px] relative  bg-gray-50 text-slate-900 p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <h3 className="text-lg font-bold"> White papers & guides</h3>
                <p className="text-sm font-semibold mt-2">
                  Download and read our white papers and guides about various
                  topics.
                </p>
                <p className="mt-2">Secure your bundle offer →</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="h-[400px] relative bg-gray-50 text-slate-900 p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <h3 className="text-lg font-bold">
                  Upcoming & on-demand webinars
                </h3>
                <p className="text-sm font-semibold mt-2">
                  Watch our webinars on demand and join our live webinars &
                  virtual demos.
                </p>
                <p className="mt-2">Secure your bundle offer →</p>
              </div>
            </div>
            <div className="relative bg-gray-50 text-slate-900 p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <h3 className="text-lg font-bold"> Videos</h3>
                <p className="text-sm font-semibold mt-2">
                  Watch our latest insights from the industry and customer
                  stories.
                </p>
                <p className="mt-2">Secure your bundle offer →</p>
              </div>
            </div>
            <div className="relative bg-gray-50 text-slate-900 p-6 rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <h3 className="text-lg font-bold"> Blog</h3>
                <p className="text-sm font-semibold mt-2">
                  Check out our company news, updates, announcements, useful
                  insights, stories, tips and tricks.
                </p>
                <p className="mt-2">Secure your bundle offer →</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <GetinTouch />
      </div>
    </div>
  );
};

export default Home;
