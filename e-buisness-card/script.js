document.addEventListener("DOMContentLoaded", () => {
  var saveBtn = document.getElementById("add-contact");
  saveBtn.addEventListener("click", function () {
    // Get the contact information from the website
    var contact = {
      name: "Shreyansh Mogari",
      phone: "+917999650832",
      email: "shreyansh@pandaadvertising.in",
      company: "Panda Advertising",
    };
    // create a vcard file
    var vcard =
      "BEGIN:VCARD\nVERSION:4.0\nFN:" +
      contact.name +
      "\nTEL:" +
      contact.phone +
      "\nORG:" +
      contact.company +
      "\nEMAIL:" +
      contact.email +
      "\nPHOTO;MEDIATYPE#image:" +
      "https://pandaadvertising.in/assets/images/shreyansh-mogari-dp.jpg-large-preserve-ratio" +
      "TITLE:Shrimp Man" +
      "\nEND:VCARD";

    vcard = `BEGIN:VCARD
    VERSION:3.0
    FN:Shreyansh Mogari
    UID:beae6fed-86f0-4313-9522-1e53d8be2247
    EMAIL;TYPE=WORK:shreyansh@pandaadvertising.in
    TEL;TYPE=CELL:+91 79996 50832
    ORG:Panda Advertising 
    TITLE:Digital Marketing Head
    URL:https://hihello.me
    URL;TYPE=WHATSAPP:https://api.whatsapp.com/send?phone=+917999650832
    URL;TYPE=WEBSITE:https://www.pandaadvertising.in
    URL;TYPE=CALENDLY:https://calendly.com/shreyanshmogari
    URL;TYPE=INSTAGRAM:https://www.instagram.com/pandaadvertising.in
    URL;TYPE=FACEBOOK:https://facebook.com/pandaadvertising
    URL;TYPE=LINKEDIN:https://linkedin.com/in/shreyansh-mogari
    NOTE:Created with hihello.me
    PHOTO;TYPE=JPEG;ENCODING=B:/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQY
    GBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKC
    goKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAEA
    AQADASIAAhEBAxEB/8QAHAAAAQUBAQEAAAAAAAAAAAAABgIDBAUHAQAI/8QASBAAAgEDAgMGAw
    QGBwYFBQAAAQIDAAQRBSEGEjETIkFRYXEHFIEykaGxFSNCUsHRFkRicoKS8CQzNENjgzWTouHx
    FyVTVHP/xAAbAQACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADoRAAEDAgQCBgkDBAIDAAAAAA
    EAAgMEEQUSITFBUQYTImFxoRQVIzKBkbHB0UKS4RYzQ1IkRHKi8P/aAAwDAQACEQMRAD8Atofh
    ppyj9Ze3r+ygfwqdD8OtEU99LxyP3psVVy311LkyXMxz/bNMGd896RifUk18/djNY7/IV9AGCz
    H3pfJFUPBnDduwL2cJ/wD6zZ/jU+Cz4csHzFHpsTDxVQx/KgYSOfGvA770pJW1MnvyE/EqYwIH
    35CVof6d0uMYWckDwjiNR5OKLBM9nFcSH6KKBQx8zSgTmkzc7ojcCpm73PxRbLxaN+ysl9Odya
    jScVXjjEaQR+yZodFdG1QLQmG4ZSs2YFeDiLUif+Ix6BRipVrxPfRsO1Mco8iMfiKrNI0q41Nz
    2Q5IlOGlboPQeZosttF07TYe2uOVgvWWdgFHt4V407SLuaElWPooOw5oJ5AJ6z4gsb6Jor2IKr
    DDK45lNCnGXAdhJbG+0WZIXbvCEnKP/dPh+VXl1xhoFqTG1ws3gRFHkGqjT+NNOt9SMMLzCwfp
    2i/7s+XtTdDTYlQydbSMcBuQR2T8CqmOO7i+Fpb3c/JZdJA9vK0cylHU7g11txWycT2eka1bQ3
    IWOZoMGRB3XaM9ceo60M6/8PJ4IPmNDlN3DjmETY58eh6Gtdh/SilqA1s/s3HSx2v4/lNCdotn
    0vzWf57pz1pojbNOTxyQStHMrI6nBVhgimgd+mc1pgbo5TUmeU1o9lOi2Nv2YABjX6nG9Z0460
    d2qL8nbqGJwgG1UXSAXiZ4qUVusF+/7KS0jMSMH769HMsY725qOyEOeYErn6UtWjOCpQj6VlhA
    93uhPOexu5SzOSThWPucVwytthVFecsXXlVVGPLFdkUEd9j02AFeDCNwoktXOaZznYjyJrqxsc
    huTB3rqKg3DeG4pxRt09hUgoOK4I423dlHsKfhSMHbJx0wtIIYYwFUeApRkJZe8o9qM0XS7rqV
    lcfYb76cjKkgFMepOajBsjY0/GrP4sfYV1BcpdkQNW0w5IxcqOnvWidKzaAPFfWDupAFzGN/U1
    pJGCayXSUe0jPd91R12ki9Xq5mujpWZSW6wvNJYZpAO1OruBW32X1O1l5KWKTXs1xcKUMUoHek
    DelVFRKcUZI8qlWVsbu9gtlPKZXCk+Q8aix9atOH3Eeu2rH+0PripRNDpGtPNLVDyyNzhuAUc6
    hcWnDuhPcSIFghUKkY/aPgPrWJa9xBe67ePLdTEpnuRKcKo8gK0b40u66HpoUnsmmYtjz5dv41
    j0blF5vHOK2nRymjmiNY4XcSQO4A208barM0EIe3rXakqWmfHpSyMg4GciosExJJNSkYISc+Ga
    0pFk/oN1rXw5kh1rQI476MSNDmHJ693pv7EU9a6rLouoS2Mp7S1jcqM7lRSvhfYPY8ORTTjk7Z
    mn32wp6fgKA+MONNGsNXuHuLtWZ5GwsQLn8K+XYrSGoxKSGJuZpANt7G5+Sr6YxyPkbMex38D3
    I2494Zt9e019S09R89GnN3f+ao8D646GsbUDmGNh61cQ/G6DSrYw2em3Nwd+UTHk9umTWWX2vX
    +r6lcTBRaJI5kCBiyrk9MDrWv6N01fTRugqh2BbKTvbkfDgq04jHSl0YOYDZG908UI/WOq+5q3
    uuKbS30qKKGdBLjG6k7+g8ayP5nsmJmu2LZ3wmB+NWVsunzRsSk0jgZJSTvfdV9UUTKgN6zglJ
    MblvdjQEWJrfLKZDcz3EvXvNhV+nQVY6from2YoM+tZuzWa80lrLJMF3aNnww+njVxpM8Fyha0
    lIkHVSAaajjEYszRUcz3SnNISVoKazNbRc6yrJFn7D7j7+oqdY8RWl2WjaILy+Cvnf0z1oGWbt
    42iPIJeX7K7pIP4Gk2ixyOAxK5IJIGSD0/OhPpopT22i6NDWVEIsx5stUt5IpQDGV5c4yB+dSk
    Kr3fIb79Kz6ymvLWQq0hKjqOtHuhXMGpWzQSAm7VS6H7JYAdPWqarwVpBdAbdyv6THjdsdQ3fS
    68/Mygpy8ufClHbBHj5UlY5GIwhGPWpscLlduzB9TWc2WkdZIjZgu2c+1SYnYDvK+SfA0pLaRu
    rDHoKeFryjDOfvr1wgOsmrl2zasVwFnjO5/tCtJfqfes3vAkVurphisiHHXPeFaOeprK9Jx/aP
    /l9lSV/9z4LhrorhrhrKJC6wZadXYUlAAaX1Nbgr6qV4nauE56V5vKvL1ry4lKTjBpea4RkbV7
    BqKinkHSnkLJIkkZw6EMDUeN/A08hqFy03QXi+hRtq8EfFXA7wupW4XvRlRz8rr06ee4rFbuwn
    tpDDNbypKDuCprRtH1WfTLgyW5BU7Mh6NV3NxQs0qTmzVblByh1bqPIjxFWuF4zLhxdGGZmOJO
    9rE78NiqH0SWnc5sTbtOo12WSWej310wW1s7iVj+7GfzqDxFqdhwlIF1aWG4v13+QjcMQf+oeg
    9tzWgfEn4q/0e4ec21qvz9wDHAC2QDjdj7V8oM0l5czTTvzyMS7sx3JNbLDaybEGmRzcrfG5Kp
    MRrp4T1RFijfWfiXxPrs8gN5NDbN3fl4WKxgeVVNvO3aLLMEXzA/1mh6SQgBY15F8/E09HIViA
    iHPM2xc/lVvDDHF7jbLPOJduVfm9RpT8sCud2Zice9dFw8v6uJ2QfvdAarbCznKntmCKRluY9B
    VzbxWtpEHuHUqOnhzew6k0fMgOtwUI2l8OdsWskfU8zGoeYDPyxF7S5O6uWyjH0PhVu+rfrkW3
    iVd9sjcCpw0/Tr1BJeK7gnmJQCP/AOa6Hc1Am26H3S6vL1Clu36Q6EDYHw52Pl+dX+k6QtpM3z
    U0vbN0YIBGD6DIJop0qGyeAxRrFEv/AEwSQB05mNPXfD+jTMk183IMYD4bC70ZmQjUoD5CDaxQ
    9dymC5to3RRJ2gAmjOxOx+4mrRzySOyDGMvgetPazpbdjByS2kttC6vG0BOceRz123zXb9ez0y
    S4JIB2HqKBPZrgAmIDmF06urdlb5YntHJVVB8Dtn/XnV9wzqcr3lvFE3NlgSQNyoPh91ZyZGLZ
    jPfIwWP7I8q0f4d6cIYGupAwkcBUztyqPH3NAmeKeMylOxwmpe2Lh+EeXU6i6ZhCeVgGIHQHG9
    eS6JG0e3tTKsSebsyw9TTyZDZ7NFz4msPIQ55dbdbZoytDeSfS4cDp+NdWUse8ev1pPaPjYp7A
    UqN5AVydj4AYrgHJDcvXrH5KQg55SD0x4itIU5A9QKze9bNnNtsB1zWiQnmhjPmoP4VmOlDexE
    e932VPiHvBOE14Vyuiseq66wpATXSDmuJtsacPStuvqpKbG9OAU2DhqfrhXCuV4VxqSCfGuWXE
    rGDtT6ZxTKfaFSVH3VFyg5eG3SvO4WMsx5VUZJPlSghNUvGd62mcN39wqF3EZVR6nYfnUoYzLI
    1g4myBJIGNLjw1WE/EDX5de12WUvzW0RMcA8Auev1oegZlGATk9ADXp9jy56dW8zSApwGAOPOv
    rEELYYxGwWAXy6oldNK6R+5TsgCgAEFj1OafhlWMKc7iocpBOVBAPhSV3wKYBQCVdW3a3Jy3fP
    UKD+dWV5YSmFZJ2CuwwD1J/wDaq/S7n5dgyp1PU0T2V20zKIU/Wt1kbfHtUHvy6rrYXPNmhDRt
    prWTlbPaEZweo9/KlWE15c3LfalVNyDuKLbnRpJYkiiBkuLk8ik7kUb6JwjBplikSKGkIy7Y+0
    aUkrmsbdONoXE6rNYLjUskIGjjVTheXG/QfnV7pE+rXitBdrI8bgJzEYwfPPtWpaboUEq8hiRg
    dsMM0WaVwrbjcQIo/Cl/WfJqJ6vaN1jUWlXVrYsHjJj5s7nOBjFVusTNfrFbwHKRfaHTevpg8N
    W8tuY2jGCN9qwj4m8K3HDOu9vbLm3m74wPHypqkmMz+2LHglauERi7FWcOcP8Ab3UZuhmJTzco
    rTbe3FpMY0AAdMgeQrOuH9RkuECM/Kep5e7mtI09SvZSuAp7PBJOeb196PXQ/wDHe53IpfDapx
    q2R9/xT7LnBLEkV7myAO9ivSqX3DsM7jPlXeU7YJJrDtFt1vyRZODLfZVqeihLbMh/xGkRq4XZ
    Wz70/F2gBygb61MILly7tnFpOTyhOQ7A1oFk3NZW7ecSn8BQHcs4spgQg7hz59KOdK30y0P/AE
    U/Ks10oHsIz3n6KnxDcKUKVXMV2sWVWrCc13n26002cbUkZNbey+sAXTjOM11XJ6E0lEz1p6OI
    A9a4bBeNgvKdsmrXRdFutVzJEBHbL9qaTZfp51A+Xab9XErM5BOEGTgddqsPitqb2Wm6TpdhIk
    VrLFzusTb4GMA48DufWnsOovTJAxVddVOiysi953kpkqcL6cxW91wSSDqsK5/LNKiv+DnwP0lc
    rnxKH+VZCvKD4k1IjO+MitQei9MRq51/h+Cq8tldq6Q+X4Wz2+m6Nf8A/hmt27seiyYBrJPjj8
    3pUsOlZB54+2bs2+2vQV22BHjjxyKBuLor9tTl1K7btIoU5IkY7D1OTUKTo+2lqBMH5gOBHHxH
    4VdXSVDIXNz3BWfiCW4kZEQMV3J8hTJyhIPeUeRqwspI1hbnikM+DuNtqgxoJpuRVwxOwrTBZA
    6prII6E/WlxLlqnT6dJEgZ15c7KuNzT+naY8zhsYFeLgBclGZTuLrJ3SrMzyIACTWhaDpjlQTG
    FY71F4a0OTZhGB/arSNL0flWNupA3xVTVVNzlCuIYMg1UfRtN7KZJCN16GimODmwMEUu1tQpYA
    ZA8asLaHMmRkg0g510bKpOk2YVsnNFdjsAKg2NuOUAgAnG1W8MPKM4orG2QJHKwt8NgY96EfjB
    o8eocMdpyZkt2DA48KKrYkMK7xNafOaBcoBk8hOKsKd+uirKlull8q/o0wIbiIMN/DpmtP4dhZ
    dJjuLq3EpIKqkq538P5/SqSGx+YthCuFVZsnO2cdRn8aIprh2Ij7ZVijJVQPKm8UrhTxZG+8Ql
    MFw51VN1rhZrT8+5NJbXDHddh5ipkcZA70iqfWoqOpP+8LE10rzHO5+tYzUrduKmhU5RzT5Hoa
    UDAMgNk+9RFTqVXPL19K8HY/ZAHpg1NrboJKlTYktZkjXcoRny2o00SUDQ7BnP/ITJ+lAiYKN3
    WJPXfFFHDzGXT7HmzgRjlHt41U49SddTNubBpv5Krrm5iERowbcbjAP31KW3fBbGQDjaq7TnaV
    3VuWIrnCk77Va205igYv8AabZQfL1rJU1HEJS2ouAL6qrkBboFgfJ6UnkHlVzrek/o4wzQTLda
    fcLzQTr0YeR9arQmN6vLr6fFOyVgew3BTPKB4V0HenK5jNeuiXRN8PHVdauwADctbnsc+edx+V
    Y1fz3D6jdG8Ldv2jcwI3Bz0rRbe4ktLqG4tnKTxNzKwqdxBw3Y8asb7SpIrLWyMzW7nCTHzU+d
    aHA8SipZMs2gItflqd/G/kqOtY+GYz/pIHwt9lk3OcbCin4b6HBxLrF3BeytHBbRq5RDhnycD2
    Hn71Tavo+oaNO0OqWc0DjxZDg+x6Gm9EvbrStQW+sJTHKByk9Qw8iPEVt5iZoT1DtSNCl5M0kZ
    6s6rdk4C4e7MpHFOuM94TE4/+KBPiL8L4IrCTUtPla5t4u9JG+OdV8weho24Q4r+a4cmu5rFUW
    3R2fklyzYPUAj+NC3E/wAQY7zSrjTtNtnijnyskspGcHqAB0rC0JxoVxYHZmNIDr2tbj33VRHH
    O+TIdRfW6+a+MtFGmfLzozEylg2+cHqBn2qZwDw5+lo7m6MhRojyKMDcmiPj2AzcNy8o3SRW6V
    O+EkKrot2QP+cM/dW3qXmOMkJWro2xVVgNLXUW/wCHVVts85GCxJZj9fAe1XGi8McoQyKMirLV
    9Qt7QlFQzXA6IBsPc1Dh4n7AD5gKD4jIFVZM0g7KIHsj3RdpWlx242XeimwgUJkYAx08qALXjG
    xcjmlRCOoZwDRBp/FGnkDN7brkdDIv86SkikbuEdszHjQopMKxqMYqTZImc8258fKqC74h02SE
    EXtrzZGcSg7UzBxFp8TsTfQE/wB/rXGMdvZeJHNadp/Zso9KsigKjG1ZtZ8Z6ZHjmu4QPRxUqT
    4h6erqkEqyb4zzgU1HnOhCRlIad1oMUZ59qs4kDxlHxgjBoH0bilbmRMcjg+Ebhj+FHFjPHcIr
    xHr1HiKdhAukZ3EhYbqdqlhxHqdmu6pcORkeBFMosSZ5XX671d8Y2xTizVnCjLS5y3kQKpI4WL
    HdOvgKSxl2aYDkArro+zLTOJ4uK8pCtsynfwqXFzGQFZPCkJC3OOgHny4qSiMjDBUVVWVs8hPx
    gBADkkfSkt3icYxXcDJPNzYrwUYyRmpNCAV1HAQjK/QUX8MKr6DZZXYIQB5bmhJBGSMg49BRRw
    czPw7aFuveH3MapekoIogR/sPoVVV52V9ZWUclxNKUQPyYD43GK8MkV1HZVKqSA3WloKx73snY
    xrQbjc8+XyVYSb3Ky1bR9B4Hh0fUJkkvmmMwjVubsQTnGf8AXWqIk4pxn5mJbJY+J3pHNWmqZj
    PK6Ui1zdfSKOm9GjyXuSbppid9q4G86cc901xRtigpy6aJy1OQuVcbkeRHhSOT1royDtj615SN
    iLIig168+Va1uTHeWzDBjuF5wPaoc2naFqUCQX1itjN/+3aDH+ZOhqCuRjFLDEnc0SCqlpjeJx
    Hgq19FEdWix7tFpXDnD+lW2gfL2kq3UTxGNpB+1kHO3hWNzcE8RQzMBpM7KDsRggj76IYpHjBC
    uyjOdjipUWo3ajAupwPLnNWNDjEtHI+RouX2JvzVfHh8sDnFj735j8FCt38O9b1DTLqO7t47SN
    o23lkAJOMgACgPgS7/AEZpt3p/KRqTTqEgk7p3X7R/sjBJPpWq8R38iaLeSyyzMqR5YhzzAZGS
    PYb1l3D+ii81We8aYTW8tu/Z4691wvPn+1itPh+IPxBjnTWAvwVVijJGPa52p22Uy9sbeOdnvZ
    PmMHmdmOE+g6Cq67m0FgQs1tbsOhCjB/Cu8Q2U9zD2HMYogehGPv8ASqSThSSXTZYwiS3JbnWY
    k5b0PlWpMMZiDndkjQW4qnkDxo1t08txB2zCCa2nhHQ8ikflV1p15bh0DxIh8XjABH06GonDvB
    t3FazvqkUIXsuWIq4DA+ByPAfxpqDSLiCbs3DFg3dI6EUB80EryGAEAfPvSTY5QOIJKObDUGSQ
    200iscZVgNmUjIP3VY6q7WEao55rhkDnbZMjIHvjB+tR+GdPW6ukK2U90IEWF3VlUZA3AyRzEZ
    xtRbxVpcF/B8xbAhZYwQcYIIGCCPAggjFU7OrbN2horRznuYOaCrbU5IkUvIDggbgYq50O7su3
    7S4uIC5O67Gg9tHl+cCXEgEfgpOCal8O8K3v6ViaWKOWz7Qc6l9yPTbY09JFHICS6xVa4vY/M1
    t1r+nQaFqDqj21q0hGQVQK30IwaJ9Hlbh+9tYpJ3m0u6fsEeU5aCXGVUt4q2MDPQ0Fx8IKJBcw
    XTWqBgyW6nmC+uTvRHr1jJf8FawrSyI8UHbxyIcFXQhgR6jFKQxhjgWuuD5Ls7iWm4sVUcYywz
    6/qEsbsYzMFDBdmIUZx54O1UcaLknmkHrii7VuG4rLTorZL6WZ7S3VozNjnmBJLEkeNDgsRjvD
    Le9VmJk9eSe5aHCC0UoA77/NMkRqNy7H12paGE9EPN/ep0Wac2OX7hTgtI+UjkYn2pEWTziE2p
    xlVjBJ3xkUoMxTIiGPHepCQL1KjI68zUtI0XwT2FFCCSo0XM2CAN6JOCWLaBGD+zJIv/q/96pw
    RzYVuUeQq64JRRoeA5YiaTmGPsnPSqnpEzPQHucPuquv2CIEWnAMUldqc+2CBWLp4hbvVWSsAt
    7+2uP9zcROfIPvT7ZHnTUtnBN/vYIn/vIK9BpkEUivCjxlT0R2APuM1pCITtcef4X0/NK3ex8v
    ynOY4rqsaf7ByM8hI9BShbyH7MMh/wAJoNijGRqjscmugZqUthdP9m2m/wAhp6PR9Qb7NncH/t
    muZTyUDNGN3BREO1LB3qfFoOqnOLC4/wAlSE4b1Vv6jMP8NRyHkguqYRu8fMKsB26UrANXC8Ma
    vj/g3HuRTq8L6r422P8AEK9lKCayAfrHzCFOIIGm0S/jX9qFh+FDvCsK2+n6YqbhrBsHzxIpP5
    1pOocM6j+jrsPGigwvklx+6aznh0n+j+jzKpc26lJEHVkIKsB64wfcCtRgRtE5p5/ZUOLTMlLc
    hBtyV5Dp9vdEiaNWB65FOf0PgB7S2llhHXuNtU20RbfDcyyRybpKv2WHmP5eFXlrdxFBkirN8s
    rSW3NkqA1zQRqh2LQFi3Z3lx0Lkk1U6+FsGjigg57uYMI3PSMjqx9ADn6Y8aLdd1e10+Ll3kuG
    HchTd2+ngPU7UC6ZczX95cXNxhnZwm3RcfsKfIdfU7+VSgzHtuQnAHstRlwVZAQQQoGVV2Bxvj
    zPrVtr7XthqXYJBHMLjlZec8qs/Q7+BIx9R61acIW/Zoq4XJNFGvaXDeWBikRWONs1ON1iXnZC
    n0swboIvOH7K9TIQbjO4qPa8Nx28g5HkUeQY0+utQ2t81jdzKkydJJTjm9GPgf7XQ+OD1tnuRE
    oaVSoO+T4+3nUZDJFxuCuNIdpxUvT7FQioQOXyO9WXErLZ8Gatjq9s0SjzZsKB95qtsdSidgFx
    n3qQ0g4kv7fT4BzWNpKtxeSj7LOhykIPiebBbyAHnXqeR3WjklKtvZsk8dc1vMoQjmFpHFk/3z
    n8qDBLN/8AkCjPjmif4gyCbVBG2G7OFM7+Jyc/jQikKrvkH0JoWI6z/AK4wgD0YHvKkCRwd5j7
    CuPzu3Vj7UwBytkY28jUlQ/MpXlPpSzW8U67QrqJy9S5pYZebZDn1p+JMZLFQx6kV4omdl39hR
    WoDjdJhcZyH5fYZxRFwVgaZcjOcXUm/wB1UsKDOSjZ8N6uuCD/ALNqAOwF235CkMbjzULvEfVV
    VfsERLvsRTo2GwJr22d6ejGelZOmprmyqyV85f8A1L18j/h9MQeloKXF8RuIG/bsIz5rarRrH8
    JNPAIl1O7f2jUU6nwj0gHe+vT/AJf5V9D9MwscB8ir7roeSB2+IPERG1/Cv9yBB/Cm/wCn/Emf
    /Ezj0RR/CtBHwn0TP/E3x/xL/Kno/hVoIO8l83vIP5VH1lhY/SP2r3XQcvJZw3HXEUgwdVnB8O
    XA/hUeXjDX2yG1i9z6PitXj+GPDqdY7tveY/yqQnw54dX+qTt7zNUfW+Gt2Z/6hdFRAP0+QWLt
    xNrj9dVvT/3TSP05q8gPPqF2feVv51uI+H/Dq/1Bj7yt/OnBwRw2owdOj+sjfzrnr+gG0Z/aF4
    1cP+vkFg/6Rv2bLXdyf+4386WLq8bc3E5/xmt2Xg7htDkadb7ebk/xpf8ARzhuP+o2I92/maie
    ktIPdjd8h+Vw10PL6LApnungkAeVmKkbsfKmfh3MZNEkgkYkw3BU59cGvoObSuHhE6rDpkbMpA
    fK5U469a+aOGHGj8Q6tpzyhlFweV/A4JGfrTFPiLMRY7Iwty80q+rZI4BqLmsLwXbtZajNamRu
    ZlUAqfdTsffrVkNF1CVf12vzqh6i3hjjP3gZqnmvyhEivs2+RT91xAkNqWdsEjbfcmpe0OgTLc
    trp67sLXTbd4beQtNLs0sjczHPiSdzU/m0ywtreGJ4gkO5IYEk+JNAWuyXN9pwkinZJ2PMeU7k
    eVBF1b3cEnzDTyK46kMRmmo6XONXKDpcuoC+o+FNZiyHDAgjY+lHMd5HMiMzjDDY18rcH8VtaY
    a9kaNBgbKSG+7pR/NeX/EkSRQXktpabcvYvhj6kj8qTmp3seBewXHOZIL8Ve/F/RYYza6zbEh8
    9jMB0YdQaoeF442UC31K9t1bcrFL3f8AKciryTS5V0FLO4upLlVBwZnyc1lXz02gay1u5PIGyv
    tTMAdIwtB1C4Sxos/ULbIdGSUBZ9SvbiNuqFwgPvygGjfh2KO1iiht0CQoMBFAAHsKzPhnVvmo
    UdDzKR4UfaffLApJzsvN9KrHmQzNBOxUJmNEZyoc4xbttdvXUcwEix7nGMJVEkTAnKKPrVxdXM
    VzZylyonluWlJPgAMD/XpUCOLLbSKfpRq43nI8Pon8JJFI34/VNrH3goQZ9M1JSMx/sfdTgTAO
    ZVHtTiRht+1PtigNF0y9y9yvtkcoroUk5JwKcVUUnmbf1pa9mBnO3TpRmMQHOSVi8Qck+tL0DV
    YtM+fjlVm5rkkcv90UtI18M49qTo+hHVbq/wATLEIphnIyTlf/AGolRBDLA5k/u6fVKv6ovb15
    7P8ABVzFxLAxwIpfqRV9o1+t+r8iMAuOtVVrwjbxkdpcysfRQKJ9G0uGyRli5uUnJLHc0jTYbR
    k2pwb/AB+6SrH0WUiG918tnj3ic7HWLke3L/KkNxrxK3XWrz/PiqQadqLEEWVx/wCWadGk6mR/
    wkn3AfnWly0Ldw3yXzkQ4m42aHn9ysH4u4ic97Wr/wCkpFJPFOvNnOr3/wD57VDGi6of6swHqy
    g/dmlJoupn7UAx/fUfxrhloBxZ5Kfq/FnbRyfJyffiLWj11a+P/fb+dNtreqsMNqV6fedv50ka
    JqPjEoH99f506ugX43BhPp2gzXvSaBv6meS8MHxZ+0Mnycozahet9q7uD7yMf4021zO32pZD7u
    asP0FesQOWNfUyCvHh/UAe72J8x2gqXp9EP8jfmFD1Fip3p3/tP4Vf20pG8j/ea4WYj7Rq0Th7
    UD+zF6jtBT8fDl6ww5hXHjz/AMq76yo2/wCRvzCj6gxQ/wDXf+0qj3xQvcGS31GcjZyuR61pcf
    DVwRhp7ceoJ/lQxx1w3NYWgvBNHIV2KgEHHiaH6xpJiI2PBJV1g2DYnSTF8sJDbakqNp9+LqEK
    Dll8DT2twyW1ms7fYU70JaLdCC551OA2KP7+aO/0CaNsHmX7jQ5GdXIOS2ETs7COKC9O1We6u3
    hTAGCBk4z61YT2AlXkuLmJcjfvZINJPCltc20UsuVYb8y7EVZaVwUXmD2V8xY7dnKOcUwXM3Bs
    uwwyO0tf4q00fQ9EubFbdr2NZjndtqMOHLCx06JI4713x+0KjafwreQtA0tnZuYyOYgYJ8M0b6
    RoF3cCb5kWdtbvyhTGhMm2PE7eHWkZS46DUIzmkbssqzUntUtDKdUhQgYxI3L+dZDqZOo38qhu
    0cN3GA6j0rbLjgXQrV2kS0E0xJYyTHnJJ8d6G73Q4I9cjZUwAMYUbVynnYwmyBJA55BTnw/0qe
    0twJevUHyon1bUDEwiVuuzEUtJo7WFcbYGPeh67ukluG7cMo+0x64XxoNK01E+chCrpBHHlBV7
    HETbQjAB5ckDzNOpaORklhVTbcaaJPKI0uCh6ZkQgffRFFcCVFaMdop3DLuDS9RHKJC57SLq5p
    ZWCJscbgbBMrZscd5qejsSB9vepMZbO8f3073s7KK4y6895TUdqe6S/Typ1LUAnfr6U7H2gzsK
    Xh/EjFMAFKl5SFgVfDrU3hEBdQ1cDpzxn68tRgu/ifapvCqAatqiqpAIjb3ODXZ43Phc0b6fUJ
    Gsd2R4ongjLuKslUKoA6Cm7ePkQedO05R0wp47cTuqvdfOcmiamneFlOV9Fz+VQ5YZYXxNE6N5
    MuDVxwrw/G4QX82oQXLMSkkEoMOMZGWXOD703xPfzabKIbDU5dQAJR4LqHtAvqrYrJuwdrn9XC
    +58NPmF9CZiz+syObf5j8qq5gOoxSX9qvdFhbVY4RfaQ9ojnkF3G/ImcdSr/wqsvrVIrmWOOUO
    qMVDr0b1quqaCWndlerGnrGTkgaEKEFJ6CpVlp1xeOywxE8o5mJOAo8yTsBQTxpqlzb3cNhaSS
    RkKHcrsXJ6Cpek201rGJNVuppYHwsgDYCE9MjxGdvTOav8N6KyVsYkL7X7uCz2L9LIsPeYw25G
    nx8Ea3emCyZku72xikQZMb3C8w+lSV4f1Dk50gEindSjBucea+Y9RQpf6tG0wVdLF1IoC80zFj
    geGfSn/wCmMOh2Si7zbBW5o4IJebLeGFORVpU9BXMjzRyC/es/B0+ExDchue7+bq15HSRlaNgy
    nBBXoa7kk8vKM+VDmn8WXGqQ3tzfXnyeml+1lgiARpCem/XBx4bZzXYeKblwZLYRWViPsjAG3n
    nqaHQdB5J+1NLlb3bqeJ9PW0pyQw5neOn0RE8i2yGScrGgGSW2ArKfiZx5b3cD6bo6K+Th7k+O
    PBfT1qNx5xrcaxmytJmNqPtsOsh/lWYXQeR8Yxv41Y0/Rmko5w9ri63Pa/wQv6jrKyntKwMJ4C
    97d6kR3UkYGTuvr1o44X1ITwKjNlguSCaz/sMRMSxyhGBipGm3jW04bPQe2/lVpLCJBolIp3RG
    5W6WCrPbKVHdYYqruri40y45lViFOVI64pXAmq29/apE5Clug9aNV0q1vH/W9R5GqgnqnEOCuY
    n52hzSqO043umtwstjK5PRg/THnRtwtrlzdhGMLrnbc5xXbDRNMjjQHxO526UW6fplnb2ubcex
    oE0jSLAIxledHG688jSbndsbmqHVmjiJlkwuPGiCTsre2eSRveso4y135i/kt4C2I9zj9r0pen
    gMz8rUrU1LYWX4qbfauJrpYUbEYxv4Gh/iS/Rh8rFJJA82eSX9zyH8xTmk2cl5HNJtyxIZCcZ9
    hQxfXYvRbtPkMTsR4VqsOomsGYcFkcQq3PdYndDsVxcWd66Tk8wbDAmjrh3ie/0vl+Wl5oT1R9
    1oR15FacSDBYd1vceNS9Ny9uuScDYYqzdEyQWeLhLMqXtF2GxW36HxrY3iot23y8pG/itGFtcQ
    XKB7eVJVPQq2a+c441BGBvV5o+oT2U2YJZIuXxRyB91Vs2Axu1iNk5H0lljOWYZu/Yre0QNuN8
    eFdaDO/wCFZvpfGmpcgjMsUjYwDIgz+FXFnxTdvNy3LIq4JPMgA++kDgtS06AFPf1JRkXcSPgj
    OOMnHKKtuF7Qpql9KxyCkY/Oqrh2f9LW8bIqrcMnaiMH/lno2fXf7qIeH8rdXakYOFyD9aC2J0
    bi14TL6mOojDozoVeV6vV6iIK+WdL4l0Gdua11O7sJD+xNGdj/AHkP8KNbLiCK6SK20fU7Cabs
    /wBZPd3Dg83jyjAFZXN8LNXiu3Fvd2TIGPK3Owz+FXmk/DHXpFUvc2IGeuWP8KzkUGHsOaN9vH
    VaySu9IAzuvZHHEEN7cywcvb3RWMCR1BKFv7IJJxVWNN1A/wBTm/yGnbT4a6kiKJNUtk9ualaj
    wE9hp11dz6zCUt4mlK778oJx1pV2H08r79dqe5HjxcQMDBbRZrxQFXixxIOVrZVR/RgOn0zT9t
    qcL2DpIOZGyGB3yPI0PWyCSPtbiUB3yzDqcmm53tkU8rnavoFA30OFsbeAXzbFHenVLpH8TwTe
    ta3dwBo4ZCw8GJ3x60N2hkuZw8jNJK5A5jUvU5VuDyx7nGM4r2loLaWNmGyb7+NEe90mhKPDHH
    AzM0WKVxTqGdVtLFM/K2EXLJjxJ6g/hVZe61PqzCMExW6jZR41XXbvPDeTgnnuJTk+lIj/AFMU
    LJ54b2qbnHLlGyjDTszBzhqPulTKebuFgRt1qsupMyFASzYySTVzdYWBn8MVRQIXeRz0oFiRcp
    5tgbBenJW1xk7n+FTXsTe6fBcW3Lz8uJFzjJHjUO8XEOPJv4VP4auQO0t28TzL/Ghm7W5gmGhr
    n5HJ3Q9Vk0+4jQlkI2I8q0fS+MJxGvI4YqQBk7Y9aBL+yimPMRhsfaFVyxz2z4VmZc+FcMcc2p
    Gq4RLB7p0W1rxirlBzYA8QcVfWvGjCBVD/AKs43J8cVgFvczggFmAHgau7R7uZuVSzZwAAM9KA
    +ijso+ly7LV9e41MytBGxL8oJIOfuqj0i0u9cvEjtcuA3elIICZ8x4mkcN8HS6nIj3oaNf3V6n
    6+Fa3p1nYcN6O7AJFDAhdj5ADJPvSj544B1cIuVJlLLOesmNgqLWHttDs00m3OZzC1xMfE4G38
    ax64kK2dpMmQUYg/jRDY64+t6zrmqSgjtImEYP7KDZR92Pvqq4hiFvpdsnjnNailhMNO1rt9z4
    lZaqkElW622gHgFC1pQ4jnHSVQT71L0UA2q0xcDtNIjPUg4pzRCRCO8PrU28lwaN1Vwq5IFWAX
    CgAbiokAJ5WGNjU3l5jkdKbaLKpe65ukhyh5gcEdKJLG5Nxp78x76odvOheYEHIq30eXmDR/2S
    KI3dLVLczQeSMuHdTm0rUIHtiAHijGPTJrbbJg2pyuB/vIEY/jXz/YHnktCTkcvJ6jDZ/jX0Bp
    kJBt5lyVa3Ck58RjFUeLMAyu46q86PyOLns4C33Csq9Xq9VKtSvhdtJutMZmu5LqVFOzQyH8Rn
    NdXiWwg7plvDjzlIrSNLsrfU551njYjlGMHBU56iqfiP4fJdKz26JP74SQfXoaRoMRjkFpiA7w
    +6HjnRuSCXNBG58duDtR8OXgqTTdTXUo2eyiubgL1CzKWHuM5pq+vUIa3COsjxvzK5yVwpNUFr
    oMGga3JJcSy/NRA8kZ7vI3rjqfSmrGVp9ZTmJJZZB/6Gqzu919rJSkwakjtMWnNyJ+35UuBy1q
    vtvSbbTp72YrEpPkTUjSrVriBcDYdcUST/8A2u3jMWA7DerFyE6bISBuqe50rT9IsHlvHaacD7
    IOAD5etDmsvyaek0acqyKcelc4su3eSOAsTuC3rmntZTPDdkT45FTjZbdQc82DnHih6zjDWCA+
    v51HuQVeNPDmFWlhF/suPKoUqs95EMbA1LKmI33KXqkfLYnG3hVVFHy2AJG7Nt9KJNbg5bNFPT
    Gao7lOSzgGPOvBvZsvMlzOukLa9uLiMDcLzCqch7aZWU8rA5Bos4WCy6gRJ9l15d6icT6QbUu2
    MYO1RygCyK6a0lk7p16t5GAdpB9pf41OW2WXGQc+lC+kNidMHDj8RWlaNp63aLykc3ketITnqS
    rWB5mFjuqux0tC4ywA9Rmi/SLCOEjLcw9BirCy0IoB3GPuKsF08RHLKVHjk4qrmqc+l022EN1s
    iPRbhI4wBhVxQZ8SeLzd6RLa2bEW8v6sPj7Yzu3ttgee5pnW9X7aT9GWknZxcpa5mXqsY6gep6
    fWgTWLpr6/KrgRIeREHQY2wPTFWGF4fd3WvHgqjE663sWHx/CveDYeTS7uVhtJJHFt5ZycfQU1
    xTdLP2axtzRqcAn/AF61Kuj+itBsLTpLIWnfwxkYFUeogi0hLfaY8xrTutlWUYM05fzUyNs6XI
    p6AZpmGKRbWORQeUjqK7bgtZSgH9nNc0WXmJt3PXPL6Ggt3KNIOzccFZaZfMh5WOV9aJo+WSLm
    Q9aCXBhmORgg7jyq/wBKuuQBSdvA0xG/gVXzRXGZqsW6EHpT+luI75SegFR5GBO1LtCTcLy9W2
    ooKE9t2kI84ZjR5xJMB2VuTI59AOn4Cjrh7i2ZZVWZgYiSeXyBoAcG00idFxzzsqYHXGxJ/Cm7
    e57JlXJ2xSr4m1JJOo2UGSSUtiw2O/8AC+ibS6juoVkiYEEU/WR8L8TtZSLHKxaPpR2NbhvLi1
    jtJjzHvPy9OX1qiqaKSF22i1VDisVUzU2dyWKcG2r3E1264BXlBHn1q415l0vT5Lq5IAX7K56n
    yprgqKRYbt8YLSAA+woF+Kuv/M3JsoXykfdyPHzNY+gpBUOa0r6TiVaackg+CoviObTiG3XWtL
    YRXYCrcxf2htzfXxoH0iYrqtmX7jCUK2fDwP51NTtO8ImILDB361G7GYSxTxIfmYHV+X98A/mK
    2cNPkiybjgsPLUWeSUe/D+BZ7aViOYRjceR8Kk6sPmpn6HAI2qt4XcWml3Ut1byGNZm/XRHdT7
    jcD3pC3zE3EsUkc64J73dYbdfLy++i2LnKll0cVnuuzNLq0YO3exj2oq12Hl4W0oEbkEn76FNX
    Mcuuxsisnf3VvA0fa7bF+HdH2yDFmmTvZTmNo2oXsYWFnIQtQuwPzqZoltLf/ZiN9h0qtntj8y
    GAyT0qQChBJqSEvXrf/ZEIB+z40N6jCf0WjjOVaj7Wbbm0aKXw5cUMXdoW0WXAPXNcG65E6xHi
    q7h0KLpD9lW3z6+VH/EGkR3WkTSSAAhMknwNZ7oSO45oQWkiPNyjqceXrWlTW93rWh28+iSq91
    bFXa3bvduR1OPL8qFK0myPK4B6yhtLMGnte8/ZTQuO4wwXU+I86PuEbmOa0imJIGwJA+yfKkap
    e/p+CCG+hhhuYMg8yYk5fFSejb+NP8NabqfCyqzSo+n3cwUK2+G3ClgPMHGRQZaf0htnbpiOuN
    P2gf5RlaakrACCOeXPQqhA+81U8Q6ldx2kkhVYlC5Gd2bOwAxUptIt5OdptUntrqKEzYijPZKA
    SCpJzuMb5I6jGaz28u7ia57SGedo7dhIC7c2Wz3RjwrlNhtOy7rXI5qM+K1UpAa4NB105eKl6m
    50ywNqxJvpz2lwfI+C/wCH8yfKnuEtKNzcG6uFzHH3sedQo4bjU7xGdC8jDCoN/wDXnRzAIbDS
    EgtwTelSJCfsoT1Bq3jZ1TNdyqieUuuBxQtxJNHe6ozISY1AySMdKq9XZsQqRjAzirSKNbnUQi
    ZaJDzOx6sfEmqnWn57046V2Q2C5ALutyU7Sxzq6eJSoPK0NyGGxBqVpEvJMh8DtT2pW3JOxA7p
    3FQI0uu5sshB4p/Uk7WKK6UbSKM+42P8KTYzHGPFacsWMui3MR3MLBwPQ7H+FV1s/JKOlevrdR
    DNC3kiWOUsBucVdaBA1zexhQTvnFC0UnL44Bop4ZuY4UlndC6xoWLHOBtt+NTMlmkhLviF1f6v
    rYSR1KphCQvjj3qFYzvcZlfx8KFY5nvrrvElQ2SfOr1Lnk/V2+MgYJPRalEwRCwQZC5+6IYZS7
    iND3vFv3aNuG9St7PkVA8jse8wG9Z7pQXIBJcdWJ2FEVtqZgIW3xjzAwKFUe2GS1/ooQj0cl4N
    vMqnj4ts9I0S+tVd/m2bmDY7u4xgeox+NZJqVw13dySM2cmrDXrhZtQmaIkpnx8ar44O0OVH0q
    iw+gZA3shfQK6vdK4ukS7GHmcDGaIJNHb5NpkXvgZ/CmtDte0YHGwOPajpIUXT5FAA7hGD7VbW
    sLLNVM93XBQl8PZ/mtL1O15Qzk84JOw2qieGB5ZoHiKyjbuHBPuOlS/hZciPiK9tWGQWYDPoTV
    dxNIbLi64jBwvPzH0zQ4mWcWqM2bPcIQnhI14R5JCZbfatWtYX1DhGzZBzyWyYkTxUeBx5etZl
    q2P6QI4IHMrbgelaZwhd9lpkUdxkxDAjnTfsyfA+noetd2N0WoOaJoVUFWKLmPQ0y8IkXnRaMZ
    9IgkZJJsIh37SMc0be4/Y/Kn20dXwVjAQDbG+fajixCrutMZuqPULYy8HdoRun5Zoea15uHbhu
    Ud3xrSdQ03HC1zCOvIWA9aBLMGTRdQjwNkyR5UJouSRzRWS2sUB8IyiHW0z0L49962ez0lYyWt
    XNtdKOZZB0b0Yfx61hmnv2OrKwHSQH8a+gmk57S0mhbAZO9npygZOfpRCy+hTFW4tIIVBrGlWO
    usbfVBHp2qKA6yoQFO32gR4/6OKDG1HV+H0WHXbZ7rTcvElyi8wGdjkdM48RRvfrFqNxY2kqyQ
    yXk4mnKDeOMbKVHj3d85rL9c1nWphNZNcp8ikr9mwQEuuSAT9K85wb2eKhBG6QXOx/+0Vzfa3B
    eWlgkD88TZaeQsf1rZKgn86r9GjjmhmEvOeaYgKg3OFGPbr+ND0UEUmlzHtmS5t27YltgVOAcf
    8Apo+0KK1h1hrSHmaCaNSvaOFDMYwc58sg49hUo6i5DSi1FMIoyWqdodpILUSHltLdDys+Mu+P
    AU5qsyxWEnYRtFGdgSe831qxaeBY1muYl53+yibBSNjt71ScR3QmjRUOx8KYAuVVkknVVunHsb
    S4nOxxgH1oanl7S5ZvWr/US0GkIuCOfJoXQ5kzQ5d7J6kFwXK3tm5SCKvHlSe1XmwGG1UMJyBU
    yFu8N8DPWotdbRTnYHWKttLtnS01CTYK0JVR4k0OGU8+RtvRppZM1jcRxgmPlPM3nQHIxEj465
    NecLIUJzF11f2xDRg9T61f9uYeHZwTvKVQffv+VC2nvmIVY385/R8MYOO9n8Ki0XCjKLEJ63uD
    GAqbZ6kVaWUp5lGds9KHYpl5QCd6n2skvSPYUXNfdCMdtQjOGV8AJ3QepNWlowAy2W8s0IWb3J
    wBKPSiLTp5lADEN6iujvSz25bkLMUicEczVY2nKGUtgDNPQaespAMoAPiTVpa8PwyEc1x91Lta
    RuryaeN2l1YaX8s7BkmENwB16g+jDxFX9veRTpJbygQ3KqTy5yGHmp8RVLqVlp2hRRgWc11KRk
    szkCqpOINOuyIrm1ktGU5SVHJKHzrjjcaKusCbjUIa4LuPlfiJJECBzyMPvpv4mkxcVTONs4/K
    q+8gn0bjizvVkWaCSQFZl6HfofI1O+K78+uCQftKD+FeYPaXHJOnUtKGdWkzqNs3UYrRuArrk7
    oPVcFW3DehFZZPL2j27eWRRtwzM0apIm+B4VNrMwK9U3EYWqpZyo5fTpOwGOaSFyezI/h+XtSd
    N1W1uJ2gt+WxkU5lRt4jj06jPmDiqdNUuLvT4bS2PJcXMgQ97GSTgfT+VXXEGhHT9NjW/jUwww
    FrOdHH6yVz3mBXfYDYE43JxSskgjcGHcocMHWsLjsFcSSmezlFwnZyOCIkGSsgH7h8fbrWaW0T
    GfUUQEIytRJf6le6BoyJPL2sTqB5dkxG2R4deo28x41U6TCEsZJ5s5dTuT+f3j76NA3JdKynUW
    WPzDs9TbHg1a/pF+L/AEu3s4peS4lxGOboBjJJ9NgPrWU6vCY9YcBcAsfzov0ucLZLLGyrNbxh
    OVhu3ODkeuMj7qZATNQMzGlFF9ct8hqmr/YZx8nbKDkJnrg+QGfvrMZeYJyMNh4Uea/Ottb6fp
    bAgxR9rKPJn8/pigzU4zFLjGR50puSU5C0ABqqIIg94IScJOrQn/EMD8cVa6TqTPbWM52ktVRZ
    CRn7LEH8DVJcSvGyyKO8pDDfy3oj0DTkutR1uNT+rde1iH94B8fdkVwbgokoBaQUfRiKZ5u+s7
    cwfmjXAIb08N81Q6qySX6Io3HgPCrDSbq8uNKslW7QyqptnVe64x05jjfoN/Wu2emmO4eeZw3L
    v1qxjWdf2Sc26G+Kn5Y44sY5FAIoZh3NXnFMolvnKk4zVDCTkqKVlPaVvTDLEFZRSBQM5LeAFS
    Iyzkc5wP3agxdwjA3qZEcMKkBxXpDobIy4ecmFlB7uMYoDv17K9nUfvGizR5uyIwcbZoW18hdR
    lb94k12UaXS9MQJC1S9OfEa+9PahKC8aZwME4qHp7ZiB8qbkbtbk75xtUGmzEUsvJ4K2tSqqMD
    fzq0s1eRwEXPnVLFIqDvNg1OtL+OFcKWznOTXGP1XJGG2m6N9L0osqu43IzVzFb9kMAUAwcQTx
    MDHKwqztuLbhT+sYOv8AaXNHbI1V81PIdl//2Q==
    N:Mogari;Shreyansh;;;;
    END:VCARD`;

    // vcard = `BEGIN:VCARD
    //         \nVERSION:4.0
    //         \nN:Mr.;
    //         \nFN:Forrest Gump
    //         \nORG:Bubba Gump Shrimp Co.
    //         \nTITLE:Shrimp Man
    //         \nTEL;TYPE#WORK,VOICE:(111) 555-1212\nEMAIL:forrestgump@example.com
    //         \nEND:VCARD`;
    var blob = new Blob([vcard], { type: "text/vcard" });
    var url = URL.createObjectURL(blob);

    const newLink = document.createElement("a");
    newLink.download = contact.name + ".vcf";
    newLink.textContent = contact.name;
    newLink.href = url;

    newLink.click();
  });
});
