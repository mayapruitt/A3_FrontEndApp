# A3_Front End App
## Setup

This site lets users enter the name of a city and returns the date and time for the next visible pass of the International Space Station at that location. 

You can visit this site at any time here on [glitch.](https://pruitt-a3-frontendapp-iss.glitch.me)

Depending on your internet connection it may take a while to receive information from space. Please be patient :)
(Best results in Google Chrome).

If you want to run the project locally, follow the steps below:

1. Clone this github folder to your preferred location on your computer. 
2. Use the Terminal to cd to this project. 
3. Start a local server using the command: ```python -m SimpleHTTPServer```
4. Go to your browser and type: ```http://localhost:8000```

## Assignment

Create a dynamic front end web application that:

- connects with an API
- includes an interactive element that responds to an event 
- is responsive to the screen size

## Inspiration

My process begain by reviewing the [list of free APIs](https://github.com/public-apis/public-apis#text-analysis) and imagining what types of user interaction could pair with ones that seemed compelling. I was drawn to the [Open Notify API](http://open-notify.org/Open-Notify-API/ISS-Pass-Times/) which provides information regarding the ISS.

Instantly, I knew I would like to have users input a city and discover when the ISS would be visible from their location. 

*This project is dedicated to my partner and future astronaut. For when you are in space, I will watch from Earth.*

## Wireframe

A quick sketch helped map out the elements for the web design -- Mainly a title, some sort of instructions, a input box where users could type, a button that would call the API(s), and text to display the response. This element would need to update depending on user interation. 

![sketch](https://github.com/mayapruitt/A3_FrontEndApp/blob/master/documentation/outline.JPG)

This low fidelity handwritten verision was then transferred to a higher fideltiy digital verision using [Figma](https://www.figma.com/file/NCLBf8lVW6XSRqXC3nKzbl/Design?node-id=0%3A1), which I was trying for the first time. In efforts to keep things simple, the design planned for only one page with minimal text and intuitive keyboard/mouse interactions. 

![digital wireframe](https://github.com/mayapruitt/A3_FrontEndApp/blob/master/documentation/wireframe.png)

## Development

Perhaps a bit out of order in the process. I decided to begin coding after wireframing in order to get some functionality up and running, especially since I knew connecting to the APIs would be most difficult for me. 

I hit a few snags early on. The output that I wanted (ISS Pass Times) required inputs of precise latitude and longitude. The average person wouldn't know that off hand, so I needed a way to obtain lon & lat info from a city name alone. But how?? 

Since I wanted to mimic the interaction of typing in a city name from the weather app, I decided to look deeper into that [weather API](api.openweathermap.org). Upon further investigation, I discovered that this API included coordinate data in their json output. 

The structure of the website would now have to be pulling the coordinates from this API and then inputting them into the ISS API. 

The biggest breakthrough was using **template strings**, which let user input be placed into the API urls automatically. 

Once I got the weather API and ISS API working together in the same program, I hit a roadblock: 
```
[Error] Origin http://localhost:8000 is not allowed by Access-Control-Allow-Origin.

[Error] Fetch API cannot load http://api.open-notify.org/iss-pass.json?lat=51.51&lon=-0.13 due to access control checks.

[Error] Failed to load resource: Origin http://localhost:8000 is not allowed by Access-Control-Allow-Origin. (iss-pass.json, line 0)
```
I went down a bit of a rabbit hole looking into this error and no-cors methods, until my partner discovered that the issue was on the API's end. Fortunately he found a comporable API called [N2YO](https://www.n2yo.com/api/) that hadn't put restrictions on their accessibilty and still required location coordinate input. 

## Mood Board 

Once the basic functionality was in place, the website looked like my basic wireframe. Now it was time to approach the visual design. Using pinterest I gathered images of space themed aesthetics. I looked at graphic block prints for color palette and font inspiration.

![moodboard image](https://github.com/mayapruitt/A3_FrontEndApp/blob/master/documentation/moodboard.png)

## Design 

I went through a few iterations of design, playing with more realistic imagery, silouhettes, and night sky scenes.
Posters designed for the hisotric space robotics missions were especially beautiful, so I decided to model my site after those. The chosen fonts were legible with a scifi or computerized feel. 

![iterations](https://github.com/mayapruitt/A3_FrontEndApp/blob/master/documentation/iterations.png)

I created a background image of a night sky and experimented with which elements looked best in certain colors and fonts. 

![style guide](https://github.com/mayapruitt/A3_FrontEndApp/blob/master/documentation/styleguide.png)

This became the final design:

![final](https://github.com/mayapruitt/A3_FrontEndApp/blob/master/documentation/finaldesign.png)

## CSS Styling

This was definitley the most fun to code. Its very satisfying to have immediate visual feedback. Because the layout was essentially vertically stacked elements, this made it easier to position text with margins and padding. 

The biggest challenges were deciding on sizes, I feel like i'm still unsure of the best practices, but created a base font size like we had in class and used rem for all other font size instances. 

As a final step I animated the ISS satelitte but had a lot of trouble figuring out how to get a video to play. I tried exporting a video as .webm since this is a web format that can maintain alpha. However, this would not show on autoplay, only when controlled. My solution was to change the background pic to an animated gif, though I'm not 100% thrilled with the noisy quality of gifs. 

Is there a way to create layers? For instance background, a transparent video abover this, and then the text content on the very top?

Another issue, I encountered was that the API does not respond on mobile (after spending so much time working with media queries and sizing assets). Is this a problemn on my end? Does mobile need different calls than clicks?

Overall, I am very pleased with the final result. This is my first time creating an original desing and being able to code it from scratch!


# Deploying to Glitch.com
1. Make sure the git repo is public
2. Make sure the git repo is up to date
3. Copy the repo link
4. Create a new project on glitch
5. Open "Tools" --> "Git, Import, and Export"
6. Click "Import from Github", pase the repo link
7. Press "ok" and watch your code magically appear!

# References
- [Google Fonts](https://fonts.google.com/specimen/Inconsolata?selection.family=Inconsolata:400,700|Montserrat:400,700,800)
- [Pinterest](https://www.pinterest.com)
- [CSS Forms](https://www.w3schools.com/css/css_form.aspjavascript-frontend-guide.md#javascript-events)
- [ISS from Earth](https://www.youtube.com/watch?v=ktZxgfm2_7E&app=desktop)

# Author 
Maya Pruitt