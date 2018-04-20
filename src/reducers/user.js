const initState = {
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
	switch (action.type) {
    case 'LOAD_SHOP_SUCCESS': {
      const { entity, fileMap } = action.payload;
      return {
        ...state,
        shop: entity,
        fileMap
      };
    }
    default:
      return state;
	}
}