<script setup lang="ts">
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  withDefaults(
    defineProps<{
      sectionTitles: string[];
      sectionId?: (title: string) => string;
      visibleSections: string[];
    }>(),
    {
      sectionId: (title: string) => `#${ title.toLowerCase().replaceAll(' ', '-') }`
    }
  );

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onMounted(() => {
    // WARNING: hard-coded (see :root vars)
    gsap.matchMedia().add(
      {
        isMobile: '(max-width: 42rem)',
        isDesktop: '(min-width: 42rem)'
      },
      context => {
        const { isMobile } = context.conditions!;
        let start, target;
        if (isMobile) {
          start = 'bottom top';
          target = '#table-of-contents .back-to-top';
        } else {
          start = 'bottom top';
          target = '#table-of-contents .pinned';
        }
        ScrollTrigger.create({
          trigger: '#table-of-contents ul:first-of-type',
          start,
          animation: gsap.from(target, {
            ease: 'sine.inOut',
            duration: isMobile ? 0 : 1,
            opacity: 0,
            pointerEvents: 'none'
          }),
          toggleActions: 'play none none reverse'
        });
      }
    );
  });
</script>

<template>
  <div id="table-of-contents">

    <!-- STATIC -->
    <div class="on-this-page decorated">
      <em>
        <span>On this page:</span>
      </em>
      <hr>
    </div>
    <ul>
      <li v-for="title in sectionTitles">
        <slot :title="title" :href="sectionId(title)">
          <a :href="sectionId(title)">{{ title }}</a>
        </slot>
      </li>
    </ul>

    <!-- DESKTOP -- top right -->
    <div class="pinned">
      <div class="background"></div>
      <div class="on-this-page">
        <em>
          <span>On this page:</span>
        </em>
      </div>
      <ul>
        <li v-for="title in sectionTitles">
          <slot :title="title" :href="sectionId(title)" :visible="visibleSections.includes(title)">
            <a :href="sectionId(title)" :class="{ visible: visibleSections.includes(title) }">{{ title }}</a>
          </slot>
        </li>
      </ul>
    </div>

    <!-- MOBILE -- TOP -->
    <div class="back-to-top on-this-page decorated" @click="scrollToTop">
      <em>
        <span>back to top</span>
      </em>
      <hr>
    </div>

  </div>
</template>


<style scoped lang="scss">
  #table-of-contents {
    background-color: var(--color-bg-bold);
    text-align: center;
    padding: var(--spacing) 0;

    .on-this-page {
      em {
        font-weight: 100;

        span {
          opacity: .5;
        }
      }

      &.decorated {
        em {
          background: var(--color-bg-bold);
          z-index: 1;
          padding: 0 var(--spacing);
        }
        hr {
          margin-top: -.75em;
          border-color: var(--color-bg-mild);
          border-top-width: 0;
        }
      }
    }

    ul {
      list-style: none;
      margin: var(--spacing) 0 0;
      line-height: 2;
    }

    .pinned {
      position: fixed;
      z-index: 99;
      top: 0;
      right: 0;
      padding: var(--spacing);
      text-align: right;

      .background {
        position: absolute;
        inset: 0;
        z-index: -1;
        background-color: var(--color-bg-bold);
        border-radius: var(--border-radius);
        filter: blur(.5rem);
      }

      // WARNING: hard-coded (see :root vars)
      @media (max-width: 42rem) {
        display: none;
      }

      ul {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: var(--spacing);
        line-height: 1;

        :deep(a).visible {
          color: var(--color-splash-mild);
          &:hover {
            color: var(--color-splash-bold);
          }
        }
      }
    }

    .back-to-top {
      position: fixed;
      top: 0;
      left: 0;
      width: calc(100% - (var(--spacing) * 2));
      padding: calc(var(--spacing) / 2) var(--spacing);
      background-color: var(--color-bg-bold);
      box-shadow: 0 0 .25rem var(--color-bg-bold);
      cursor: pointer;
      z-index: 99;

      &:hover {
        span {
          opacity: 1;
        }
      }

      // WARNING: hard-coded (see :root vars)
      @media (min-width: 42rem) {
        display: none;
      }
    }
  }
</style>