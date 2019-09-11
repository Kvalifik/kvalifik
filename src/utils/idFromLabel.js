export default (label) => label.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
