<script setup lang="ts">
  withDefaults(
    defineProps<{
      sectionTitles: string[];
      sectionId: (title: string) => string;
    }>(),
    {
      sectionId: (title: string) => `#${ title.toLowerCase().replaceAll(' ', '-') }`
    }
  );
</script>

<template>
  <section class="table-of-contents">
    <ul>
      <li v-for="title in sectionTitles">
        <slot :title="title" :href="sectionId(title)">
          <a :href="sectionId(title)">{{ title }}</a>
        </slot>
      </li>
    </ul>
  </section>
</template>


<style scoped lang="scss">
  .table-of-contents {
    z-index: 100;
    position: sticky;
    top: -1px;
    background-color: var(--color-bg-bold);
    outline: 1px solid var(--color-bg-bold);
    margin: 2rem 0 1rem;
    ul {
      list-style: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0;
      padding: 1rem 0;
    }
  }
</style>