const restaurants = [
  {
    id: 1,
    name: "Fireroom",
    image:
      "https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGZpcmVyb29tJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location:
      "Village View Shopping Centre Cnr Van Buuren Road and, Kloof Rd, Bedfordview, 2008",
    hours: " Open now:  9am–9pm  ",
    serviceOption: "No-contact delivery· Takeaway ·Dine-in ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "Falcon Arrow Spur Steak Ranch",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOtbTVM4WY_3TJ26hGZIpGLRQuLBT4wyCQQcFVp=w234-h144-p-k-no",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location:
      "Shop U204C, Southgate Mall Cnr Columbine &, Rifle Range Rd, Southgate, Johannesburg South, 2082",
    hours: "Hours or services may differ ",
    serviceOption: "No-contact · Takeaway ·  Dine-in ",
  },
  {
    id: 3,
    name: "Sakhumzi Restaurant",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e95a745a20bbf21:0xd5c116f9fc294ae3!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOpq1g04Jv1mSNzE_VXuoKytsmFdAMdLXOkDmGn%3Dw195-h130-n-k-no!5snear+by+restaurant+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOpq1g04Jv1mSNzE_VXuoKytsmFdAMdLXOkDmGn&hl=en",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location: "6980 Vilakazi St, Orlando West, Soweto, 1804",
    hours: "Hours or services may differ ",
    serviceOption: "Dine-in · Takeaway · Delivery",
  },
  {
    id: 4,
    name: "Makhelwane Restaurant",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e95a7cf0751a959%3A0x202c7c92826411ea!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNJZjSkstHKjwbaXnJob6UzysbzfMussCg1WIVN%3Dw129-h130-n-k-no!5snear%20by%20restaurant%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipNJZjSkstHKjwbaXnJob6UzysbzfMussCg1WIVN&hl=en#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location: "6974 Vilakazi St, Orlando West, Soweto, 1804",
    hours: "Hours or services may differ ",
    serviceOption: "No-contact · delivery Delivery · Takeaway Dine-in ",
  },
  {
    id: 5,
    name: "Chaf Pozi",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e9509d83517a23d:0xdf751783a2d1a9a6!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipMgPNEjsgdm6Cjkti3QKhgx1pc2JyDC9q40UQHc%3Dw195-h130-n-k-no!5snear+by+restaurant+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipMgPNEjsgdm6Cjkti3QKhgx1pc2JyDC9q40UQHc&hl=en",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location:
      "Orlando Towers, Chris Hani Road &, Nicholas St, Orlando East, Soweto, 2196",
    hours: "Hours or services may differ ",
    serviceOption: "No-contact delivery · Takeaway · Dine-in ",
  },
  {
    id: 6,
    name: "Jonny's",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e9576d7abc2d4f9%3A0x15bb987e41ee0da2!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPYAxA_8TCN8fz3jbjTUiVs77y46nvkYnHqU2mZ%3Dw129-h130-n-k-no!5sfourways%20sandton%20restaurants%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOMhueRo2IeUk1gQUq_7_h8bmkJxiXRkOb3zGqA&hl=en#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location: "1 The Valley Family Centre, Broadacres Dr, Sandton, 2055 ",
    serviceOption: "Dine-in · Takeaway · No-contact delivery ",
  },
  {
    id: 7,
    name: "Bawas Food Infinite",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e957794099e080f:0x78f662fb8ee76dbd!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipPmp7l6xWAAwbdKpiHsfSeVVIFBZgR5MBKEz0-p%3Dw390-h262-n-k-no!5sfourways+sandton+restaurants+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipPmp7l6xWAAwbdKpiHsfSeVVIFBZgR5MBKEz0-p&hl=en",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location: "Agora Fourways Gardens, Fourways, Sandton, 2191 ",
    serviceOption: "No-contact · delivery Delivery · Takeaway Dine-in ",
  },
  {
    id: 8,
    name: "Social On Main",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e95738b6afb59f7:0xa0d4f895789b2589!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipNJkwZdA5IpTev-2dA39A8LCJNQez2wRmlmVIvm%3Dw195-h130-n-k-no!5sbrynston+restaurants+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipNJkwZdA5IpTev-2dA39A8LCJNQez2wRmlmVIvm&hl=en",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location: "1 Posthouse Street Corner Main Road and, Posthouse St, ",
    hours: "Hours or services may differ ",
    serviceOption: "Dine-in · Takeaway · Delivery",
  },
  {
    id: 9,
    name: "Hell's Kitchen",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e950b8e4175ff0d:0x182c59b7ba52be67!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipPDtiZkYhV3YAkYTGfAOyTPUAsNXPG8qozONfSL%3Dw129-h130-n-k-no!5sjohannesburg+restaurants+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipPDtiZkYhV3YAkYTGfAOyTPUAsNXPG8qozONfSL&hl=en",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location: "4 7th St, Melville, Johannesburg, 2109 ",
    serviceOption: " Dine-in · Takeaway · Delivery ",
  },
  {
    id: 10,
    name: "Doppio Zero",
    image:
      "https://www.google.com/maps/uv?pb=!1s0x1e9573de39650771:0xc4a4448988ea8f41!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipN0wQskFghvBrb-ARtB-VMAOguOE06NM5IDkufI%3Dw195-h130-n-k-no!5sbrynston+restaurants+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipN0wQskFghvBrb-ARtB-VMAOguOE06NM5IDkufI&hl=en",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    location: "Hobart Grove Centre, 52 Hobart Rd, Bryanston, Sandton, 2191",
    hours: "Hours or services may differ ",
    serviceOption: "Dine-in · Takeaway · No-contact delivery ",
  },
];
/*
const restaurantImages = [
  {
    id: 1,
    images1:
      "https://www.google.com/maps/uv?pb=!1s0x1e950b8e4175ff0d:0x182c59b7ba52be67!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOGREGE4NFkX_yLKbEe0I9j0bqEgMBDYkJ9paHA%3Dw390-h262-n-k-no!5sjohannesburg+restaurants+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOGREGE4NFkX_yLKbEe0I9j0bqEgMBDYkJ9paHA&hl=en",

    images2:
      "https://www.google.com/maps/uv?pb=!1s0x1e950b8e4175ff0d%3A0x182c59b7ba52be67!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOLvyAbAy4vIU3L_SUG-K8zw05Km4vSJVhKkwZ0%3Dw129-h130-n-k-no!5sjohannesburg%20restaurants%20-%20Google%20Search!15sCgIYIA&imagekey=!1e10!2sAF1QipPAsviuTQ_mIw31S8sNB2kF4Bupar-gHetzWUc8&hl=en#s",

    images3:
      "https://www.google.com/maps/uv?pb=!1s0x1e950b8e4175ff0d%3A0x182c59b7ba52be67!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOLvyAbAy4vIU3L_SUG-K8zw05Km4vSJVhKkwZ0%3Dw129-h130-n-k-no!5sjohannesburg%20restaurants%20-%20Google%20Search!15sCgIYIQ&imagekey=!1e10!2sAF1QipNLTL5n9Ni4mDlV_H3WhtR0vNAGz6tJ5Qlq0Ilp&hl=en#",
  },
  {
    id: 2,
    images1:
      "https://www.google.com/maps/uv?pb=!1s0x1e950b8e4175ff0d:0x182c59b7ba52be67!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOGREGE4NFkX_yLKbEe0I9j0bqEgMBDYkJ9paHA%3Dw390-h262-n-k-no!5sjohannesburg+restaurants+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOGREGE4NFkX_yLKbEe0I9j0bqEgMBDYkJ9paHA&hl=en",

    images2:
      "https://www.google.com/maps/uv?pb=!1s0x1e950b8e4175ff0d%3A0x182c59b7ba52be67!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOLvyAbAy4vIU3L_SUG-K8zw05Km4vSJVhKkwZ0%3Dw129-h130-n-k-no!5sjohannesburg%20restaurants%20-%20Google%20Search!15sCgIYIA&imagekey=!1e10!2sAF1QipPAsviuTQ_mIw31S8sNB2kF4Bupar-gHetzWUc8&hl=en#s",

    images3:
      "https://www.google.com/maps/uv?pb=!1s0x1e950b8e4175ff0d%3A0x182c59b7ba52be67!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOLvyAbAy4vIU3L_SUG-K8zw05Km4vSJVhKkwZ0%3Dw129-h130-n-k-no!5sjohannesburg%20restaurants%20-%20Google%20Search!15sCgIYIQ&imagekey=!1e10!2sAF1QipNLTL5n9Ni4mDlV_H3WhtR0vNAGz6tJ5Qlq0Ilp&hl=en#",
  },
];
*/

export { restaurants };
