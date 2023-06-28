import type { StyleValue } from "@vue/runtime-dom"

export const useGrid = () => {
    function getStyles(x: number, y:number): StyleValue
    function getStyles(x: number, y:number, width:number, height:number): StyleValue
    function getStyles(x: number, y:number, width?:number, height?:number): StyleValue {
        const w = width ? width : 1
        const h = height ? height : 1
        return {
            gridColumn: `${x}/span ${w}`,
            gridRow: `${y}/span ${h}`
        }
    }
    return { getStyles }
}