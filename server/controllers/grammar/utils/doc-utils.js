module.exports = {
  // Set error message in the doc component
  setError(comp, errorMessage, callback){
    if (!('errors' in comp)){
      comp['errors'] = [];
    }
    comp['errors'].push(errorMessage);
    return comp;
  }
}