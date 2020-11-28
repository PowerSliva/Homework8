let mass = [1,20,3,12,42,8,50];

function OporaAndPart(arr, start, end){
    
    const Opora = arr[end];
    let OporaIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < Opora) {
        
        [arr[i], arr[OporaIndex]] = [arr[OporaIndex], arr[i]];
        
        OporaIndex++;
        }
    }
    
    [arr[OporaIndex], arr[end]] = [arr[end], arr[OporaIndex]] 
    return OporaIndex;
}

function QuickSort(arr, start, end) {
   
    if (start >= end) {
        return;
    }
        let index = OporaAndPart(arr, start, end);
    
    QuickSort(arr, start, index - 1);
    QuickSort(arr, index + 1, end);
}

QuickSort(mass, 0, mass.length - 1)

console.log(mass)


