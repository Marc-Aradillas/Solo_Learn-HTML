HTML5 Web Storage

With HTML5 web storage, websites can store data on a user's local computer.
Before HTML5, we had to use JavaScript cookies to achieve this functionality.

The Advantages of Web Storage
- More secure
- Faster
- Stores a larger amount of data
- Stored data is not sent with every server request

Local storage is per domain. All pages from one domain can store and access the same data.



Types of Web Storage Objects

There are two types of web storage objects:
- sessionStorage()
- localStorage()

Local vs. Session
- Session Storage is destroyed once the user closes the browser
- Local Storage stores data with no expiration date
You need to be familiar with basic JavaScript in order to understand and use the API.



Working with Values

The syntax for web storage for both local and session storage is very simple and similar.
The data is stored as key/value pairs.

Storing a Value: 

localStorage.setItem("key1", "value1");

Getting a Value:

//this will print the value
alert(localStorage.getItem("key1")); 

Removing a Value:

localStorage.removeItem("key1");

Removing All Values:
localStorage.clear();

The same syntax applies to the session storage, with one difference: Instead of localStorage, sessionStorage is used.
