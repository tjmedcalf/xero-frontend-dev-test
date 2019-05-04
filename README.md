# CSS/HTML Questions

### **1. Give a brief description of the box model**

The box-model is essentially the rendering "rules" for an html element. These rules dictate how elements use space within the viewport.


### **2. What is the difference between `display: inline;` and `display: block`?**

Standard block level elements are 100% width of their parent (unless they float, or flex..), and they can recieve padding and margin, whereas an inline element is only the width of it's content, and certain padding and margin properties will have no effect.


### **3. How is the `z-index` property used and why?**

z-index controls stack order and is often used for modals/dialogs, slide-out or off canvas menus, and anything that needs to overlap another element. A SCSS arcitecture benefits greatly from having all z-index declarations in a single file and spread out using variables, this allows a nice overview of which elements are stacked with z-index.

### **4. Can you give an example of when you would use absolute positioning?**

Absolute positioning should be used sparingly as it breaks the box-model to an extent, which is generally not favourable because it means the element won't generally flow with the content which doesn't scale very well in responsive layouts. An obvious example of when to use absolute positioning is for a modal window. Other uses might be a tooltip pop-up or a menu dropdown.

# Javascript Questions
    Const sales = [
        { itemSold: “Football”, price: 19.99, dateSold: ‘2018-04-07’, id: ‘j_123 },
        { itemSold: “Trainers”, price: 159.95, dateSold: ‘2018-03-02’, id: ‘t_acds1’ },
        { itemSold: “Cricket bat”, price: 204.97, dateSold: ‘2018-04-05’ id: ‘j_456’},
        { itemSold: ”Rugby ball”, price: 30.00, dateSold: ‘2017-04-22’, id: ‘t_acds3’ },
        { itemSold: “Hockey stick”, price: 54.95, dateSold: ‘2017-03-19’, id: ‘j_999’ }
    ]

### **1. Write a function to return the sum of the price of all properties as a single value.**

## < ES 6
    function() { 
        var sum = 0;
    
        sales.forEach(function(val) {
            sum = sum + val.price;
        });
    
        return sum;
    }

## ES 6+
    function() {
        return sales
            .map(x => x.price)
            .reduce( (acc, current) => acc + current, 0 );
    }


### **2. Write a function to only return the items which were sold in 2017.**



### **3. Write a function to return an array of all of the itemsSold properties as strings, sorted alphabetically.**



### **4. Write a function which takes an id as an argument and returns the sale which matches the id.**

