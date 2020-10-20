<template>
  <a-modal
      title="添加信息内容"
      :width="1000"
      :centered="true"
      :visible.sync="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <quill-editor
        ref="myQuillEditor"
        v-model="content"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)"
      />
  </a-modal>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

export default {
  props: {
    sendVisible: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      visible: false,
      confirmLoading: false,
      content: '',
      editorOption: {
        placeholder: '请在这里输入',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ size: ['12px', '14px', false, '18px', '22px', '26px', '30px', '36px', '42px'] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }]
          ]
        }
      }
    }
  },

  components: {
    quillEditor
  },

  watch: {
    sendVisible (val) {
      this.visible = val
    },

    visible (val) {
      this.$emit('update:sendVisible', val)
    }
  },

  methods: {
    handleCancel () {
      this.visible = false
    },
    handleOk () {
    },

    onEditorBlur (quill) {
    },

    onEditorFocus (quill) {
    },

    onEditorReady () {}
  }
}
</script>

<style lang="less" scoped>
/deep/ .ql-container{
  height: 40vh;
}
</style>
