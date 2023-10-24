const message = () => {
    const header = "<div style='text-align: center;'><h1>Personal Information</></div>";
    const name = "Gilbert Orlands Sambow";
    const age = 19;
    const status = "Single";
    const major = "Infomatics";
    const faculty = "Computer Science";
    const addres = "Jl. Airmadidi Atas, Minahasa Utara ";
    const interest = "Artificial Engineering"
    
    return header + "<hr>" + "<strong>Name : </strong>" +name + "<br><strong>Age : </strong>" + age  + "<br><strong>Status : </strong>" + status + "<br><strong>Major : </strong>" + major + "<br><strong>faculty : </strong>" + faculty + "<br><strong>Addres : </strong>" +addres + "<br><strong>Interest : </strong>" + interest;
};

export default message;