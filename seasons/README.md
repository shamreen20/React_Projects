This React App have three challenges:
1. Need to get the users physical Location.
2. Need to determine the current month.
3. Need to change text and styling based on Location and month.

App implementing Steps:
-> JS file loaded by the browser
-> Instance of App component is created.
-> App components "constructor" function gets called.
-> State object is created and assigned to the "this.state" property.
-> We call Geolocation service.
-> React calls the component render method.
-> App returns JSX, gets rendered to the page as HTML.
-> we get result of Geolocation!
-> We update our state object with a call to "this.setState".
-> React sees that we updated the state of a component.
-> React calls our "render" method second time and render returns some (updated) JSX.
-> React takes that JSX and update content on the screen.

