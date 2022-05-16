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

let requiredRange1 = [null, 200]
let requiredRange2 = [100, 350]
let requiredRange3 = [200, null]

function filterCourses(unfilteredCourses, range) {
  let filteredCourses = unfilteredCourses.filter((course) => {
    if (
      (course.prices[0] > range[1] && range[1] !== null) ||
      (course.prices[1] < range[0] && course.prices[1] !== null)
    ) return false
    return course
  })
  return filteredCourses
}

// console.log( filterCourses(courses, requiredRange1) )
// console.log( filterCourses(courses, requiredRange2) )
// console.log( filterCourses(courses, requiredRange3) )