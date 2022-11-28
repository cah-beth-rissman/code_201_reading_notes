Class 11 - Audio and Video in HTML; Domain Modeling Revisited

## [Video and Audio Content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

* Explain how the ability to use video and audio on the web has evolved since the early 2000s.
  * Proprietary plug-in based technologies, security and accessibility issues. Movement towards HTML solutions and JS APIs. 
* Describe the use of the src and controls attributes in the <video> element.
  * src: attribute contains a path to the video you want to embed
  * controls: Users must be able to control video and audio playback. You must either use the controls attribute to include the browser's own control interface, or build your interface using the appropriate JavaScript API. At a minimum, the interface must include a way to start and stop the media, and to adjust the volume. (Source: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
* Why is it important to have fallback content inside the <video> element?
  * Options for those that are using older browsers, another way of accessing the video, perhaps via a link.
* Write a very short story where <audio> and <video> are characters. 

## [A Complete Guide To Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

* How does Grid layout differ from Flex? 
  * Flex is designed for layout in one dimension, either a row or a column. Grid is designed for two dimensional layout, both rows and columns as the same time. 
* Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences.
  * Grid container: grid items are placed inside columns and rows that are the grid container
  * Grid item: child element within a grid container
  * Grid line: numbered lines for positioning items. 

## [Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

* Besides making a site visually appealing across different screen sizes, why should developers make images responsive? 
  * Art direction: cropped images for different layouts and resolution switching: serve smaller image files to narrow-screen devices and to serve different resolution images to high density/low density screens.
* Define the following <img> attributes srcset and sizes. Write an example of how they are used.
  * srcset: images sources for the user agent to use, composed of an image URL and width descriptor
  * sizes: attribute on img element to define images resources and help tot determine the best image source to display. 
  * Attributes are used to choose which images are fetched for display depending on the media condition, for instance high resolution displays, small screen size, etc. 
* How is srcset more helpful for responsive images than CSS or JavaScript?
  * srcset allows the browser to choose which image to display and as browser technology improves the better choice can be made without needing adjustments from developers.

## Bookmark and Review
* [Images in HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)

> This article is review from Class 05.

* [Other Embedding Technologies](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)

## Things I want to know more about