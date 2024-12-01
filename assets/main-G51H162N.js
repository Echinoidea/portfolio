(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const n=`
<div>
  <fieldset class="title bordered">
    <legend>gabriel</legend>
    <p>student, linux enjoyer, programmer</p>
  </fieldset>

  <div class="row">
    <fieldset class="column bordered">
      <legend>work</legend>
      <a href="research2">research #2</a>
      <a href="research1">research #1</a>
      <a href="coach">coding coach</a>
    </fieldset>

    <fieldset class="column bordered">
      <legend>projects</legend>
      <a href="/imgmod">imgmod</a>
      <a href="/ags">ags desktop</a>
      <a href="/timesheet">timesheet-cli</a>
    </fieldset>
  </div>

  <fieldset class="column bordered">
    <legend>contact</legend>
    <a href="gabriel.contactme.h@gmail.com">gabriel.contactme.h@gmail.com</a>
    <a href="https://github.com/Echinoidea">github</a>
  </fieldset>
</div>
`,d=`
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
`,p=`
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">psych research #1</legend>
    <p>web developer for k-12 psychology research</p>
  </fieldset>

  <fieldset class="column bordered" style="margin-top: 8px; gap: 16px">
    <p>
      this is a website written using next.js, intended for production use with
      100-200 users, mostly teachers, school counselors, and researchers.
    </p>

    <p>
      this website is mostly dashboards and data analysis. it also allows for
      some CRUD operations.
    </p>

    <p>
      this was my first real web development project. i worked with one other
      developer. we used supabase, next.js, nextauth, and chart.js
    </p>
  </fieldset>
</div>
`,c=`
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">psych research #2</legend>
    <p>
      progressive web app developer for pre-kindergarten psychology research
    </p>
  </fieldset>

  <fieldset class="column bordered" style="margin-top: 8px">
    <p>
      this is a pwa written using next.js, intended for production use with
      about 100 users, and eventually much more.
    </p>

    <p>i'm not allowed to disclose details of the project here.</p>
  </fieldset>
</div>
`,m=`
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">coding coach</legend>
    <p>teaching kids/teens game and web development</p>
  </fieldset>

  <fieldset class="column bordered" style="margin-top: 8px; gap: 16px">
    <p>
      i've been teaching programming to kids and teens since summer 2023. it's a
      great job, especially for a college student.
    </p>

    <p>
      a lot of kids want to learn roblox development, but i also have a bunch
      that want to do web, python, and minecraft modding.
    </p>

    <p>
      it's been a great time and i've learned a lot about programming through
      teaching as well as mentoring from my boss. i've also worked on some
      pretty cool projects and made some friends.
    </p>
  </fieldset>
</div>
`,g=`
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
`,h=`
<div>
  <fieldset class="title bordered">
    <legend style="color: #a8b377">timesheet cli</legend>
    <p>simple node.js cli to manage my timesheets</p>
  </fieldset>

  <fieldset class="column bordered" style="margin-top: 8px; gap: 16px">
    <p>
      this is just a simple cli application to manage my timesheets since my
      research projects are independent and i have to log my hours. it also
      helps for some other tasks i like to time like time spent working on a
      particular project or programming language.
    </p>

    <p>
      honestly, i'm not that impressed by this project, i just wanted a third
      project on my website. im working on some better personal projects right
      now.
    </p>
  </fieldset>
</div>
`,u={"/":n,"/imgmod":d,"/research1.html":p,"/research2.html":c,"/coach.html":m,"/ags.html":g,"/timesheet.html":h},f=document.querySelector("#app"),r=()=>{const s=window.location.pathname;f.innerHTML=u[s]||"<h1>Page Not Found</h1>",s==="/imgmod"&&w()},y=["ultrakill.png","ultrakill-out.png","vash.jpg","vash-out.jpg","gasha-sm.gif","gasha-sm-out.png"],w=()=>{const s=document.querySelector("#imgmod-showcase");s&&(s.innerHTML=y.map(o=>`
          <img class="gridItem" src="/imgmod/${o}" alt="${o}" style="margin: 10px;" />
        `).join(""))};r();window.addEventListener("popstate",r);
