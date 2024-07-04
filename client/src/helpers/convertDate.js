export const convertDate = (date) => {
    //convert the input date string to a date object
    const newDate = new Date(date);
    //get the month abbrevation: jan feb march april
    const monthAbbrevation = newDate.toLocaleString("default", {
        month: "short",
    });

    //get the day and year
    const day = newDate.getDate()
    const year = newDate.getFullYear()

    //return the formatted date
    const formattedDate = `${monthAbbrevation} ${day}, ${year}`;
    return formattedDate;
};





