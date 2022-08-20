import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
import store from '@/store'
import router from 'vue-router'

// Meaningful coverage - a test that will fail when the features most critical to the application are broken.
describe('EventList', () => {
  it('Should render the events', () => {
    const wrapper = mount(EventList, {
      // Global options:
      // - global plugins
      // - globally registered components
      // - providers
      // - directives
      // - mocks
      // - stubs
      // and more...
      global: {
        plugins: [store, router]
      }
    })
    // Smoke test.
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Page title.', () => {
    it('Is rendered with the correct text.', () => {
      const wrapper = mount(EventList, {
        global: {
          plugins: [store, router]
        }
      })

      const title = wrapper.find('[data-testid=event-list-title]')
      expect(title.exists()).toBeTruthy()
      expect(title.text()).toContain('Events for Good')
    })
  })
})
