/*
* This file was generated by a tool.
* Rerun sql-ts to regenerate this file.
*/
export interface amenityDb {
  "code": string 
}
export interface cityDb {
  "code": string 
  "countryCode": string 
  "lat": number 
  "lon": number 
}
export interface countryDb {
  "code": string 
}
export interface marinaDb {
  "id": number 
  "name": string 
  "cityCode": string 
  "countryCode": string 
  "lat": number 
  "lon": number 
  "photoId": number | null 
}
export interface marinaAndAmenityDb {
  "marinaId": number 
  "amenityCode": string 
}
export interface photoDb {
  "id": number 
  "url": string 
}
