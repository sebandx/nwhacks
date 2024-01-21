'use client'
import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Pushups","Squats","Pullups","Lateral Raises", "Lunges", "Bicep Curls", "Situps","Calf Raises"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [90, 80, 70, 60, 50, 40, 30, 20]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app content-center content-evenly	">
        <div className="row content-center content-evenly	">
          <div className="mixed-chart content-center content-evenly	">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              width="95%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;