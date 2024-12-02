1) Modify

    function `taskFirst` to instantiate variables using `const`
    function `taskNext` to instantiate variables using `let`

```js
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}

```

```bash

Execution example:

don@joe:~$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

don@joe:~$ 
don@joe:~$ npm run dev 0-main.js 
I prefer const when I can. But sometimes let is okay
don@joe:~$ 

```



Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 0-constants.js



2) Rewrite the following standard function to use ES6’s arrow syntax of the function add (it will be an anonymous function after)

```js

export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  this.addNeighborhood = function add(newNeighborhood) {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}

```

Execution:

```bash

don@joe:~$  cat 1-main.js
import getNeighborhoodsList from './2-arrow.js';

const neighborhoodsList = new getNeighborhoodsList();
const res = neighborhoodsList.addNeighborhood('Noe Valley');
console.log(res);
don@joe:~$ 
don@joe:~$  npm run dev 1-main.js 
[ 'SOMA', 'Union Square', 'Noe Valley' ]
don@joe:~$ 

```

Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 1-arrow.js


3) Condense the internals of the following function to 1 line - without changing the name of each function/variable.

Hint: The key here to define default parameter values for the function parameters.

```js

export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
  if (expansion1989 === undefined) {
    expansion1989 = 89;
  }

  if (expansion2019 === undefined) {
    expansion2019 = 19;
  }
  return initialNumber + expansion1989 + expansion2019;
}

```

Execution:

```bash 
don@joe:~$ cat 3-main.js
import getSumOfHoods from './3-default-parameter.js';

console.log(getSumOfHoods(34));
console.log(getSumOfHoods(34, 3));
console.log(getSumOfHoods(34, 3, 4));
don@joe:~$
don@joe:~$ npm run dev 3-main.js 
142
56
41
don@joe:~$
```

Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 2-default-parameter.js



4) Rewrite the return statement to use a template literal so you can the substitute the variables you’ve defined.


```js
export default function getSanFranciscoDescription() {
  const year = 2017;
  const budget = {
    income: '$119,868',
    gdp: '$154.2 billion',
    capita: '$178,479',
  };

  return 'As of ' + year + ', it was the seventh-highest income county in the United States'
        / ', with a per capita personal income of ' + budget.income + '. As of 2015, San Francisco'
        / ' proper had a GDP of ' + budget.gdp + ', and a GDP per capita of ' + budget.capita + '.';
}

```

Execution:

```bash
don@joe:~$ cat 4-main.js
import getSanFranciscoDescription from './4-string-interpolation.js';

console.log(getSanFranciscoDescription());

don@joe:~$
don@joe:~$ npm run dev 4-main.js 
As of 2017, it was the seventh-highest income county in the United States, with a per capita personal income of $119,868. As of 2015, San Francisco proper had a GDP of $154.2 billion, and a GDP per capita of $178,479.
don@joe:~$:~$

```

Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 4-string-interpolation.js



Notice how the keys and the variable names are the same?

Modify the following function’s budget object to simply use the keyname instead.


```js

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income: income,
    gdp: gdp,
    capita: capita,
  };

  return budget;
}

```

Execution:

```bash

don@joe:~$ cat 5-main.js
import getBudgetObject from './5-getBudgetObject.js';

console.log(getBudgetObject(400, 700, 900));

don@joe:~$
don@joe:~$ npm run dev 5-main.js 
{ income: 400, gdp: 700, capita: 900 }
don@joe:~$

```


Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 5-getBudgetObject.js




6) Create a function named getListStudents that returns an array of objects. Each object should have three attributes: `id` (Number), `firstName` (String), and `location` (String).

The array contains the following students in order:

    Guillaume, id: 1, in San Francisco
    James, id: 2, in Columbia
    Serena, id: 5, in San Francisco

```bash 
don@joe:~$ cat 6-main.js
import getListStudents from "./6-get_list_students.js";

console.log(getListStudents());

don@joe:~$ 
don@joe:~$ npm run dev 6-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 2, firstName: 'James', location: 'Columbia' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
don@joe:~$ 

```



Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 6-get_list_students.js



7) Create a function `getStudentsByLocation` that returns an array of `objects` who are located in a specific city.

It should accept a list of students (from `getListStudents`) and a city (string) as parameters.

You must use the `filter` function on the `array`.


