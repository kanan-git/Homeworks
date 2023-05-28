import React from "react"
import { useEffect, useState } from 'react'
import { useSelector } from "react-redux"

function UserDataComponent() {
    var setNewUser = useSelector((state) => state.userdata.userOjbect)
    const [ud, setUD] = useState(setNewUser)

    console.log(ud)

    // find a way to save user data, without react component, user data const but could be use redux features
    
    const userData = {
        user_000001: {
            id: "0",
            name: "Lorem",
            lastname: "Ipsum",
            date_of_birth: "mm.dd.yyyy",
            gender: "male",
            email: "example@gmail.com",
            password: "seriouslydifficultpasstoguess123",
    
            budget_amount_from_creditcard: "500",
    
            favorites: [],
            cart: [],
            orders: []
        },
    }








    // EXAMPLE <------------------------------------------------------ FOR REFERENCE
    // user_000001: {
    //     id: "0",
    //     name: "Lorem",
    //     lastname: "Ipsum",
    //     // nick: "loremipsum",
    //     date_of_birth: "mm.dd.yyyy",
    //     gender: "male",
    //     email: "example@gmail.com",
    //     password: "seriouslydifficultpasstoguess123",

    //     budget_amount_from_creditcard: "500",
    //     profile_img: "", // get random image from an API while register, set link here for login

    //     favorites: [],
    //     cart: [],
    //     orders: []
    // },
    // user_000002: {
    //     id: "1",
    //     name: "Qwerty",
    //     lastname: "Uiop",
    //     // nick: "qwertyuiop",
    //     date_of_birth: "mm.dd.yyyy",
    //     gender: "female",
    //     email: "example@mail.ru",
    //     password: "seriouslydifficultpasstoguess456",

    //     budget_amount_from_creditcard: "1000",
    //     profile_img: "", // get random image from an API while register, set link here for login

    //     favorites: [],
    //     cart: [],
    //     orders: []
    // },
    // user_000003: {
    //     id: "2",
    //     name: "Dede",
    //     lastname: "Qorquud",
    //     // nick: "dedeqorquudmarkq123",
    //     date_of_birth: "mm.dd.yyyy",
    //     gender: "male",
    //     email: "example@hotmail.com",
    //     password: "seriouslydifficultpasstoguess789",

    //     budget_amount_from_creditcard: "15000",
    //     profile_img: "", // get random image from an API while register, set link here for login

    //     favorites: [],
    //     cart: [],
    //     orders: []
    // }
}

export default UserDataComponent