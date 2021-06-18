const menu = [
    {
        id: 1,
        title: "works pizza",
        category: "pizzas",
        price: 5.99,
        price2: 10.99,
        price3: 13.99,
        price4: 16.99,
        desc: "Pepperoni, Sausage, Onions, Green Peppers, Mushrooms",
    },
    {
        id: 2,
        title: "vegy pizza",
        category: "pizzas",
        price: 5.49,
        price2: 9.49,
        price3: 12.49,
        price4: 15.49,
        desc: "Tomatoes, Onions, Green Peppers, Mushrooms",
    },
    {
        id: 3,
        title: "meat lovers pizza",
        category: "pizzas",
        price: 5.99,
        price2: 9.99,
        price3: 13.49,
        price4: 16.49,
        desc: "Pepperoni, Ham, Bacon, Sausage",
    },
    {
        id: 4,
        title: "gourmet pizza",
        category: "pizzas",
        price: 6.99,
        price2: 11.99,
        price3: 15.99,
        price4: 18.99,
        desc: "Pepperoni, Sausage, Mushrooms, Ham, Onions, Black Olives, Green Peppers, Hot Peppers, Sliced Tomatoes, Bacon, Green Olives",
    },
    {
        id: 5,
        title: "hawaiian pizza",
        category: "pizzas",
        price: 4.99,
        price2: 8.99,
        price3: 11.99,
        price4: 14.99,
        desc: "Ham, Pineapple, Almonds, Cinnamon",
    },
    {
        id: 6,
        title: "bbq chicken pizza",
        category: "pizzas",
        price: 5.49,
        price2: 9.99,
        price3: 12.99,
        price4: 15.99,
        desc: "",
    },
    {
        id: 7,
        title: "buffalo chicken pizza",
        category: "pizzas",
        price: 5.49,
        price2: 9.99,
        price3: 12.99,
        price4: 15.99,
        desc: "",
    },
    {
        id: 8,
        title: "wings",
        category: "wings",
        price: 5.99 + " - 12",
        price2: 10.99 + " - 12",
        price3: "",
        price4: "",
        desc: "Regular and Boneless- Plain, BBQ, Mild, Hot BBQ, Hot",
    },
    {
        id: 9,
        title: "italian salad",
        category: "salads",
        price: 3.00,
        price2: 19.99 + " catering size",
        price3: "",
        price4: "",
        desc: "Lettuce, green peppers, onions, tomatoes, hot peppers, and pepperoni",
    },
    {
        id: 10,
        title: "antipasto salad",
        category: "salads",
        price: 3.00,
        price2: "",
        price3: "",
        price4: "",
        desc: "Includes all of the above plus ham, mushrooms, and cheese",
    },
    {
        id: 11,
        title: "salad with chicken",
        category: "salads",
        price: 4.00,
        price2: "",
        price3: "",
        price4: "",
        desc: "Lettuce, chicken, cheese, green peppers, onions, tomatoes, and hot peppers",
    },
    {
        id: 12,
        title: "regular sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Salami, ham, cheese, lettuce, tomatoes, hot peppers, and pizza sauce or italian sauce",
    },
    {
        id: 13,
        title: "regular sub w/ hot sausage",
        category: "subs",
        price: 6.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "",
    },
    {
        id: 14,
        title: "chicken sub",
        category: "subs",
        price: 6.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Chicken, cheese, hot peppers, onions, green peppers, lettuce, tomatoes, and mayonnaise (other sauces available.)",
    },
    {
        id: 15,
        title: "sausage sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Hot sausage with cheese, lettuce, toamtoes, hot peppers, and pizza sauce or italian dressing",
    },
    {
        id: 16,
        title: "meatball sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Four meatballs, pizza sauce, sprinkled romano cheese, covered with two slices of cheese",
    },
    {
        id: 17,
        title: "ham and cheese sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Ham, cheese, lettuce, tomatoes, onions, and italian dressing",
    },
    {
        id: 18,
        title: "pizza sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "An open-faced sub bun covered with pizza sauce, cheese, pepperoni, and sprinkled with oregano",
    },
    {
        id: 19,
        title: "veggie sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Mushrooms, green peppers, onions, cheese, tomatoes, lettuce, hot peppers, and italian dressing",
    },
    {
        id: 20,
        title: "philly sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Philly beef, green peppers, onions, cheese, mushrooms, and your choice of veggies and a sauce",
    },
    {
        id: 21,
        title: "chicken parmesian sub",
        category: "subs",
        price: 5.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "Breaded chicken, pizza sauce, mozzarella, and parmesian cheeses on a garlic bread bun",
    },
    {
        id: 22,
        title: "extra meat",
        category: "subs",
        price: 1.00,
        price2: "",
        price3: "",
        price4: "",
        desc: "",
    },
    {
        id: 23,
        title: "extra cheese",
        category: "subs",
        price: 0.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "",
    },
    {
        id: 24,
        title: "garlic bread",
        category: "breads",
        price: 2.00,
        price2: "",
        price3: "",
        price4: "",
        desc: "",
    },
    {
        id: 25,
        title: "garlic bread with cheese",
        category: "breads",
        price: 3.00,
        price2: "",
        price3: "",
        price4: "",
        desc: "",
    },
    {
        id: 26,
        title: "pan of sauce to dip bread",
        category: "breads",
        price: 0.50,
        price2: "",
        price3: "",
        price4: "",
        desc: "",
    },
    {
        id: 27,
        title: "beverages",
        category: "beverages",
        price: 1.00 + " - can",
        price2: 2.25 + " - 2 liter",
        price3: 4.50 + " - 6 pack",
        price4: "",
        desc: "",
    },
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        return `<article class="menu-item">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>&nbsp &nbsp
                    <h4 class="price">$${item.price2}</h4>&nbsp &nbsp
                    <h4 class="price">$${item.price3}</h4>&nbsp &nbsp
                    <h4 class="price">$${item.price4}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons(){
    const categories = menu.reduce(
        function (values, item) {
            if(!values.includes(item.category)){
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function(category){
            return `<button type="button"
            class="filter-btn" data-id=${category}>
                    ${category}
                </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem){
                if(menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "all"){
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
