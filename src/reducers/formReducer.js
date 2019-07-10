const initialState = {
  lastName: '',
  firstName: '',
  phone: '',
  email: '',
  dateOfBirth: '',
  address: '',
  postCode: '',
  city: '',
  country: '',
  isNumeric:'',
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM':
      return {
        ...state,
        lastName: action.payload.lastName,
        firstName: action.payload.firstName,
        phone: action.payload.phone,
        email: action.payload.email,
        dateOfBirth: action.payload.dateOfBirth,
        address: action.payload.address,
        postCode: action.payload.postCode,
        city:  action.payload.city,
        country: action.payload.country,
        isNumeric: action.payload.isNumeric,
      }
    default:
      return state;
  }
}

export default formReducer;