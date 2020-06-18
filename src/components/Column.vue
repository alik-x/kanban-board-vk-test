<template>
  <div class="column">
    <div v-if="isEmpty">
      <slot />
    </div>
    <div v-else>
      <div class="title">{{ column.title }}</div>
      <div class="card-list" ref="cardList">
        <Draggable
          v-model="column.cards"
          group="cards"
          @start="drag = true"
          @end="$emit('draggedHandler')"
        >
          <Card v-for="card in column.cards" :key="card.id" :text="card.text" />
        </Draggable>
        <AddForm v-if="isFormActive" @onSubmit="insertCard" @onCancel="isFormActive = false" />
      </div>
      <TriggerBtn v-if="!isFormActive" @click.native="activateFrom">
        Добавить {{ column.cards.length ? 'еще одну ' : '' }}карточку
      </TriggerBtn>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import TriggerBtn from '@/components/TriggerBtn.vue'
import AddForm from '@/components/AddForm.vue'
import Draggable from 'vuedraggable'

export default {
  name: 'Column',
  components: { Card, TriggerBtn, AddForm, Draggable },
  props: {
    column: {
      type: Object
    },
    isEmpty: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFormActive: false
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
        cardList.scrollTop = cardList.clientHeight
      })
    }
  }
}
</script>

<style scoped>
.column > div {
  display: flex;
  flex-direction: column;
  width: 272px;
  margin: 20px 6px;
  background: #dfe3e6;
  border-radius: 3px;
  max-height: calc(100vh - 40px);
}

.column:first-child > div {
  margin-left: 20px;
}

.column:last-child > div {
  margin-right: 20px;
}

.title {
  font-weight: bold;
  padding: 8px 12px;
}

.card-list {
  display: block;
  overflow-y: overlay;
  overflow-x: hidden;
}

.card-list::-webkit-scrollbar {
  width: 3px;
}

.card-list::-webkit-scrollbar-thumb {
  background: #a0a0a0;
  border-radius: 3px;
}
</style>
