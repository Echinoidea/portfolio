const agsPage = `
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">ags desktop</legend>
    <p>my sidebar and some important widgets that make up my desktop</p>
  </fieldset>

  <fieldset class="column bordered" style="margin-top: 8px; gap: 16px">
    <p>
      i use the hyprland window manager on my linux desktop and i wanted to make
      my own desktop widgets that match my style and needs.
    </p>

    <p>
      ags is aylur's gtk shell
      <a href="https://github.com/Aylur/ags" style="text-decoration: underline"
        >github</a
      >, it is a scaffold for the astal gjs library.
    </p>

    <p>
      ags uses typescript, so that's what i wrote my program in. my desktop is
      vertically-oriented, so workspaces shift up and down and my status bar is
      on the left side. if you click on the arch icon in the top right, it opens
      my system control/theme menu which is all custom made. it's using pywal
      for the colors which can be auto generated from the current wallpaper or
      from a json file of colors and swww for the wallpaper daemon. the
      wallpaper thumbnails are cropped automatically with ffmpeg to save on
      memory and cpu. the power buttons just use systemctl.
    </p>

    <p>
      when you select one of the color schemes, it updates ags, kitty terminal,
      firefox, and neovim automatically through bash scripts and is quite fast.
    </p>
  </fieldset>

  <fieldset class="column bordered">
    <legend>showcase</legend>

    <div id="ags-showcase">
      <img src="ags/ags.png" alt="ags screenshot alt" style="max-width: 100%" />
    </div>
  </fieldset>
</div>
`;

export default agsPage;

