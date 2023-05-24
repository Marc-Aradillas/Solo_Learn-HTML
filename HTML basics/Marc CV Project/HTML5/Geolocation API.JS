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



  
Presenting Data


User location can be presented in two ways: Geodetic and Civic.

1. The geodetic way to describe position refers directly to latitude and longitude.
2. The civic representation of location data is presented in a format that is more easily read and understood by the average person.

Each parameter has both a geodetic and a civic representation:

Attribute   Geodetic      Civic

Position    59.3, 18.6    Stockholm
Elevation   10 meters     4th Floor
Heading     234 degrees   City center
Speed       5 km/h        Walking
Orientation 45 degrees    North-East


The getCurrentPosition() method returns an object if it is successful. The latitude, longitude, and accuracy properties are always returned.
