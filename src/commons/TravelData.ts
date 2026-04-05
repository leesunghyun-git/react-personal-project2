export interface TravelListDTO {
    title:string
    image1:string
    contentid:number
    address:string
    contenttype:number
    hit:number
}
export interface TravelDetailDTO {
    title:string
    image1:string
    x:number
    y:number
    contentid:number
    address:string
    contenttype:string
    hit:number
    msg:string
}
export interface AttractionDTO extends TravelDetailDTO{
    infocenter:string
    restdate:string
    usetime:string
    parking:string
}
export interface CultureDTO extends TravelDetailDTO {
    usefee:string
    spendtime:string
    parkingfee:string
    discountinfo:string
    infocenter:string
    usetime:string
    restdate:string
    parking:string
}
export interface FestivalDTO extends TravelDetailDTO {
    eventstartdate:string
    eventenddate:string
    agelimit:string
    playtime:string
    eventplace:string
    evenethomepage:string
    usetime:string
    spendtime:string
}
export interface FoodStoreDTO extends TravelDetailDTO {
    firstmenu:string
    treatmenu:string
    infocenter:string
    parking:string
    opendate:string
    opentime:string
    restdate:string
}
export interface ShoppingDTO extends TravelDetailDTO {
    saleitem:string
    saleitemcost:string
    fairday:string
    infocenter:string
    restdate:string
    parking:string
    opentime:string
}
export interface StayDTO extends TravelDetailDTO {
    roomtype:string
    checkintime:string
    checkouttime:string
    chkcooking:string
    subfacility:string
    foodplace:string
    reservationurl:string
    infocenter:string
    parking:string
}
export interface HomeData {
    sList:TravelListDTO[]
    bList:TravelListDTO[]
    gList:TravelListDTO[]
    jList:TravelListDTO[]
}

export interface TravelListData {
    list:TravelListDTO[]
    totalPage:number
    startPage:number
    endPage:number
}