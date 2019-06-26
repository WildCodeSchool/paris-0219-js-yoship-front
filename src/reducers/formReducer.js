const initialState = {
  lastName: '',
  firstname: '',
  phone: '',
  email: '',
  dateOfBirth: '',
  address: '',
  postCode: '',
  city: '',
  country: '',
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM':
      return {
        ...state,
        lastName: action.payload.lastName,
        firstname: action.payload.firstName,
        phone: action.payload.phone,
        email: action.payload.email,
        dateOfBirth: action.payload.dateOfBirth,
        address: action.payload.address,
        postCode: action.payload.postCode,
        city:  action.payload.city,
        country: action.payload.country,
      }
    default:
      return state;
  }
}

export default formReducer;