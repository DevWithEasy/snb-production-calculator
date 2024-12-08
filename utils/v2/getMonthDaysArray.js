function getMonthDaysArray(){
    const now = new Date(); 
    const year = now.getFullYear(); 
    const month = now.getMonth()
    const nextMonth = new Date(year, month + 1, 1)
    const lastDayOfCurrentMonth = new Date(nextMonth - 1).getDate()
    return Array.from({ length: lastDayOfCurrentMonth }, (_, index) => {
      return {
        value : index + 1, 
        title : `${index + 1}/${month+1}/${year}`
      }
    })
  }

export default getMonthDaysArray