<template>
  <main>
    <Logo />
    <section>
      <h1>Hello, I'm Rylan</h1>
      <p>I'm a passionate programmer, artist, and coffee lover. This site represents a small selection of my personal and professional work. Feel free to reach out via <a href='mailto:rylanschubkegel@gmail.com'>email</a> or <a href='https://github.com/rschubkegel/'>LinkedIn</a>, I would love to connect!</p>
    </section>
    <PreviewGroup>
      <template #name>Web Dev</template>
      <ProjectPreview>
        <template #name>Voluntime</template>
        <p>
          <a href='https://volunti.me/'>Voluntime</a> is 1st place winner of George Fox University's second annual Code Jam, a 30-hour coding competition. Voluntime is a platform that connects volunteers to service events, allowing people to easily find ways to help their community. I designed the front-end in Figma and implemented it using React and Material UI.
        </p>
        <p>
          To learn more, check out the <a href='https://volunti.me/'>Voluntime website</a>, the <a href='https://devpost.com/software/top-secret-team-3-project-title'>Code Jam competition submission</a>, or the <a href='https://github.com/Voluntime'>GitHub organization</a>.
        </p>
        <div>
          <nuxt-img src='/images/voluntime/voluntime1.jpg' />
          <nuxt-img src='/images/voluntime/voluntime2.jpg' />
        </div>
      </ProjectPreview>
      <ProjectPreview>
        <template #name>Portfolio Site</template>
        <p>
          This section needs to be updated 🚧
        </p>
      </ProjectPreview>
    </PreviewGroup>
  </main>
</template>