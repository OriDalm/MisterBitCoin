<template>
  <section class="contact-index">
    <ContactList @remove="removeContact" v-if="contacts" :contacts="contacts" />
  </section>
</template>

<script>
import ContactList from '../cmps/ContactList.vue'
import { contactService } from '../services/contact.service.js'

export default {
  data() {
    return {
      contacts: null,
    }
  },
  methods: {
    async removeContact(contactId) {
      await contactService.deleteContact(contactId)

      const idx = this.contacts.findIndex((contact) => contact._id === contactId)
      this.contacts.splice(idx, 1)
    },
  },
  computed: {},
  async created() {
    this.contacts = await contactService.getContacts()
  },
  components: {
    ContactList,
  },
}
</script>

<style lang="scss"></style>
