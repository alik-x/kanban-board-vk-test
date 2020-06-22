<template>
  <form
    class="add-form"
    :class="{ 'add-form_for-card': !forColumn }"
    @submit.prevent="$emit('onSubmit', textContent)"
    v-click-outside="cancel"
  >
    <div class="add-form__textarea-wrapper">
      <textarea
        v-model="textContent"
        class="add-form__textarea"
        ref="textarea"
        @input="autoResize"
        @keydown.enter.prevent="$refs.addBtn.click()"
        :placeholder="`Введите название ${forColumn ? 'колонки' : 'карточки'}`"
      ></textarea>
    </div>
    <div class="add-form__actions actions">
      <button class="actions__add-btn" ref="addBtn" :disabled="!textContent.length">
        Добавить {{ this.forColumn ? 'колонку' : 'карточку' }}
      </button>
      <div class="actions__cancel-btn" @click="cancel">
        <span class="actions__cancel-icon"></span>
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

<style lang="scss" scoped>
.add-form {
  $self: &;
  padding: 12px;

  &__textarea-wrapper {
    display: block;
    padding: 8px 8px 8px 12px;
    background: #ffffff;
    box-shadow: 0px 1px 4px rgba(9, 45, 66, 0.25);
    border-radius: 3px;
  }
  &__textarea {
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
  &_for-card {
    padding-top: 3px;
    #{$self}__textarea {
      min-height: 38px;
      white-space: normal;
    }
  }
}

.actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;

  &__add-btn {
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
    &:hover {
      background: lighten(#39c071, 8%);
    }
  }
  &__cancel-icon {
    cursor: pointer;
    opacity: 0.7;
    &::before {
      content: '';
      float: left;
      width: 15px;
      height: 15px;
      background: url('../assets/icons/cross.svg') no-repeat;
    }
    &:hover {
      opacity: 1;
    }
  }
}
</style>
