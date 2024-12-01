const mainPage = `
<div>
  <fieldset class="title bordered">
    <legend>gabriel</legend>
    <p>student, linux enjoyer, programmer</p>
  </fieldset>

  <div class="row">
    <fieldset class="column bordered">
      <legend>work</legend>
      <a href="research2" onclick="navigate(event, '/research2')">research #2</a>
      <a href="research1" onclick="navigate(event, '/research1')">research #1</a>
      <a href="coach" onclick="navigate(event, '/coach')">coding coach</a>
    </fieldset>

    <fieldset class="column bordered">
      <legend>projects</legend>
      <a href="/imgmod" onclick="navigate(event, '/imgmod')">imgmod</a>
      <a href="/ags" onclick="navigate(event, '/ags')">ags desktop</a>
      <a href="/timesheet" onclick="navigate(event, '/timesheet')">timesheet-cli</a>
    </fieldset>
  </div>

  <fieldset class="column bordered">
    <legend>contact</legend>
    <a href="mailto:gabriel.contactme.h@gmail.com">gabriel.contactme.h@gmail.com</a>
    <a href="https://github.com/Echinoidea" target="_blank">github</a>
  </fieldset>
</div>
`;

export default mainPage;
