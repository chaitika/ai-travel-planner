//import React from 'react'
function CreateTrip() {
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">Tell us your travel preferences</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information and our trip planner will generate a
        customized itinerary based on your preferences.
      </p>
      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <form action="">
            <textarea
              name="destination"
              placeholder="Search"
              className="w-400 h-9 p-1 border  border-gray-300 rounded-md bg-white text-black"
            ></textarea>
            <br />
            <input
              type="submit"
              value="Submit"
              className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-md"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
