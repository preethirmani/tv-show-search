export interface IShowInfoData {
  id : number,
  language : string,
  genres : [
    string, string, string
  ],
  name: string,
  rating:{
    average: number
  },
  premiered : string,
  ended : string,
  status : string,
  image : {
    original: string
  },
  summary : string

}
