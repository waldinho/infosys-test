
import * as actions from '../actions/index'

describe('displayEmployee actions', () => {
  it('getEmployee should create DISPLAY_EMPLOYEE action with employee array', () => {
    expect(actions.displayEmployee(['Employee Details'])).toEqual({
      type: 'DISPLAY_EMPLOYEE',
      employee: ['Employee Details'],
    })
  })
})

describe('getEmployee actions', () => {
    it('getEmployee should create GET_EMPLOYEE action', () => {
      expect(actions.getEmployee()).toEqual({
        type: 'GET_EMPLOYEE',
      })
    })
})

describe('getCompany actions', () => {
  it('getCompany should create GET_COMPANY action', () => {
    expect(actions.getCompany()).toEqual({
      type: 'GET_COMPANY',
    })
  })
})

describe('closeLightbox actions', () => {
    it('closeLightbox should create CLOSE_LIGHTBOX action', () => {
      expect(actions.closeLightbox()).toEqual({
        type: 'CLOSE_LIGHTBOX',
      })
    })
})