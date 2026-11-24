# DOM

* What does react-dom package
* What does react-dom/server
* DOM
* VDOM
* Shadow DOM
* React Fiber
* Reconciliation
* Diffing algorithm



#### What is frame rate?
Frame rate is the frequency consecutive images appear on a display. Everything we see on our computer screens is composed of images or frames played on the screen at a rate that appears instantaneous to the eye.

To understand what this means, think of the computer display as a flipbook and the pages of the flipbook as frames played at some rate when you flip them.

Comparatively, a computer display is nothing but an automatic flipbook that plays continuously when things change on the screen.

Typically, for a video to feel smooth and instantaneous to the human eye, the video must play at a rate of about 30 frames per second (FPS); anything higher gives a better experience.

Most devices these days refresh their screens at 60 FPS, 1/60 = 16.67ms, which means a new frame displays every 16ms. This number is important because if the React renderer takes more than 16ms to render something on the screen, the browser drops that frame.

In reality, however, the browser has housekeeping to do, so all your work must be completed within 10ms. When you fail to meet this budget, the frame rate drops, and the content judders on screen. This is often referred to as jank, and it negatively impacts the user’s experience.


## Shadow DOM vs Virtual DOM vs Real DOM


> Refer this link  
> https://www.freecodecamp.org/news/virtual-dom-vs-shadow-dom/

