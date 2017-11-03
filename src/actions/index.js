export const selectLibraryItem = (libraryItemId) => {
  return {
    type: 'select_library_item',
    payload: libraryItemId
  };
};
