## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### 2. How do you create and insert a new element into the DOM?

### 3. What is Event Bubbling? And how does it work?

### 4. What is Event Delegation in JavaScript? Why is it useful?

### 5. What is the difference between preventDefault() and stopPropagation() methods?
===================

Answer to the all questions: 

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
- `getElementById()` - Returns a single element by its ID. Fastest method for getting one specific element.
- `getElementsByClassName()` - Returns a live HTMLCollection of all elements with a specific class. Updates automatically when DOM changes.
- `querySelector()` - Returns the first element matching a CSS selector. More flexible than getElementById.
- `querySelectorAll()` - Returns a static NodeList of all elements matching a CSS selector. Doesn't update automatically.

2. How do you create and insert a new element into the DOM?
Ans:
```javascript
// Create a new element
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello';

// Insert into the DOM
document.body.appendChild(newDiv);  // Add at the end
// Or use insertBefore(), insertAdjacentHTML(), etc.
```

3. What is Event Bubbling? And how does it work?
Ans:
Event bubbling is when an event triggered on an inner element propagates up through its parent elements. For example, clicking a button inside a div triggers the button's click event first, then the div's click event. It flows from child to parent.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:
Event delegation is attaching a single event listener to a parent element instead of multiple listeners to child elements. It's useful because:
- Reduces memory usage (one listener instead of many)
- Works for dynamically added elements
- Simplifies code maintenance

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:
- `preventDefault()` - Prevents the default action of an event (e.g., prevents form submission).
- `stopPropagation()` - Stops the event from bubbling up to parent elements but allows the default action. 
