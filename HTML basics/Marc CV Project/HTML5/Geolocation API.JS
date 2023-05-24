What is the Geolocation API?

In HTML5, the Geolocation API is used to obtain the user's geographical location.

Since this can compromise user privacy, the option is not available unless the user approves it.

Geolocation is much more accurate for devices with GPS, like smartphones and the like.


Using HTML Geolocation

The Geolocation API’s main method is getCurrentPosition, which retrieves the current geographic location of the user's device.

navigator.geolocation.getCurrentPosition();

Parameters:
showLocation (mandatory): Defines the callback method that retrieves location information.

ErrorHandler(optional): Defines the callback method that is invoked when an error occurs in processing the asynchronous call.

Options (optional): Defines a set of options for retrieving the location information.

*** You need to be familiar with basic JavaScript in order to understand and use the API. ***
