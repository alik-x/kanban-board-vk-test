<template>
  <form
    class="add-form"
    :class="{ 'for-card': !forColumn }"
    @submit.prevent="$emit('onSubmit', textContent)"
    v-click-outside="cancel"
  >
    <div class="input-area">
      <textarea
        v-model="textContent"
        class="text-content"
        ref="textarea"
        @input="autoResize"
        @keydown.enter.prevent="$refs.addBtn.click()"
        :placeholder="`Введите название ${forColumn ? 'колонки' : 'карточки'}`"
      ></textarea>
    </div>
    <div class="actions">
      <button class="add-btn" ref="addBtn" :disabled="!textContent.length">
        Добавить {{ this.forColumn ? 'колонку' : 'карточку' }}
      </button>
      <div class="cancel-btn" @click="cancel">
        <span class="cancel-icon"></span>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddForm',
  props: {
    more: {
      type: Boolean,
      default: false
    },
    forColumn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      textContent: ''
    }
  },
  methods: {
    autoResize(event) {
      if (this.forColumn) return
      event.target.style.height = 'auto'
      event.target.style.height = `${event.target.scrollHeight}px`
    },
    cancel() {
      this.$emit('onCancel')
    }
  },
  mounted() {
    this.$refs.textarea.focus()

    !this.forColumn &&
      this.$nextTick(() => {
        this.$refs.textarea.setAttribute('style', 'height', `${this.$refs.textarea.scrollHeight}px`)
      })
  }
}
</script>

<style scoped>
.add-form {
  padding: 12px;
}

.add-form.for-card {
  padding-top: 8px;
}

.input-area {
  display: block;
  padding: 8px 8px 8px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(9, 45, 66, 0.25);
  border-radius: 3px;
}

.text-content {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  width: 100%;
  height: 19px;
  line-height: 19px;
  padding: 0;
  vertical-align: top;
  resize: none;
  white-space: nowrap;
  overflow: hidden;
  outline: none;
  border: none;
}

.for-card .text-content {
  min-height: 38px;
  white-space: normal;
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
}

.add-btn {
  display: block;
  width: 152px;
  height: 30px;
  padding: 7px 8px 4px 8px;
  font-weight: bold;
  color: #ffffff;
  background: #39c071;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
}

.add-btn:hover {
  background: #35b168;
}

.cancel-icon {
  cursor: pointer;
  opacity: 0.7;
}

.cancel-icon::before {
  content: '';
  float: left;
  width: 15px;
  height: 15px;
  background: url('../assets/icons/cross.svg') no-repeat;
}

.cancel-icon:hover {
  opacity: 1;
}
</style>
