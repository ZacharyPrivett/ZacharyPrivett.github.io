const employees = [];
const salaries = [];

function addSalary()
{
    let salary = document.getElementById('salary').value;

    if (isNaN(salary) || salary === '')
    {
        alert('Please enter a number for salary')   
    }
    else
    {
        salary = document.getElementById('salary').value;
        salaries.push(parseFloat(salary));

        let employee = document.getElementById('employee').value;
        employees.push(employee);
    }
}

function displayResults()
{
    let salaryAverage = 0;
    let salaryMax = 0;
    let salarySum = 0;
    let results = "<h2>Results</h2>";
    
    for (let i = 0; i < salaries.length; i++)
    {
        salarySum += salaries[i];

        if (salaryMax < salaries[i])
        {
            salaryMax = salaries[i];
        }     
    }

    salaryAverage = salarySum / salaries.length;
    salaryAverage = salaryAverage.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

    salaryMax = salaryMax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    let pTagString = "<p>The average salary is $" + salaryAverage + "</p>";   
    let pTagString2 = "<p>The highest salary is $" + salaryMax +  "</p>";

    document.getElementById('results').innerHTML = results + pTagString + pTagString2;
}

function displaySalary()
{
    let createTable = "<table><tr><th>Employee</th><th>Salary</th></tr>";

    for(let i = 0; i < employees.length; i++)
    {
        createTable += "<tr><td>"+ employees[i] + "</td><td>$" + salaries[i].toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "</td></tr>";
    }

    createTable += "</table>";
    document.getElementById("results_table").innerHTML = createTable;
}