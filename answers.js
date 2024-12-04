// Question 4: Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.

 function getSanFranciscoDescription(){
    const year = 2017
    const budget = {
        income : `$119,868`,
        gdp : `$154.2 billion`,
        capita : `$178,49`
    }

    return `As of ${year}, it was the seventh-highest income county in the United States, 
    with a per capita personal income of ${budget.income}. Its GDP was ${budget.gdp}, 
    and its GDP per capita was ${budget.capita}.`

}

getSanFranciscoDescription()

// Question 5: Modify the following function’s budget object to simply use the keyname instead.

function getBudgetObject(income, gdp, capita){
    
    const budget = {
        income : income,
        gdp : gdp,
        capita : capita
    }

   return(budget)
   
}
console.log(getBudgetObject(400, 700, 900))
getBudgetObject()

// Question 6: Create a function named getListStudents that returns an array of objects. Each object should have three attributes: id (Number), firstName (String), and location (String).
// The array contains the following students in order:

function getListStudents(){
    const studentList = [
        {
            id : 1,
            firstName : "Guilaume",
            location : "San Francisco"
        },

        {
            id : 2,
            firstName : "James",
            location : "Columbia"
        },

        {
            id : 3,
            firstName : "Serena",
            location : "San Francisco"
        },

        {
            id : 786954,
            firstName : "Loren",
            location : "Lisbon"
        },

        {
            id : 704231,
            firstName : "Anderson",
            location : "Uppsala"
        },

        {
            id : 690954,
            firstName : "Keisha",
            location : "Kampala"
        }
    ]

    return studentList
}

getListStudents()


