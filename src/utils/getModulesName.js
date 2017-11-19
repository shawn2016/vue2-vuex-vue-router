export default (name) => {
  try {
    if (!name || !name.includes('/')) {
      throw 'please enter a valid directory name'
    }
    if (!name.includes('/')) {
      throw 'Please use / To separate'
    }
    let moduleName = name.split('/').join('_').toUpperCase() + '_'
    return moduleName
  } catch (e) {
    console.log(e)
    return 'please enter a valid directory name'
  }
}