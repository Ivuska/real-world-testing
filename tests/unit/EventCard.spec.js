import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard'
// best practice is to wrote a resilient assertion that focused on component's public API instead of its internals.
describe('EventCard', () => {
  it(`renders the event's data successfully`, () => {
    // Best practice is re-use the mock data in your assertions.
    const event = {
      id: 1,
      time: '12:00PM',
      date: 'September 29th, 2022',
      title: 'Coaching Little League'
    }

    const wrapper = mount(EventCard, {
      props: {
        event
      }
    })

    // Best practice is cache the HTML to avoid unnecessary queries of the DOM.
    const wrapperHtml = wrapper.html()
    expect(wrapperHtml).toContain(event.date)
    expect(wrapperHtml).toContain(event.time)
    expect(wrapperHtml).toContain(event.title)
  })
})
