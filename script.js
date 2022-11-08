// November 7, 22
// Given five positive integers, find the minimum and maximum values 
// that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line 
// of two space-separated long integers.

arr1 = [5,2,3,4,1]
arr2 = [5,5,5,5,5]

function miniMaxSum(arr) {
    let min = arr[0]
    let max = arr[0]
    let sum = 0
    for (let n in arr){
        sum += arr[n]
        if (arr[n] >= max){max = arr[n]}
        if (arr[n] <= min){min = arr[n]}
    }
    return console.log(`${sum - min} ${sum - max}`)
}

miniMaxSum(arr1)

// ------------------------------------------------------------------------------------ //

// November 7, 22
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Function Description
// Complete the timeConversion function in the editor below. 
// It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// string s: a time in  hour format
// Returns
// string: the time in  hour format
// Input Format
// A single string  that represents a time in -hour clock format (i.e.:  or ).
// Constraints
// All input times are valid

let s = "12:01:45AM"
let s2 = "07:01:01PM"


function timeConvert(s){
    let day = s.slice(8)
    let sarr = s.slice(0, 8).split(":")
    let hour = parseInt(sarr[0])
    if (day === "AM" && hour === 12){
        hour = "00"
    } else if (day === "AM" && hour < 10){
        hour = "0"+hour.toString()
    } else if (day === "PM"){
        if (hour < 10){
            hour += 12
            hour = hour.toString()
        } else if (hour < 12){
            hour += 12
            hour = hour.toString()
        }
    } else {hour = hour.toString()}
    sarr[0] = hour
    return console.log(`${sarr.join(":")}`)
}

timeConvert(s2)