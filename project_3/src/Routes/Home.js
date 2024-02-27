import { Component } from "react";

function Home() {
  return (
    <div>
      <h1 className="bg-dark text-white p-3">This is home</h1>
      <div className="row-mid-6">
        <div className="col-md-6">
          <img src="random.jpg" width="400" />
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

export default Home;
