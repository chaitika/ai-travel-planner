import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelsList } from "@/constants/options";
import { Button } from "@/components/ui/button";
function CreateTrip() {
  const [place, setPlace] = useState("");

  const [formData, setformData] = useState("");

  const handleInputChange = (name, value)=>
  {
    setformData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => { console.log(formData); },[formData])

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your travel preferences 🏕️🌴
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information and our trip planner will generate a
        customized itinerary based on your preferences.
      </p>
      <div className="mt-20 fle flex-col gap-9">


        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log(place); // You can use the location for future use here
            }}
          >
            <textarea
              name="destination"
              placeholder="Enter your destination"
              className="w-full h-9 p-1 border border-gray-300 rounded-md bg-white text-black"
              value={place}
              onChange={(e) => { setPlace(e.target.value); handleInputChange('location',e.target.value) }}
            />
          </form>
        </div>

        
        <div>
          <h2 className="text-xl my-3 font-medium">
            For how many days are you plannign your trip?
          </h2>
          <Input type="number" placeholder="Ex. 3" />
        </div>
      </div>

      <div className="">
        <h2 className="text-xl my-3 font-medium">What is your Budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              className="p-4 border cursor-pointerpointer rounded-lg hover:shadow-lg"
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="m-5">
        <h2 className="text-xl my-3 font-medium">
          Who do you plan on travelling with on your next adventure?
        </h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {SelectTravelsList.map((item, index) => (
            <div
              key={index}
              className="p-4 border cursor-pointerpointer rounded-lg hover:shadow-lg"
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg">{item.title}</h2>
              <h2 className="text-sm text-gray-500">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="my-10 justify-end flex">
        <Button>Generate Trip </Button>
      </div>
    </div>
  );
}

export default CreateTrip;
