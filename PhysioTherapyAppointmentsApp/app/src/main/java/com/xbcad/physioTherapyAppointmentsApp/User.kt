package com.xbcad.physioTherapyAppointmentsApp

data class User(
    var username: String,
    var password: String,
    var role: String,
    var name: String,
    var surname: String,
    var email: String,
    var phoneNumber: String,
    var medicalAid: String,
    var medicalAidNumber: String
)
