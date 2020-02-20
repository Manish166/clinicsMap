import categories from '../../data/cat.json'

var catMap=new Map()
export const createHashMap=()=>{
    categories.map(category=>{
        return catMap.set(category.cat_name, false)
    })
}