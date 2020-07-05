export const actionItem = value => {
  //return an action or objects
  return {
    type: "ITEM_SELECTED",
    payload: value
  };
};
