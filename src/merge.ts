export function merge(collect_1:number[],collect_2:number[],collect_3:number[]): number[] {
    const collect_2_reversed: number[] = [];
    for (let index = collect_2.length-1;index>=0;index--){
        collect_2_reversed.push(collect_2[index]);
    }

    const step1 = mergeTwoSorted(collect_1,collect_2_reversed)

    return mergeTwoSorted(step1,collect_3)
}

function mergeTwoSorted(arr1: number[],arr2:number[]): number[]{
    const result: number[] = [];
    let i = 0;
    let j = 0;

    while (i<arr1.length && j< arr2.length) {
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i<arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while (j<arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result
}