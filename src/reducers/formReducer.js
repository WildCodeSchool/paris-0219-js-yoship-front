const initialState = {
  brand: 'Tesla',
  color: 'rouge',
  description: '',
  fuel: '',
  horsepower: '',
  id: '',
  kilometers: '',
  licencePlate: '',
  modelYear: '',
  userId:'',
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FORM':
      return {
        ...state,
        brand: action.payload.brand,
        color: action.payload.color,
        description: action.payload.description,
        fuel: action.payload.fuel,
        horsepower: action.payload.horsepower,
        id: action.payload.id,
        kilometers: action.payload.kilometers,
        licencePlate:  action.payload.licencePlate,
        modelYear: action.payload.modelYear,
        userId: action.payload.userId,
      }
    default:
      return state;
  }
}

export default formReducer;