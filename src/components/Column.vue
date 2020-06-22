<template>
  <div class="column">
    <slot v-if="column">
      <div class="column__title">{{ column.title }}</div>
      <div class="column__card-list" ref="cardList">
        <Draggable v-model="cards" group="cards">
          <Card v-for="card in cards" :key="card.id" :text="card.text" />
        </Draggable>
        <AddForm v-if="isFormActive" @onSubmit="insertCard" @onCancel="isFormActive = false" />
      </div>
      <AddButton v-if="!isFormActive" @click.native="activateFrom">
        Добавить {{ cards.length ? 'еще одну ' : '' }}карточку
      </AddButton>
    </slot>
    <slot v-else />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import AddButton from '@/components/AddButton.vue'
import AddForm from '@/components/AddForm.vue'
import Draggable from 'vuedraggable'

export default {
  name: 'Column',
  components: { Card, AddButton, AddForm, Draggable },
  props: {
    column: {
      type: Object
    }
  },
  data() {
    return {
      isFormActive: false
    }
  },
  computed: {
    cards: {
      get() {
        return this.column.cards
      },
      set(cards) {
        this.$emit('updateCards', { idColumn: this.column.id, cards })
      }
    }
  },
  methods: {
    activateFrom() {
      this.isFormActive = true
      this.scrollToBottom()
    },
    insertCard(text) {
      this.$emit('insertCard', { idColumn: this.column.id, text })
      this.isFormActive = false
      this.scrollToBottom()
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const cardList = this.$refs.cardList
        cardList.scrollTop = cardList.scrollHeight
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.column {
  display: flex;
  flex-direction: column;
  flex: 0 0 272px;
  background: #dfe3e6;
  border-radius: 3px;
  max-height: 100%;
  & + & {
    margin-left: 12px;
  }
  &__title {
    font-weight: bold;
    padding: 8px 12px;
  }
  &__card-list {
    display: block;
    overflow-y: overlay;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-thumb {
      background: #a0a0a0;
      border-radius: 3px;
    }
  }
}
</style>
