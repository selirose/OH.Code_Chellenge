const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function checkAttendanceList() {
    console.log("Please key-in only Yes or No");
    rl.question("Is the attendance link available ? ", attenLinkOption => {
        if(attenLinkOption == "Yes") {
            joinClass();
        } else if (attenLinkOption == "No") {
            ngopi();
        } else {
            checkAttendanceList();
        }
    })
}

function joinClass() {
    console.log("\n====================================");
    console.log("You have joined class");
    console.log("You saw Mas Reza's face")
    console.log("======================================\n");
    dailyStandUp();
}

function ngopi() {
    console.log("\n====================================");
    console.log('You can "Ngopi" First!')
    console.log("Waiting until Mas Reza send the link")
    console.log("======================================\n");
    checkAttendanceList();
}

function dailyStandUp() {
    console.log("\n====================================");
    console.log("We start the Daily Stand Up");
    console.log("You have reviewed");
    console.log("You have explored");
    console.log("======================================\n");
    rl.question("Do you have any problem: ", problem => {
        if (problem == "Yes") {
            console.log("\n====================================");
            console.log("Ask Facilitator");
            console.log("Problem Solved");
            console.log("======================================\n");
            classStarted();
        } else if (problem == "No") {
            classStarted();
        } else {
            console.log("Please key-in only Yes or No");
            dailyStandUp();
        }
    })
}

function classStarted() {
    console.log("\n====================================");
    console.log("Class have started");
    console.log("======================================\n");
    checkUnderstandingMaterial();
}

function checkUnderstandingMaterial() {
    rl.question("Do you understand the material today ? ", answer => {
        if (answer == "Yes") {
            mantap();
        } else if (answer == "No") {
            mengerti();
        } else {
            console.log("Please key-in only Yes or No");
            checkUnderstandingMaterial();
        }
    })
}

function mengerti() {
    console.log("\nASK THE FACILITATOR\n");
    rl.question("DO YOU UNDERSTAND NOW ? ", understand => {
        if (understand == "Yes") {
            mantap();
        } else if (understand == "No") {
            mengerti();
        } else {
            console.log("Please key-in only Yes or No");
            mengerti();
        }
    })
}

function mantap() {
    console.log("\n====================================");
    console.log("GREAT!! You did well");
    console.log("Class Finished")
    console.log("See You Tomorrow!");
    console.log("======================================\n");
    rl.close();
}

rl.on("close", () => {
    process.exit()
})

checkAttendanceList();
