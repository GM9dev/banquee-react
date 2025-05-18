import { Request, Response } from "express";

function blogSingleTextController(request: Request, response: Response) {
  response.status(200).json({
    app: "App",
    mainTitle: "How To Start Using Banko",
    mainTitle2: "For Your Startup",
    subtitle1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
    subtitle2: "eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    subtitle3: "Dui accumsan sit amet nulla facilisi morbi.",
    title1: "Et malesuada fames ac turpis",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi quis commodo odio. Et malesuada fames ac turpis egestas sed tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis nunc sed augue lacus viverra.",
    text2:
      "Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat sed lectus vestibulum.",
    title2: "Nascetur ridiculus mus",
    text3:
      "Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci a scelerisque purus semper eget duis at. Porta lorem mollis aliquam ut porttitor leo a diam. In fermentum et sollicitudin ac orci phasellus egestas tellus. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Nascetur ridiculus mus mauris vitae ultricies. Dui nunc mattis enim ut tellus. Duis convallis convallis tellus id interdum. Quis ipsum suspendisse ultrices gravida dictum fusce. Scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt augue interdum velit euismod. Nibh tortor id aliquet lectus. Amet commodo nulla facilisi nullam. Vulputate ut pharetra sit amet aliquam id diam maecenas. Tellus pellentesque eu tincidunt tortor. Ultrices vitae auctor eu augue ut lectus arcu bibendum.",
    share: "Share article",
  });
}

export default blogSingleTextController;
