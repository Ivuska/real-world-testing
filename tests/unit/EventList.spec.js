import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'
import { events as mockEvents } from '../../db.json'

// jestjs.io/docs/api
// https://jestjs.io/docs/api#testeachtablename-fn-timeout 
// Use test.each if you keep duplicating the same test with different data. test.each allows you to write the test once and pass data in.
// test.each is available with two APIs.

function mountEventList(config = {}) {
  config.mountOptions = config.mountOptions || {}
  config.plugins = config.plugins || {}
  return mount(EventList, {
    global: {
      plugins: [
        createStore(config.plugins.store), 
        router
      ]
    },
    ...config.mountOptions
  })
}

let wrapper

describe('EventList', () => {

  beforeEach(() => {
    wrapper = mountEventList()
  })

// Meaningful coverage - a test that will fail when the features most critical to the application are broken.
// Setup -> Find -> Interact -> Assert 
    describe('EventList', () => {
      it('Should render the events', () => {
          // Global options:
          // - global plugins
          // - globally registered components
          // - providers
          // - directives
          // - mocks
          // - stubs
          // and more...
      
        // Smoke test.
        expect(wrapper.exists()).toBeTruthy()
      })

    describe('Page title.', () => {
      it('Is rendered with the correct text.', () => {
        const title = wrapper.find('[data-testid=event-list-title]')
        expect(title.exists()).toBeTruthy()
        expect(title.text()).toContain('Events for Good')
      })
    })

    describe('Events', () => {
      it('are rendered in a list with necessary information.', () => {
        wrapper = mountEventList({
          plugins: {
            store: {
              state: () => ({
                events: mockEvents
              })
            }
          }
        })
        const events = wrapper.findAll('[data-testid=event]')
        expect(events).toHaveLength(mockEvents.length)

        events.forEach((event, i) => {
          const eventText = event.text()
          expect(eventText).toContain(mockEvents[i].title)
          expect(eventText).toContain(mockEvents[i].date)
        })
      })
    })
  })
})