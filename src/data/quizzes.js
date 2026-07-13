export const QUIZZES = [
  // JavaScript Quiz
  {
    id: 1,
    language: 'JavaScript',
    name: 'Variables and Data Types',
    questions: [
      {
        id: 'js-1',
        question: 'What does var, let, and const do in JavaScript?',
        options: ['They are the same', 'They define variables with different scopes', 'They are only for strings', 'None of the above'],
        correctAnswer: 1,
        explanation: 'var, let, and const are used to declare variables with different scopes. var has function scope, let and const have block scope.'
      },
      {
        id: 'js-2',
        question: 'Which of these is a primitive data type in JavaScript?',
        options: ['Array', 'Object', 'String', 'Function'],
        correctAnswer: 2,
        explanation: 'String is a primitive data type. Array, Object, and Function are non-primitive (reference) types.'
      },
      {
        id: 'js-3',
        question: 'What does typeof null return?',
        options: ['"null"', '"object"', '"undefined"', 'Error'],
        correctAnswer: 1,
        explanation: 'typeof null returns "object" due to a quirk in JavaScript. This is actually a known bug that wasn\'t fixed to maintain backward compatibility.'
      },
      {
        id: 'js-4',
        question: 'What is the difference between == and ===?',
        options: ['No difference', '== checks type, === checks value', '=== checks type, == checks value', '=== is for objects only'],
        correctAnswer: 2,
        explanation: '=== is strict equality (checks both type and value), while == is loose equality (converts types before comparing).'
      },
      {
        id: 'js-5',
        question: 'What is NaN in JavaScript?',
        options: ['Not a Name', 'Not a Number', 'Not an Object', 'None of the above'],
        correctAnswer: 1,
        explanation: 'NaN stands for "Not-a-Number" and is a special value that represents an undefined numerical result.'
      },
      {
        id: 'js-6',
        question: 'Which statement will cause an error?',
        options: ['const x = 10; x = 20;', 'let x = 10; x = 20;', 'var x = 10; x = 20;', 'All are valid'],
        correctAnswer: 0,
        explanation: 'const variables cannot be reassigned after initialization. The first statement will throw a TypeError.'
      },
      {
        id: 'js-7',
        question: 'What is the scope of let in JavaScript?',
        options: ['Global', 'Function', 'Block', 'Module'],
        correctAnswer: 2,
        explanation: 'let has block scope, meaning it is only accessible within the block (usually within curly braces) where it is declared.'
      },
      {
        id: 'js-8',
        question: 'What is hoisting in JavaScript?',
        options: ['Lifting something up', 'Moving declarations to the top of scope', 'A syntax error', 'A performance optimization'],
        correctAnswer: 1,
        explanation: 'Hoisting is JavaScript\'s behavior of moving declarations to the top of their scope before code execution.'
      },
      {
        id: 'js-9',
        question: 'What is the result of "5" + 3 in JavaScript?',
        options: ['8', '"53"', '"8"', 'Error'],
        correctAnswer: 1,
        explanation: 'Since "5" is a string, the + operator performs string concatenation, resulting in "53".'
      },
      {
        id: 'js-10',
        question: 'What does isNaN("Hello") return?',
        options: ['true', 'false', 'Error', '"Hello"'],
        correctAnswer: 0,
        explanation: 'isNaN("Hello") returns true because "Hello" cannot be converted to a valid number.'
      },
      {
        id: 'js-11',
        question: 'What is a Symbol in JavaScript?',
        options: ['A string', 'A unique immutable data type', 'A variable', 'A function'],
        correctAnswer: 1,
        explanation: 'A Symbol is a primitive data type introduced in ES6 that creates unique, immutable values.'
      },
      {
        id: 'js-12',
        question: 'Which is the correct way to declare a template literal?',
        options: ['"Hello ${name}"', "'Hello ${name}'", '`Hello ${name}`', '#Hello ${name}#'],
        correctAnswer: 2,
        explanation: 'Template literals use backticks (`) and allow interpolation with ${} syntax.'
      },
      {
        id: 'js-13',
        question: 'What is undefined in JavaScript?',
        options: ['A data type', 'A variable that has been declared but not assigned', 'Both A and B', 'An error'],
        correctAnswer: 2,
        explanation: 'undefined is a primitive data type and also the value assigned to variables declared but not initialized.'
      },
      {
        id: 'js-14',
        question: 'What is the result of Boolean("0")?',
        options: ['true', 'false', '0', 'Error'],
        correctAnswer: 0,
        explanation: 'Boolean("0") returns true because any non-empty string is truthy in JavaScript.'
      },
      {
        id: 'js-15',
        question: 'What is a BigInt in JavaScript?',
        options: ['A large integer', 'A number with BigInt methods', 'A primitive for numbers larger than 2^53-1', 'An object type'],
        correctAnswer: 2,
        explanation: 'BigInt is a primitive type for representing integers with arbitrary precision, larger than Number.MAX_SAFE_INTEGER.'
      },
      {
        id: 'js-16',
        question: 'How do you declare a BigInt?',
        options: ['BigInt(100)', '100n', 'BigInteger(100)', 'Both A and B'],
        correctAnswer: 3,
        explanation: 'Both BigInt(100) and 100n are valid ways to declare BigInt values.'
      },
      {
        id: 'js-17',
        question: 'What is the typeof operator used for?',
        options: ['Check object type', 'Return the data type of a value', 'Convert types', 'Compare values'],
        correctAnswer: 1,
        explanation: 'typeof is an operator that returns a string indicating the data type of a value.'
      },
      {
        id: 'js-18',
        question: 'What is the result of typeof undefined?',
        options: ['"undefined"', '"null"', 'undefined', 'Error'],
        correctAnswer: 0,
        explanation: 'typeof undefined returns the string "undefined".'
      },
      {
        id: 'js-19',
        question: 'What is a falsy value in JavaScript?',
        options: ['Any number', 'false, 0, "", null, undefined, NaN', 'Only false', 'Any object'],
        correctAnswer: 1,
        explanation: 'Falsy values are: false, 0, "", null, undefined, and NaN.'
      },
      {
        id: 'js-20',
        question: 'How many falsy values are there in JavaScript?',
        options: ['3', '5', '6', '8'],
        correctAnswer: 2,
        explanation: 'The falsy values are: false, 0, "", null, undefined, and NaN. That\'s 6 falsy values.'
      }
    ]
  },
  // Python Quiz
  {
    id: 2,
    language: 'Python',
    name: 'Data Types and Operations',
    questions: [
      {
        id: 'py-1',
        question: 'What is the correct way to create a list in Python?',
        options: ['list = [1, 2, 3]', 'list = (1, 2, 3)', 'list = {1, 2, 3}', 'list = <1, 2, 3>'],
        correctAnswer: 0,
        explanation: 'Lists in Python are created using square brackets []. Parentheses create tuples, and curly braces create sets.'
      },
      {
        id: 'py-2',
        question: 'What is the difference between a list and a tuple?',
        options: ['No difference', 'Lists are mutable, tuples are immutable', 'Tuples are faster', 'Lists are immutable'],
        correctAnswer: 1,
        explanation: 'Lists are mutable (can be changed), while tuples are immutable (cannot be changed after creation).'
      },
      {
        id: 'py-3',
        question: 'What does the len() function do?',
        options: ['Returns length of a value', 'Converts to string', 'Creates a new list', 'Removes items'],
        correctAnswer: 0,
        explanation: 'len() returns the number of items in an object like list, tuple, string, or dictionary.'
      },
      {
        id: 'py-4',
        question: 'What is a dictionary in Python?',
        options: ['An ordered list', 'An unordered collection of key-value pairs', 'A set of unique values', 'A string of characters'],
        correctAnswer: 1,
        explanation: 'A dictionary is an unordered collection of key-value pairs, similar to a map or object in other languages.'
      },
      {
        id: 'py-5',
        question: 'How do you create an empty dictionary?',
        options: ['dict = []', 'dict = {}', 'dict = ()', 'dict = set()'],
        correctAnswer: 1,
        explanation: 'An empty dictionary is created using {} (without key-value pairs).'
      },
      {
        id: 'py-6',
        question: 'What is the result of 10 / 3 in Python 3?',
        options: ['3', '3.333...', '3.0', 'Error'],
        correctAnswer: 1,
        explanation: 'In Python 3, / is the true division operator that returns a float. For integer division, use //.'
      },
      {
        id: 'py-7',
        question: 'What is the result of 10 // 3 in Python?',
        options: ['3.333...', '3', '3.0', 'Error'],
        correctAnswer: 1,
        explanation: '// is the floor division operator that returns an integer (rounded down).'
      },
      {
        id: 'py-8',
        question: 'What is the ** operator used for?',
        options: ['Multiplication', 'Power/Exponentiation', 'String formatting', 'Pointer dereference'],
        correctAnswer: 1,
        explanation: '** is the exponentiation operator. For example, 2 ** 3 = 8.'
      },
      {
        id: 'py-9',
        question: 'What is the result of 2 ** 10?',
        options: ['20', '12', '1024', '256'],
        correctAnswer: 2,
        explanation: '2 ** 10 = 2^10 = 1024.'
      },
      {
        id: 'py-10',
        question: 'How do you check if a value exists in a list?',
        options: ['list.exists(value)', 'value in list', 'list.contains(value)', 'list.has(value)'],
        correctAnswer: 1,
        explanation: 'The "in" operator checks if a value exists in a sequence.'
      },
      {
        id: 'py-11',
        question: 'What is the result of "Hello" * 3 in Python?',
        options: ['"Hello"', '"HelloHelloHello"', '3', 'Error'],
        correctAnswer: 1,
        explanation: 'Multiplying a string by an integer repeats (concatenates) the string that many times.'
      },
      {
        id: 'py-12',
        question: 'How do you convert a string to an integer?',
        options: ['str(123)', 'int("123")', 'integer("123")', 'convert("123")'],
        correctAnswer: 1,
        explanation: 'int() converts a string to an integer value.'
      },
      {
        id: 'py-13',
        question: 'What is None in Python?',
        options: ['Same as 0', 'Represents absence of value', 'Same as False', 'An error'],
        correctAnswer: 1,
        explanation: 'None is a special value in Python that represents the absence of a value or null.'
      },
      {
        id: 'py-14',
        question: 'What is a set in Python?',
        options: ['Ordered collection of unique items', 'Unordered collection of unique items', 'Ordered collection of items', 'Collection of key-value pairs'],
        correctAnswer: 1,
        explanation: 'A set is an unordered collection of unique items, created using curly braces {} or set().'
      },
      {
        id: 'py-15',
        question: 'How do you create an empty set?',
        options: ['set = {}', 'set = set()', 'set = []', 'Both A and B'],
        correctAnswer: 1,
        explanation: '{} creates an empty dictionary, not a set. Use set() to create an empty set.'
      },
      {
        id: 'py-16',
        question: 'What is string slicing in Python?',
        options: ['Cutting a string', 'Extracting a substring using indices', 'Removing characters', 'Finding a substring'],
        correctAnswer: 1,
        explanation: 'String slicing is extracting a portion of a string using start and end indices with the [start:end] syntax.'
      },
      {
        id: 'py-17',
        question: 'What is the result of "Hello"[0]?',
        options: ['"0"', '"H"', '"Hello"', 'Error'],
        correctAnswer: 1,
        explanation: 'String indexing starts at 0, so "Hello"[0] returns "H".'
      },
      {
        id: 'py-18',
        question: 'What is the result of "Hello"[-1]?',
        options: ['Error', '"H"', '"o"', '"Hello"'],
        correctAnswer: 2,
        explanation: 'Negative indexing counts from the end, so "Hello"[-1] returns "o".'
      },
      {
        id: 'py-19',
        question: 'How do you get the type of a value in Python?',
        options: ['typeof(value)', 'type(value)', 'gettype(value)', 'value.type()'],
        correctAnswer: 1,
        explanation: 'type() function returns the type of an object.'
      },
      {
        id: 'py-20',
        question: 'What is the result of type("Hello")?',
        options: ['"string"', '<class \'str\'>', 'str', '<class \'string\'>'],
        correctAnswer: 1,
        explanation: 'type("Hello") returns <class \'str\'>, indicating the value is a string.'
      }
    ]
  },
  // HTML Quiz
  {
    id: 3,
    language: 'HTML',
    name: 'HTML Fundamentals',
    questions: [
      {
        id: 'html-1',
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language'],
        correctAnswer: 0,
        explanation: 'HTML stands for HyperText Markup Language.'
      },
      {
        id: 'html-2',
        question: 'What is the correct HTML for creating a heading?',
        options: ['<heading>Hello</heading>', '<h1>Hello</h1>', '<head>Hello</head>', '<title>Hello</title>'],
        correctAnswer: 1,
        explanation: '<h1> to <h6> tags are used for headings, with <h1> being the largest.'
      },
      {
        id: 'html-3',
        question: 'What is the correct HTML for creating a paragraph?',
        options: ['<p>Hello</p>', '<para>Hello</para>', '<paragraph>Hello</paragraph>', '<pr>Hello</pr>'],
        correctAnswer: 0,
        explanation: '<p> tag is used to create a paragraph.'
      },
      {
        id: 'html-4',
        question: 'Which tag is used to create a link?',
        options: ['<link>', '<a>', '<url>', '<href>'],
        correctAnswer: 1,
        explanation: '<a> tag is used to create hyperlinks with the href attribute.'
      },
      {
        id: 'html-5',
        question: 'What is the correct HTML for creating an unordered list?',
        options: ['<ol>', '<ul>', '<list>', '<ul-list>'],
        correctAnswer: 1,
        explanation: '<ul> tag creates an unordered list, while <ol> creates an ordered list.'
      },
      {
        id: 'html-6',
        question: 'What tag is used for list items?',
        options: ['<item>', '<li>', '<list-item>', '<l>'],
        correctAnswer: 1,
        explanation: '<li> tag represents a list item in both ordered and unordered lists.'
      },
      {
        id: 'html-7',
        question: 'Which tag creates a table?',
        options: ['<tab>', '<table>', '<t>', '<tbl>'],
        correctAnswer: 1,
        explanation: '<table> tag is used to create a table in HTML.'
      },
      {
        id: 'html-8',
        question: 'What is the correct HTML for creating a form?',
        options: ['<form>', '<input>', '<fields>', '<data>'],
        correctAnswer: 0,
        explanation: '<form> tag is used to create a form to collect user input.'
      },
      {
        id: 'html-9',
        question: 'Which tag is used for text input in a form?',
        options: ['<text>', '<input type="text">', '<textbox>', '<input>'],
        correctAnswer: 1,
        explanation: '<input type="text"> creates a single-line text input field.'
      },
      {
        id: 'html-10',
        question: 'What does <br> tag do?',
        options: ['Bold text', 'Create a line break', 'Block element', 'Bold and break'],
        correctAnswer: 1,
        explanation: '<br> tag creates a line break without starting a new paragraph.'
      },
      {
        id: 'html-11',
        question: 'What does <hr> tag do?',
        options: ['Create horizontal rule/line', 'Header', 'HTML reference', 'Heading reference'],
        correctAnswer: 0,
        explanation: '<hr> tag creates a horizontal line across the page.'
      },
      {
        id: 'html-12',
        question: 'Which tag is used to emphasize text (italic)?',
        options: ['<b>', '<i>', '<em>', 'Both B and C'],
        correctAnswer: 3,
        explanation: '<i> and <em> both create italic text. <b> creates bold text.'
      },
      {
        id: 'html-13',
        question: 'What tag is used for an image?',
        options: ['<image>', '<img>', '<picture>', '<photo>'],
        correctAnswer: 1,
        explanation: '<img> tag is used to embed images with src and alt attributes.'
      },
      {
        id: 'html-14',
        question: 'What is the DOCTYPE declaration?',
        options: ['Defines document type', 'Creates a document', 'Tags the document', 'None of the above'],
        correctAnswer: 0,
        explanation: '<!DOCTYPE> declaration tells the browser what version of HTML is being used.'
      },
      {
        id: 'html-15',
        question: 'What is the correct DOCTYPE for HTML5?',
        options: ['<!DOCTYPE html>', '<!DOCTYPE HTML>', '<!doctype HTML5>', 'Both A and B'],
        correctAnswer: 3,
        explanation: 'Both <!DOCTYPE html> and <!DOCTYPE HTML> are correct for HTML5 (case-insensitive).'
      },
      {
        id: 'html-16',
        question: 'Which tags are used for semantic HTML?',
        options: ['<div>, <span>', '<article>, <section>, <nav>', '<p>, <a>', '<table>, <tr>'],
        correctAnswer: 1,
        explanation: 'Semantic tags like <article>, <section>, <nav> give meaning to the content.'
      },
      {
        id: 'html-17',
        question: 'What is the <meta> tag used for?',
        options: ['Create metadata', 'Links to stylesheets', 'Creates menus', 'None of above'],
        correctAnswer: 0,
        explanation: '<meta> tag provides metadata about the HTML document.'
      },
      {
        id: 'html-18',
        question: 'Which attribute is used with <img> to provide text when image cannot load?',
        options: ['text', 'title', 'alt', 'description'],
        correctAnswer: 2,
        explanation: 'The alt attribute provides alternative text for images.'
      },
      {
        id: 'html-19',
        question: 'What is a block element?',
        options: ['Takes full width', 'Flows inline', 'Requires special CSS', 'Only for text'],
        correctAnswer: 0,
        explanation: 'Block elements take up the full width available and start a new line.'
      },
      {
        id: 'html-20',
        question: 'Which of these is an inline element?',
        options: ['<div>', '<p>', '<span>', '<section>'],
        correctAnswer: 2,
        explanation: '<span> is an inline element that only takes up as much width as necessary.'
      }
    ]
  },
  // CSS Quiz
  {
    id: 4,
    language: 'CSS',
    name: 'CSS Selectors and Styling',
    questions: [
      {
        id: 'css-1',
        question: 'What does CSS stand for?',
        options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
        correctAnswer: 1,
        explanation: 'CSS stands for Cascading Style Sheets.'
      },
      {
        id: 'css-2',
        question: 'What is the correct way to link a CSS file?',
        options: ['<style src="style.css">', '<link rel="stylesheet" href="style.css">', '<css href="style.css">', '<stylesheet>style.css</stylesheet>'],
        correctAnswer: 1,
        explanation: 'Use <link rel="stylesheet" href="style.css"> to link external CSS files.'
      },
      {
        id: 'css-3',
        question: 'How do you select all elements of a class?',
        options: ['.classname', '#classname', 'classname', '*classname'],
        correctAnswer: 0,
        explanation: 'Use a dot (.) to select elements by class name.'
      },
      {
        id: 'css-4',
        question: 'How do you select an element by ID?',
        options: ['.idname', 'idname', '#idname', '*idname'],
        correctAnswer: 2,
        explanation: 'Use a hash (#) to select an element by its ID.'
      },
      {
        id: 'css-5',
        question: 'What property is used to change text color?',
        options: ['font-color', 'text-color', 'color', 'text'],
        correctAnswer: 2,
        explanation: 'The color property changes the text color in CSS.'
      },
      {
        id: 'css-6',
        question: 'What property is used to change the background color?',
        options: ['background-color', 'bg-color', 'bgcolor', 'back-color'],
        correctAnswer: 0,
        explanation: 'background-color property sets the background color of an element.'
      },
      {
        id: 'css-7',
        question: 'How do you add space inside an element?',
        options: ['margin', 'padding', 'border', 'spacing'],
        correctAnswer: 1,
        explanation: 'padding adds space inside an element, while margin adds space outside.'
      },
      {
        id: 'css-8',
        question: 'How do you add space outside an element?',
        options: ['padding', 'spacing', 'margin', 'gap'],
        correctAnswer: 2,
        explanation: 'margin adds space outside an element.'
      },
      {
        id: 'css-9',
        question: 'What is the difference between margin and padding?',
        options: ['No difference', 'Margin is outside, padding is inside', 'Margin is inside, padding is outside', 'They work on different elements'],
        correctAnswer: 1,
        explanation: 'Margin is the space outside the element border, padding is inside.'
      },
      {
        id: 'css-10',
        question: 'What property controls the font size?',
        options: ['text-size', 'font-size', 'size', 'font'],
        correctAnswer: 1,
        explanation: 'font-size property controls the size of text.'
      },
      {
        id: 'css-11',
        question: 'What are the valid values for display property?',
        options: ['block, inline', 'flex, grid', 'All of the above', 'only block'],
        correctAnswer: 2,
        explanation: 'The display property can have many values including block, inline, flex, grid, and more.'
      },
      {
        id: 'css-12',
        question: 'What does display: flex do?',
        options: ['Creates a flexible layout', 'Makes text bold', 'Adds flexibility to margins', 'Only for images'],
        correctAnswer: 0,
        explanation: 'display: flex creates a flexible container for responsive layouts.'
      },
      {
        id: 'css-13',
        question: 'What is a pseudo-class in CSS?',
        options: ['A class for pseudo elements', 'A special state of an element', 'Not a real class', 'Both B and C'],
        correctAnswer: 3,
        explanation: 'A pseudo-class represents a special state of an element, like :hover or :focus.'
      },
      {
        id: 'css-14',
        question: 'What is the :hover pseudo-class used for?',
        options: ['Hovering text', 'Styling when user hovers over element', 'Creating hover effects', 'B and C'],
        correctAnswer: 3,
        explanation: ':hover applies styles when a user hovers their mouse over an element.'
      },
      {
        id: 'css-15',
        question: 'What is the CSS box model?',
        options: ['A box to store CSS', 'Content, padding, border, margin', 'A container for layouts', 'Not important'],
        correctAnswer: 1,
        explanation: 'The CSS box model includes content, padding, border, and margin.'
      },
      {
        id: 'css-16',
        question: 'What property is used to create rounded corners?',
        options: ['border-radius', 'corner-radius', 'round-corner', 'border-round'],
        correctAnswer: 0,
        explanation: 'border-radius property creates rounded corners on elements.'
      },
      {
        id: 'css-17',
        question: 'What does z-index do?',
        options: ['Controls horizontal position', 'Controls depth/stacking order', 'Controls size', 'Controls rotation'],
        correctAnswer: 1,
        explanation: 'z-index controls the stacking order of positioned elements.'
      },
      {
        id: 'css-18',
        question: 'What is specificity in CSS?',
        options: ['How specific your selectors are', 'How specific your properties are', 'Rules for writing CSS', 'A type of selector'],
        correctAnswer: 0,
        explanation: 'Specificity determines which CSS rule is applied when multiple rules target the same element.'
      },
      {
        id: 'css-19',
        question: 'What is the cascade in CSS?',
        options: ['Waterfall effect', 'Order of importance in CSS rules', 'A CSS layout', 'A type of animation'],
        correctAnswer: 1,
        explanation: 'The cascade determines which CSS rule applies based on specificity and order.'
      },
      {
        id: 'css-20',
        question: 'What is the correct way to write a CSS comment?',
        options: ['// comment', '# comment', '/* comment */', '-- comment'],
        correctAnswer: 2,
        explanation: 'CSS comments use /* and */ syntax.'
      }
    ]
  }
]
