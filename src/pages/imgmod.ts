const imgmodPage = `
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">imgmod</legend>
    <p>low level, fast image filtering program written in rust</p>
    <a href="https://github.com/Echinoidea/img-mod">GitHub</a>
  </fieldset>

  <fieldset class="column bordered" style="margin-top: 8px">
    <p>this project is composed of a rust crate and a cli frontend for it.</p>
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

    <p>imgmod -i &lt;path/to/input&gt; &lt;operation&gt; &lt;params&gt;</p>

    <p>
      imgmod writes the raw image data to stdout. if no input flag is provided,
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

    <div class="two-col-grid" id="imgmod-showcase"></div>
  </fieldset>
</div>
`;

export default imgmodPage;
