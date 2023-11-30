<template>
  <ul class="contact-list">
    <li v-for="contact in contacts">
      <ContactPreview :contact="contact" />
      <button @click="onRemoveContact(contact._id)">X</button>
    </li>
  </ul>
</template>

<script>
import ContactPreview from './ContactPreview.vue'

export default {
  props: {
    contacts: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onRemoveContact(contactId) {
      this.$emit('remove', contactId)
    },
  },

  components: { ContactPreview },
}
</script>

<style lang="scss"></style>
