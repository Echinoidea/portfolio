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
        <p>Usage: vidfx-cli [OPTIONS] --input &lt;INPUT&gt; &lt;COMMAND&gt;

        <div style="gap: 4px">
        <p>Commands:</p>
          <p>or</p>
          <p>and</p>
          <p>xor</p>
          <p>left</p>
          <p>right</p>
          <p>add</p>
          <p>sub</p>
          <p>mult</p>
          <p>pow</p>
          <p>div</p>
          <p>average</p>
          <p>screen</p>
          <p>overlay</p>
          <p>bloom</p>
          <p>sort</p>
          <p>filter</p>
          <p>help     Print this message or the help of the given subcommand(s)</p>
        <br/>
        <p>Options:</p>
          <p>-i, --input <lt;INPUT&gt;                  path/to/input/image</p>
              <p>--output <lt;OUTPUT&gt;                path/to/output/image [default: .]</p>
          <p>-v, --visualization <lt;VISUALIZATION&gt;  [default: default]</p>
          <p>-b, --bpm <lt;BPM&gt;</p>
              <p>--lhs <lt;LHS&gt;...                   Specify the left hand side operands for the function. E.g. --lhs b g r</p>
              <p>--rhs <lt;RHS&gt;...                   Specify the right hand side operands for the function. E.g. --rhs b r b</p>
          <p>-b, --bit-shift <lt;BIT_SHIFT&gt;          If function is 'left' or 'right', how many bits to shift by</p>
          <p>-n, --negate                         Negate the logical operator</p>
          <p>-h, --help                           Print help</p>
          <p>-V, --version                        Print version</p>
        </p>
</div>

    <p>vidfx -i &lt;path/to/input&gt; &lt;visualization?&gt; &lt;bpm?&gt; &lt;operation&gt; &lt;params&gt;</p>

    <p>
      this program lets you oscillate an effect at a specified bpm and wave shape. this is the first step im taking to a music visualization program.
      i want to eventually allow the user to specify an audio frequency range and then modulate the effect based on the amplitude of that range e.g. kick drum.
    </p>
  </fieldset>
</div>
`;

export default vidfxPage;

