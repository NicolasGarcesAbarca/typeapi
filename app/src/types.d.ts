export type Weather='sunny'|'rainy'|'cloudy'|'snowy'
export type Mood='happy'|'sad'|'angry'|'tired'
export type Visibility='great'|'good'|'ok'|'poor'

export interface DiaryEntry{
    id:number,
    date:string,
    weather:Weather,
    mood:Mood,
    visibility:Visibility,
    comment:string
}