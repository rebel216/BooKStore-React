const CHECK_STATUS = 'CHECK STATUS';

const Categoriesreducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default Categoriesreducer;
