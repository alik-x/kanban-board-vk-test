<template>
  <div id="app" v-cloak>
    <div class="board board_no-select" ref="board">
      <Column
        v-for="column in columns"
        :key="column.id"
        :column="column"
        @insertCard="insertCard"
        @updateCards="updateCards"
      />
      <Column v-if="isFormActive">
        <AddForm :forColumn="true" @onSubmit="insertColumn" @onCancel="isFormActive = false" />
      </Column>
      <Column>
        <AddButton @click.native="activateForm">
          Добавить {{ columns.length ? 'еще одну ' : '' }}колонку
        </AddButton>
      </Column>
    </div>
  </div>
</template>

<script>
import Column from '@/components/Column.vue'
import AddButton from '@/components/AddButton.vue'
import AddForm from '@/components/AddForm.vue'

export default {
  name: 'App',
  components: { Column, AddButton, AddForm },
  data() {
    return {
      columns: [],
      isFormActive: false
    }
  },
  methods: {
    insertColumn(title) {
      this.columns.push({
        id: Date.now(),
        title,
        cards: []
      })
      this.saveToLocalStorage()
      this.isFormActive = false
    },
    insertCard({ idColumn, text }) {
      const idx = this.columns.findIndex(c => c.id === idColumn)
      this.columns[idx].cards.push({
        id: Date.now(),
        text
      })
      this.saveToLocalStorage()
    },
    updateCards({ idColumn, cards }) {
      const idx = this.columns.findIndex(c => c.id === idColumn)
      this.columns[idx].cards = cards
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('kanbanBoardColumns', JSON.stringify(this.columns))
    },
    activateForm() {
      this.isFormActive = true
      this.$nextTick(() => {
        const board = this.$refs.board
        board.scrollLeft = board.clientWidth
      })
    }
  },
  mounted() {
    this.columns = JSON.parse(localStorage.getItem('kanbanBoardColumns') || '[]')
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

[v-cloak] {
  display: none;
}

* {
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

body {
  background: url('./assets/background.jpg') no-repeat center fixed;
  background-size: cover;
}

#app {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  line-height: 19px;
  height: 100%;
}

.board {
  display: flex;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow-x: overlay;

  &_no-select {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  &::after {
    content: ' ';
    min-width: 20px;
    height: 100%;
  }
  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #a0a0a0;
    border-radius: 5px;
  }
}
</style>
