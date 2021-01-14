# Decagon
WELCOME

Thank you for checking out this task by Decagon

### Link to live server
[Decagon](https://xtarachiever.github.io/Decagon/index.html)

## THE CHALLENGE
The API used was generated from Random User Generator and the [Link](https://randomuser.me/) to the full API site.
The framework/library used is React. With react, the work is simpler and a lot of packages installed made the work faster.

The features implemented in this projects are:

-A search filter using the name of each user to filter the datas

-A featured dropdown select box to filter the data based on the countries

-A filter feature based on the gender

The API given generates random user datas and to reduce the number of data being fetched, I used a precise number of 20 random users

# Functional Components

In react, I used the Functional Components, A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element. A class component requires you to extend from React. Component and create a render function which returns a React element.
It is noticed that the Class components is more referred to the functional components but here are some reason why functional components should be used:

 -Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks
 
 -You end up with less code
 
 -They help you to use best practices. It will get easier to separate container and presentational components because you need to think more about your component’s state        
 
 -if you don’t have access to setState() in your component
 
 -The React team mentioned that there may be a performance boost for functional component in future React versions
 
 Another feature that was implemented in this project is downloading the data
 
 ## DOWNLOADING THE FILE 
 
 [Full write-up](https://medium.com/javascript-in-plain-english/how-to-create-download-and-upload-files-in-react-apps-80893da4247a)

With HTML5, some prior complications are eliminated. Eg, the download attribute of the anchor element is easily used to set the suggested filename. Here’s the pattern:

1) The user initiates the download via a button connected to a JavaScript method.

2) The data is converted to the output format. The result is a string.

3) A Blob is created from the string.

4) An Object URL is created from the Blob using the URL.createObjectURL method.

5) A hidden anchor element’s href attribute is set to the Object URL.

6) The anchor element’s click method is invoked. Normally the click method is invoked when the user clicks on the element. In this case, we programmatically click the element so the user only needs to initiate the download in step 1.

7) After the click method completes, the Object URL can be freed.

The download format was set to be CSV, to download in this format, the following steps must be taken:
For CSV, multiple [JavaScript generator implementations](https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side) are available. XML is not hard to create either. But if you store it in the DOM, remember that you’ll need to convert the structure to a string before it can be written to a file.
