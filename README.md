# Plotting a chart - Intelie Challenge

## About

This project is a solution for the Intelie Frontend Challenge to build an application that renders a chart from an input data in json. This data consists in a list of events represented in the form of objects. Each event has its own properties but they share both type and timestamp fields.

The events can be in for types: `start`, `span`, `data` and `stop`. The `start` type provides the properties that will be plotted from the data types. `span` provides the beginning and the end for the data events series. `data` are the data points itself. It's the trickiest one because it might have different kinds of properties. The last one, and the simplest of all is the stop type, which only consists of the type and timestamp fields.

Here's some sample of the data plot:

```json
[
  {
    "type": "start",
    "timestamp": 1519780251000,
    "select": [
      "min_response_time",
      "max_response_time"
    ],
    "group": [
      "os",
      "browser"
    ]
  },
  {
    "type": "`span`",
    "timestamp": 1519780251000,
    "begin": 1519780251000,
    "end": 1519780255000
  },
  {
    "type": "data",
    "timestamp": 1519780251000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.1,
    "max_response_time": 1.3
  },
  {
    "type": "data",
    "timestamp": 1519780252000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.2,
    "max_response_time": 1.4
  },
  {
    "type": "data",
    "timestamp": 1519780253000,
    "os": "linux",
    "browser": "chrome",
    "min_response_time": 0.3,
    "max_response_time": 1.5
  },
  {
    "type": "stop",
    "timestamp": 1519780256000
  }
]
```

In challenge description the input format was not necessarily json, but I took the liberty to make it more strict for two reason:

  1. first because it would take more time and effort to create a backend to deal with the old format. Json on the other hand is easy to parse in JavaScript.

  2. And second, I wanted to take some advantage of the code editor library that I chose for the project. AceEditor is able to indicate syntax errors and it has a vast list of highlighting options.

The input is processed by a series of functions that extracts all the information needed to plot the chart. By click on the `GENERATE CHART` button, the text input, once a string, is parsed to JSON and used as an input for the function `extractPlotInformation`. The return of this function is an object with the follow properties:

  - `dataLabels`: The x-axis labels that comprehends the time information.
  - `plotData`: A list of objects that contains the name of the group and a lista of values for each x-axis label.
  - `begin`: The start point provided by `span`.
  - `end`: The end point provided by `span`.

All that information can be accessed by the hook `useEvent`. Besides the properties needed to plot the data, this hook all provides:

  - `inputData`: String that stores the state of the input from the text editor.
  - `setInputData`: Function to modify the state of the `inputData`.
  - `handleGenerateChart`: Handler function to plot the data. It runs by clicking on the `GENERATE CHART` button and modifying the state of the variables.
  - `hasError`: Boolean that stores the state of some indication that an Error was raised.
  - `setHasError`: Sets the state of `hasError`.
  - `errorMessage`: Stores the message from an Error that was raised.

In case of an Error when trying to plot the data, the information about the error will be stored and displayed inside a Modal. Here's a list of errors that might occur:

  - Empty text input.
  - Absence of the `start`, `span` or `stop` events.
  - Absence of the selected field or group in the `data` event.

## Tecnologies

  - React
  - Typescript
  - ReactModal
  - ApexCharts
  - AceEditor
  - Jest
  - SCSS
  - ContextAPI

## Running the code

```bash
# 1. Clone this repository in your machine
$ git clone https://www.github.com/hereisjohnny2/challenge-chart-plot.git

# 2. Get into the directory
$ cd challenge-chart-plot/

# 3. Install the dependcies
$ yarn

# 4. Start the Development server
$ yarn start
```

This project also contains a set of tests over the functions that process the input data. To run those run:

```bash
$ yarn test
```