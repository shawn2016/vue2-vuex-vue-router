// module.exports = process.env.NODE_ENV === 'production' ? file => () => require('@/modules/' + file + '.vue') : file => require('@/modules/' + file + '.vue').default
// export default process.env.NODE_ENV === 'production' ? file => () => require(`@/modules/${file}.vue`) : file => require(`@/modules/${file}.vue`).default
export default (name) => () => import(`@/modules/${name}.vue`)
