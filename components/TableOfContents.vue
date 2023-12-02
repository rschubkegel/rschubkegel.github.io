<script setup lang="ts">
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  withDefaults(
    defineProps<{
      sectionTitles: string[];
      sectionId: (title: string) => string;
      visibleSections: string[];
    }>(),
    {
      sectionId: (title: string) => `#${ title.toLowerCase().replaceAll(' ', '-') }`
    }
  );

  onMounted(() => {
    ScrollTrigger.create({
      trigger: '#table-of-contents ul:not(.pinned)',
      start: 'bottom top',
      animation: gsap.from('#table-of-contents ul.pinned', {
        opacity: 0,
        ease: 'sine.inOut',
        pointerEvents: 'none'
      }),
      toggleActions: 'play none none reverse'
    });
  });
</script>

<template>
  <div id="table-of-contents">
    <div class="on-this-page decorated">
      <em>On this page:</em>
      <hr>
    </div>
    <ul>
      <li v-for="title in sectionTitles">
        <slot :title="title" :href="sectionId(title)">
          <a :href="sectionId(title)">{{ title }}</a>
        </slot>
      </li>
    </ul>
    <div class="pinned">
      <div class="on-this-page">
        <em>On this page:</em>
      </div>
      <ul>
        <li v-for="title in sectionTitles">
          <slot :title="title" :href="sectionId(title)" :visible="visibleSections.includes(title)">
            <a :href="sectionId(title)" :class="{ visible: visibleSections.includes(title) }">{{ title }}</a>
          </slot>
        </li>
      </ul>
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
      top: var(--spacing);
      right: var(--spacing);
      text-align: right;
      .on-this-page em {
        opacity: .5;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: end;
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
  }
</style>