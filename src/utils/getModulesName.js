export default (name) => {
    try {
        if (!name || !name.includes('/')) {
            throw 'please enter a valid directory name'
            return
        }
        if (!name.includes('/')) {
            throw 'Please use / To separate'
            return
        }
        let moduleName = name.split('/').join('_').toUpperCase() + '_'
        return moduleName

    } catch (e) {
        console.error(e)
        return
    }

}