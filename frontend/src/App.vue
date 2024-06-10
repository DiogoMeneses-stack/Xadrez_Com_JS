<script setup>

import Draw from './components/paginas/Draw.vue'
import Game from './components/paginas/Game.vue'
import Index from './components/paginas/Index.vue'
import Lose from './components/paginas/Lose.vue'
import Paused from './components/paginas/Paused.vue'
import Win from './components/paginas/Win.vue'

import Bispo from './components/pecas/Bispo.vue'
import Cavalo from './components/pecas/Cavalo.vue'
import Peao from './components/pecas/Peao.vue'
import Rainha from './components/pecas/Rainha.vue'
import Rei from './components/pecas/Rei.vue'
import Torre from './components/pecas/Torre.vue'

import Tabuleiro from './components/tabuleiro/Tabuleiro.vue'

</script>

<template>
  <header>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