```bash 
don@joe:~$ cat 7-main.js
import getListStudents from "./6-get_list_students.js";
import getStudentsByLocation from "./7-get_students_by_loc.js";

const students = getListStudents();

console.log(getStudentsByLocation(students, 'San Francisco'));

don@joe:~$ 
don@joe:~$ npm run dev 7-main.js 
[
  { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
  { id: 5, firstName: 'Serena', location: 'San Francisco' }
]
don@joe:~$ 

```

Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 7-get_students_by_loc.js



8) Create a function getStudentIdsSum that returns the sum of all the student `ids`.

It should accept a list of students (from `getListStudents`) as a parameter. You must use the `reduce` function on the array. 

```bash 
don@joe:~$ cat 8-main.js
import getListStudents from "./7-get_list_students.js";
import getStudentIdsSum from "./8-get_ids_sum.js";

const students = getListStudents();
const value = getStudentIdsSum(students);

console.log(value);

don@joe:~$
don@joe:~$ npm run dev 8-main.js 
8
don@joe:~$
```

9) Create a function `getListStudentIds` that `returns` an array of `ids` from a list of `object`.

This function is taking one argument which is an `array` of objects - and this array is the same format as `getListStudents` from the previous task.

If the argument is not an array, the function is returning an empty array.

You must use the `map` function on the array.

```bash 

don@joe:~$ cat 9-main.js
import getListStudentIds from "./9-get_list_student_ids.js";
import getListStudents from "./7-get_list_students.js";

console.log(getListStudentIds("hello"));
console.log(getListStudentIds(getListStudents()));

don@joe:~$
don@joe:~$ npm run dev 9-main.js 
[]
[ 1, 2, 5 ]
bob@dylan:~$ 

```


10) Implement a class named JavaScriptCourse:

    Constructor attributes:
        `name` (String)
        `length` (Number)
        `students` (array of Strings)
    Make sure to verify the type of attributes during object creation
    Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
    Implement a `getter` and setter for each attribute.


```bash 
don@joe:~$ cat 10-main.js
import JavaScriptCourse from "./10-Javascript_course.js";

const c1 = new JavaScriptCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new JavaScriptCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

don@joe:~$ 
don@joe:~$ npm run dev 10-main.js 
ES6
JavaScriptCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
don@joe:~$

```




Repo:

    GitHub repository: shecode-africa-backend
    Directory: ES6_basics
    File: 10-Javascript_course.js

## Setup

1. Setup Node.js Environment

Make sure you have Node.js installed on your system. Verify by running:

```bash
node -v
npm -v

```

2. Create a Project Directory

Create a directory for your project and initialize a Node.js project:

```bash 
mkdir shecode-africa-backend
cd shecode-africa-backend
npm init -y

```

3. Install Babel for ES6 Syntax

Since some tasks use ES6 syntax, set up Babel to transpile the code:

```bash
npm install @babel/core @babel/cli @babel/preset-env --save-dev

```

4. Configure Babel

Create a .babelrc file in the root directory with the following content:

```bash
{
  "presets": ["@babel/preset-env"]
}

```

5. Add Scripts in package.json

Modify the scripts section in your package.json to include a development script:

```bash 
"scripts": {
  "dev": "node --loader @babel/register"
}

```

6. Write Your Files

Organize your project files based on the repo structure described:

    Directory structure:

    ```bash 

    shecode-africa-backend/
├── ES6_basics/
│   ├── 0-constants.js
│   ├── 1-arrow.js
│   ├── 2-default-parameter.js
│   ├── 4-string-interpolation.js
│   ├── 5-getBudgetObject.js
│   ├── 6-get_list_students.js
│   ├── 7-get_students_by_loc.js
│   ├── 8-get_ids_sum.js
│   ├── 9-get_list_student_ids.js
│   ├── 10-Javascript_course.js
├── 0-main.js
├── 1-main.js
├── 3-main.js
├── 4-main.js
├── 5-main.js
├── 6-main.js
├── 7-main.js
├── 8-main.js
├── 9-main.js
├── 10-main.js
└── package.json
└── .babelrc               # Babel configuration file


    ```


7. Run Tests

To test each task, navigate to the root directory and use the npm run dev command followed by the main file name. 

For example:

```bash 
npm run dev ES6_basics/0-main.js
npm run dev ES6_basics/1-main.js

```