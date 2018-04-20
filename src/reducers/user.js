let initState = {
  shop: {
    ownerMeta:{}
  },
  introduction: {},
  //
  serviceList: [],
  // service detail
  serviceDetail: {},
  fileMap:{}
};

export default function User (state = initState, action){
  console.log("action", action)
	switch (action.types) {
    case 'LOAD_SHOP_SUCCESS': {
      // const { entity, fileMap } = action.payload;
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
	}
}