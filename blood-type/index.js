var donorBloodType = prompt("What is the donor blood type?");
if (donorBloodType == donorBloodType.toLowerCase()) {
    alert("please use uppercase letters");
    var donorBloodType = prompt("What is the donor blood type?");
}
switch(donorBloodType) {
    case "O-":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+"||recipientBloodType == "AB-"||recipientBloodType == "A+"||recipientBloodType == "A-"||recipientBloodType == "B+"||recipientBloodType == "B-"||recipientBloodType == "O+"||recipientBloodType == "O-") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    case "O+":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+"||recipientBloodType == "A+"||recipientBloodType == "B+"||recipientBloodType == "O+") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    case "B-":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+"||recipientBloodType == "AB-"||recipientBloodType == "B+"||recipientBloodType == "B-") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    case "B+":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+"||recipientBloodType == "B+") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    case "A-":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+"||recipientBloodType == "AB-"||recipientBloodType == "A+"||recipientBloodType == "A-") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    case "A+":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+"||recipientBloodType == "A+") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    case "AB-":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+"||recipientBloodType == "AB-") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    case "A+":
        recipientBloodType = prompt("What is the recipient blood type?");
            if (recipientBloodType == "AB+") {
                alert("\"" + donorBloodType + "\" + \"" + recipientBloodType + "\" --> True");
            }
            else {
                alert("false");
            }
    break;
    default:
        alert("false");
    }



