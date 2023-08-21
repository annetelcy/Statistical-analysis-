function calculate() {

    let x = Number(document.getElementById("num1").value);
    let y = Number(document.getElementById("num2").value);
    let z = Number(document.getElementById("num3").value);

    let max = Math.max(x, y, z);
    let min = Math.min(x, y, z);
    let range = max - min;

    let x_int = parseInt(x);
    let y_int = parseInt(y);
    let z_int = parseInt(z);
    let average = Math.round(x_int + z_int + y_int)/ 3;   



    document.getElementById("max").innerHTML = max;
    document.getElementById("min").innerHTML = min;
    document.getElementById("range").innerHTML = range;
    document.getElementById("average").innerHTML = average;
    var median =document.getElementById("median");

    let temp = 0; 
    let arr = [x, y, z];
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){ 
            if(arr[j]> arr[j+1]){
                temp = arr[j]; 
                arr[j] = arr[ j + 1]; 
                arr[j+1] = temp; 
            }
        }
    }
   median.innerText= arr[Math.floor(arr.length/2)];


}
