const readline= require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("ENter Your Name : ", (name) => {
    rl.question("Enter Your Roll Number : ", (roll) => {
        rl.question("Enter Your Marks in Subject 1 : ", (sub1) => {
        rl.question("Enter Your Marks in Subject 2 : ", (sub2) => {
            rl.question("Enter Your Marks in Subject 3 : ", (sub3) => {
                const total = parseFloat(sub1) + parseFloat(sub2) + parseFloat(sub3);
                if (isNaN(total) || total < 0 || total > 500) {
                    console.log("Invalid marks entered. Please enter valid numbers between 0 and 500.");
                    rl.close();
                    return;
                }
                const percentage = (total / 300) * 100;
                const grade = percentage >= 80 ? "A" : percentage >= 65 ? "B" : percentage >= 60 ? "C" : "D";
                console.log(`Name: ${name}`);
                console.log(`Roll Number: ${roll}`);
                console.log(`Total Marks: ${total}`);
                console.log(`Percentage: ${percentage.toFixed(2)}%`);
                console.log(`Grade: ${grade}`);
                rl.close();
                });
            });
            });
        });
        });
    
