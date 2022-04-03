import toast from 'react-hot-toast'

export const getDate = () => {
  var d = new Date(Date.now());
  return d.getFullYear() + "-" +
    ("00" + (d.getMonth() + 1)).slice(-2) + "-" +
    ("00" + d.getDate()).slice(-2) + " " +
    ("00" + d.getHours()).slice(-2) + ":" +
    ("00" + d.getMinutes()).slice(-2)
}

export const alert = {
  success: (message) => {
    toast.success(message, { duration: 2000 })
  },
  error: (message) => {
    toast.error(message, { duration: 2000 })
  }
}