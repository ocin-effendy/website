import React from "react";
import Speaker from "../../component/Card/Speaker";

function OurSpeakers({ data }) {
  return (
    <div className="sm:w-full md:w-11/12 xl:w-4/5 mx-auto mb-12 lg:my-24">
      <h1 className="md:text-3xl font-Lato md:my-10 my-3 text-center ">
        Our Speakers
      </h1>
      <div className="flex justify-evenly md:justify-between">
        {data.ourSpeakers.map((e, i) => {
          return <Speaker data={e} key={`speaker-${i}`} />;
        })}
      </div>
    </div>
  );
}

export default OurSpeakers;
