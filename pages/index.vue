<template>
  <main class='flex col gap2'>
    <div class='flex center'>
      <Logo />
    </div>

    <section class='flex col gap1'>
      <h1 class='color-fg-mild' style='font-weight:600'>Hello, I'm <span class='color-fg-bold'>Rylan</span></h1>
      <p>I'm a passionate programmer, artist, and coffee lover. This site represents a small selection of my personal and professional work. Feel free to reach out via <a href='mailto:rylanschubkegel@gmail.com'>email</a> or <a href='https://github.com/rschubkegel/'>LinkedIn</a>, I would love to connect!</p>
    </section>

    <PreviewGroup class='flex col gap2'>
      <template #name>Web Dev</template>

      <ProjectPreview>
        <template #name>Voluntime</template>
        <p>
          Voluntime is 1st place winner of George Fox University's second annual Code Jam, a 30-hour coding competition. Voluntime is a platform that connects volunteers to service events, allowing people to easily find ways to help their community. I designed the front-end in Figma and implemented it using React and Material UI.
        </p>
        <p>
          To learn more, check out the <a href='https://volunti.me/'>Voluntime website</a>, the <a href='https://devpost.com/software/top-secret-team-3-project-title'>Code Jam competition submission</a>, or the <a href='https://github.com/Voluntime'>GitHub organization</a>.
        </p>
        <div class='flex between gap1'>
          <nuxt-img
            preset='default'
            src='/voluntime/voluntime1.jpg'
            height='450'
          />
          <nuxt-img
            preset='default'
            src='/voluntime/voluntime2.jpg'
            height='450'
          />
        </div>
      </ProjectPreview>

      <ProjectPreview>
        <template #name>Portfolio Site</template>
        <p>
          This website is both a portfolio and a sandbox for learning new frameworks. It currently uses Nuxt.js but has previously used Gatsby & React.js, Next.js, Jekyll, and even vanilla HTML/CSS/JS.
        </p>
        <div class='grid center col4 gap1'>
          <a href='nuxtjs.org/'>
            <nuxt-img
              preset='default'
              src='/portfolio/nuxt.png'
              height='100'
            />
          </a>
          <a href='vuejs.org/'>
            <nuxt-img
              preset='default'
              src='/portfolio/vue.png'
              height='100'
            />
          </a>
          <a href='gatsbyjs.com/'>
            <nuxt-img
              preset='default'
              src='/portfolio/gatsby.png'
              height='100'
            />
          </a>
          <a href='reactjs.org/'>
            <nuxt-img
              preset='default'
              src='/portfolio/react.png'
              height='100'
            />
          </a>
        </div>
      </ProjectPreview>

      <ProjectPreview>
        <template #name>Web Design Class</template>
        <p>
          The ARTD 270 class from college focused on UI design, page layout, and usability&mdash;and it effectively kickstarted my interest in web design.
        </p>
        <div class='flex gap1'>
          <nuxt-img
            preset='default'
            src='/artd270/bagels-banner.jpg'
            height='200'
            class='full-w'
          />
          <nuxt-img
            preset='default'
            src='/artd270/style-tile.png'
            height='200'
            class='full-w'
          />
        </div>
      </ProjectPreview>
    </PreviewGroup>

    <PreviewGroup>
      <template #name>UX Design</template>

      <ProjectPreview>
        <template #name>Mixed Reality Research</template>
        <p>
          I was the team manager of 6 students working with <a href='https://northamerica.daimlertruck.com/'>Daimler Trucks of North America</a> to research the utility of Microsoft's <a href='https://www.microsoft.com/en-us/hololens/hardware'>Hololens 2</a> for Daimler's servicing intake process. We developed small-scale text input applications in <abbr title='mixed reality'>MR</abbr> using <a href='https://unity.com/'>Unity</a> and Microsoft's <abbr title='mixed reality toolkit'>MRTK</abbr>. After having users test these applications we were able derive insights about the unique user experience of the Hololens headset, providing our client with valuable information about the efficacy of MR in their truck servicing process.
        </p>
        <nuxt-img
          preset='default'
          src='/hololens/cube.jpg'
          width='600'
          class='full-w'
        />
        <div class='flex between gap1'>
          <nuxt-img
            preset='default'
            src='/hololens/user-flow.png'
            height='155'
          />
          <nuxt-img
            preset='default'
            src='/hololens/wireframes.jpg'
            height='155'
          />
        </div>
      </ProjectPreview>

      <ProjectPreview>
        <template #name>AR Glasses</template>
        <p>
          Our team explored the design challenge of helping visually impaired individuals navigate the world around them. As part of our human-centered design approach to tackling this challenge, we developed a high-level user story to frame our design efforts: “As a visually impaired person, I want to identify common objects and read text and symbols on signs as I navigate my environment.” <a href='https://cs.georgefox.edu/about/research/computer-vision-for-the-visually-impaired/'>Read more here.</a>
        </p>
        <div class='flex between gap1'>
          <nuxt-img
            preset='default'
            src='/ar-glasses/prototype.png'
            height='250'
          />
          <nuxt-img
            preset='default'
            src='/ar-glasses/detection.png'
            height='250'
          />
        </div>
      </ProjectPreview>
    </PreviewGroup>

    <PreviewGroup>
      <template #name>Hobbies</template>

      <ProjectPreview>
        <template #name>Hobbies</template>
        <p>
          I have numerous other creative hobbies such as game design, animation, music production, painting, etc. For more of my personal projects, check out <nuxt-link to='/hobbies'>this page</nuxt-link>.
        </p>
        <nuxt-img
          preset='default'
          src='/games/creature-1.png'
          width='600'
          class='full-w'
        />
        <div class='flex between gap1'>
          <nuxt-img
            preset='default'
            src='/paintings/oranges.jpg'
            height='200'
          />
          <img
            src='../assets/images/animations/explosion.gif'
            height='200'
          />
        </div>
      </ProjectPreview>
    </PreviewGroup>
  </main>
</template>

<script>
import createHeaderIds from '../assets/js/CreateHeaderIds'

export default {
  mounted() {
    createHeaderIds();
  }
}
</script>