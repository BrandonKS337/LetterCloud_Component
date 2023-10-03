# Letter Cloud Component
Wanted to hash out the idea in my head for a Simply yet nifty header element so came up with this design.

The concept is "collecting your thoughts" and its design is trying to represent pulling those thoughts into a real thing.

## Preview
![<video src="src/assets/DemoVid/recording%20of%20lettersCloud%20component.mp4" title="DemoClip" autoplay></video>](src/assets/DemoVid/ezgif.com-video-to-gif.gif)

## How to Run
* Open code locally using terminal of choice to clone repo and run the below to setup:
    * `npm init` to install nodemon
    * `npm i` to install dependencies listed in packaged.json
    * `npm run dev` to start in dev mode.

 The string text animation is not set up with a delay so its animation runs immediately on load. Refresh the page to rerun animation or save the `PopOutText.jsx` to rerender just the text itself.

## How to scale
* You will need to adjust the `LettersCloud.css` file to modify the floating letters themselves including container size and the opacity changes.
* To adjust the letters direction see the `LetterCloud.jsx` component and directly inside the for loop where everything is set to variables. All these are notated with what they accomplish so feel free to toy around with them a bit to make it fit your needs!
* Ignore the 

## Note: 
For now the scale of the cloud should be at least the same width as the text for animation to seem more realistic. The `math.random()` isn't set up to really respect the boundaries of the container if you get to crazy with the x axis portions so adjust as needed but rule of thumb is: 

` cloudWidthMin = textWidthMax `

## Future Plan:
1. Going to work on making the components responsive to dimension changes so that as you scale up or down the container's area the amount of letters will adjust accordingly.
2. Going to try to tie the PopOutText.js component directly into the LettersCloud.jsx code block so that the letters themselves can be targeting inside the parent component. The goal is to set them to spawn closer to the center point of the cloud so that the animation doesn't generate any letters from outside the container boundaries. Slight annoyance but will make a better change to the code structure.
