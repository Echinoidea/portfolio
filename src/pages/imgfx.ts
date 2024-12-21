const imgfxPage = `
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">imgfx</legend>
    <p>low level, fast image filtering program written in rust</p>
    <br/>
    <a href="https://github.com/Echinoidea/imgfx-cli">GitHub</a>
      <br/>
    <a href="https://crates.io/crates/imgfx">crates.io</a>
  </fieldset>

  <fieldset class="column bordered" style="margin-top: 8px">
    <p>this project is composed of a rust crate and a cli frontend for it.</p>
    <p>this project is similar to ffmpeg's filters, but it doesn't use ffmpeg at all.</p>
    <p>i am making this instead of using ffmpeg because i want to practice rust and also i plan on using this for a few more projects</p>
  </fieldset>

  <fieldset class="column bordered" style="gap: 16px">
    <legend>usage</legend>
    <div>
      <p>operations:</p>
      <p>- or</p>
      <p>- and</p>
      <p>- xor</p>
      <p>- left</p>
      <p>- right</p>
      <p>- add</p>
      <p>- sub</p>
      <p>- mult</p>
      <p>- div</p>
      <p>- avg</p>
      <p>- screen</p>
      <p>- overlay</p>
      <p>- bloom</p>
    </div>

    <p>imgfx -i &lt;path/to/input&gt; &lt;operation&gt; &lt;params&gt;</p>

    <p>
      imgfx writes the raw image data to stdout. if no input flag is provided,
      it will expect raw image stdin. you can use this to pipe it into itself to
      create chains of effects. this is my favorite part of the program.
    </p>

    <p>
      i will be working on a new project that uses this crate with a friend
      soon. it will take an image, gif, or video as input and do the specified
      operation while interpolating between
      <span style="font-style: italic">n</span> colors based on the amplitude of
      a frequency range in an audio stream. this will make a really cool and
      unique music visualizer program that i want my musician friend to use.
    </p>
  </fieldset>

  <fieldset class="column bordered">
    <legend>showcase</legend>

    <div class="two-col-grid" id="imgfx-showcase"></div>
  </fieldset>
</div>
`;

export default imgfxPage;
