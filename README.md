# Pic-a-Vibe

##### DemonHacks 2017 Hackathon entry

Pic-a-Vibe is a Web service which integrates the Bing Search API to allow a user to search and select a picture. 
The Clarifai API then determines key characteristics that are found in the picture such as landscapes,
bodies of water, the presence of people, etc. A list of keywords is generated and passed through
a library of sounds containing specific tags. The tags are selected so as to complement the picture as
if those would be the exact same sounds were the user in the location of the selected picture. All this is done to create
a virtual environment where the user can feel as if they are experiencing being in a remote location 

### Technologies used

- Javascript
- HTML
- CSS
- Bootstrap
- node.js
- Jquery
- Bing Search API
- Clarifai API


### Future plan
Our objective going forward is to move all sound files to a cloud-based database like Amazon EC2, and sort them 
with extensive and specific tags. Our reasoning is that the more sounds we can integrate with Clarifai's tags the 
better of a "vibe" the user will experience when utilizing the web service. Future implementations will also include
the ability for a user to upload a picture from a local drive to create a vibe as well as a ranked list of past user's "vibes".









 