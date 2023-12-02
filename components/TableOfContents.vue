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
  <section id="table-of-contents">
    <div id="on-this-page">
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
    <ul class="pinned">
      <li v-for="title in sectionTitles">
        <slot :title="title" :href="sectionId(title)" :visible="visibleSections.includes(title)">
          <a :href="sectionId(title)" :class="{ visible: visibleSections.includes(title) }">{{ title }}</a>
        </slot>
      </li>
    </ul>
  </section>
</template>


<style scoped lang="scss">
  #table-of-contents {
    background-color: var(--color-bg-bold);
    // background-color: var(--color-bg-mild);
    text-align: center;
    padding: 1rem 0;
    #on-this-page {
      em {
        font-weight: 100;
        background: var(--color-bg-bold);
        padding: 0 1rem;
        z-index: 1;
      }
      hr {
        margin-top: -.75rem;
        border-color: var(--color-bg-mild);
      }
    }
    ul {
      list-style: none;
      margin: 1rem 0 0;
      &.pinned {
        position: fixed;
        top: 1rem;
        right: 2rem;
        display: flex;
        flex-direction: column;
        align-items: end;
        gap: 1rem;
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