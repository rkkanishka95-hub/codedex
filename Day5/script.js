function generateReport() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let m1 = parseInt(document.getElementById("m1").value);
    let m2 = parseInt(document.getElementById("m2").value);
    let m3 = parseInt(document.getElementById("m3").value);

    let total = m1 + m2 + m3;
    let avg = total / 3;

    let grade;
    let result;

    if (avg >= 75) grade = "A";
    else if (avg >= 60) grade = "B";
    else if (avg >= 50) grade = "C";
    else grade = "D";

    if (m1 >= 35 && m2 >= 35 && m3 >= 35)
        result = "Pass";
    else
        result = "Fail";

    
    document.getElementById("result").innerHTML =
        `<b>Name:</b> ${name}<br>
         <b>Roll No:</b> ${roll}<br>
         <b>Total:</b> ${total}<br>
         <b>Average:</b> ${avg.toFixed(2)}<br>
         <b>Grade:</b> ${grade}<br>
         <b>Result:</b> ${result}`;
}