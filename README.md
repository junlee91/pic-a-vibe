# Pic-a-Vibe

##### DemonHacks 2017 Hackathon entry

Pic-a-Vibe is a Web service that uses the integration of the the Bing Search API to search for a picture and create a "vibe" experience. 
The Clarifai API determines key characteristics in the selected picture such as landscapes, bodies of water, animals, and the presence of people. It then generates a list of keywords that can be associated with those descriptions and searches an extensive library of sounds to
associate the tags from the picture with sounds from the sound library (i.e. "a picture of birds" with "the sound of birds chirping"). Through a unique combination of sounds in the background of a startling picture, the user experiences the "vibe" of being in a beautiful
place by virtual means.

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



