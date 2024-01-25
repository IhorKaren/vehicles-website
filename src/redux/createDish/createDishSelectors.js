export const selectSavedFormData = (state) => state.createDish.dishFormData;

export const selectCurrentStep = (state) => state.createDish.currentStep;

export const selectDishImage = (state) => state.createDish.dishFormData.image;

export const selectEditMode = (state) => state.createDish.editMode;
