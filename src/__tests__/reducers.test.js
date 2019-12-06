import getEmployee from '../reducers/index'
import displayEmployee from '../reducers/index'
import closeLightbox from '../reducers/index'

describe('GET_EMPLOYEE reducer', () => {
  it('should handle initial state', () => {
    expect(
        getEmployee(undefined, {})
    ).toEqual({})
  })

  it('should handle GET_EMPLOYEE', () => {
    expect(
        getEmployee([], {
        type: 'GET_EMPLOYEE',
        loading: true,
      })
    ).toEqual(
      {
        loading: true,
      }
    )
  })
})

describe('DISPLAY_EMPLOYEE reducer', () => {
  it('should handle initial state', () => {
    expect(
      displayEmployee(undefined, {})
    ).toEqual({})
  })
  it('should handle DISPLAY_EMPLOYEE', () => {
    expect(
        displayEmployee([], {
        type: 'DISPLAY_EMPLOYEE',
      })
    ).toEqual(
      {
        displayDetails: true,
        lightbox: undefined,
      }
    )
  })
})

describe('CLOSE_LIGHTBOX reducer', () => {
  it('should handle initial state', () => {
    expect(
      closeLightbox(undefined, {})
    ).toEqual({})
  })
  it('should handle CLOSE_LIGHTBOX', () => {
    expect(
      closeLightbox([], {
        type: 'CLOSE_LIGHTBOX',
      })
    ).toEqual(
      {
        displayDetails: false,
      }
    )
  })
})