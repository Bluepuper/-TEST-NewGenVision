let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
]

function sortCourses(unsortedCourses) {
    let courses = unsortedCourses
    courses.sort((course1, course2) => {
        if (
            (course1.prices[0] === course2.prices[0]) ||
            (!course1.prices[0] && !course2.prices[0])
        ) {
            return course1.prices[1] - course2.prices[1]
        }
        return course1.prices[0] - course2.prices[0]
    })
    return courses
}

// console.log( sortCourses(courses) )