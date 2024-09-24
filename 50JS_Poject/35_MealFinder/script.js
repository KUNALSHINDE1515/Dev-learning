const serachMeal = async(e) => {
    e.preventDefault();


    const input = document.querySelector('.input')
    const title = document.querySelector('.title')
    const info = document.querySelector('.info')
    const img = document.querySelector('.img')
    const ingredientsOutput = document.querySelector('.ingredients')

    const showMealInfo = (meal) => {
        console.log(meal);
        
    }

    const showAlert = ()  => {
        alert("Meal not found")
    }

    const fetchMealData  = async(val) => {
       const res =  await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)


       const {meals} = await res.json()
       return meals;
    };


    // Get Usel VAl

    const val = input.ariaValueMax.trim()

    if (val) {
        const meals = await fetchMealData(val)

        if (!meals) {
            showAlert()
            return;
        }
        meals.forEach(showMealInfo)
    }else{
        alert("Data was Wrong")
    }
}  


const form = document.querySelector('form')
form.addEventListener('submit' , serachMeal)

const magnifirer = document.querySelector('.magnifirer')
magnifirer.addEventListener('Click' , serachMeal)
