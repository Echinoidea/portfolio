const vidfxPage = `
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">vidfx</legend>
    <p>implementation of imgfx for use on videos</p>
    <br/>
    <a href="https://github.com/Echinoidea/vidfx-cli">GitHub</a>
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

    <p>vidfx -i &lt;path/to/input&gt; &lt;visualization?&gt; &lt;bpm?&gt; &lt;operation&gt; &lt;params&gt;</p>

    <p>
      this program lets you oscillate an effect at a specified bpm and wave shape. this is the first step im taking to a music visualization program.
      i want to eventually allow the user to specify an audio frequency range and then modulate the effect based on the amplitude of that range e.g. kick drum.
    </p>
  </fieldset>

  <fieldset class="column bordered">
    <legend>showcase</legend>

    <div class="two-col-grid" id="imgfx-showcase"></div>
  </fieldset>
</div>
`;

export default vidfxPage;

