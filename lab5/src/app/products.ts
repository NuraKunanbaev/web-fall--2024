
export interface Product {
  id: number;
  image:string[];
  name: string;
  rating: number;
  description: string;
  reference:string;
  like: number;
  category:string;
  i:number;
}


export const products:Product[] = [
  {
    id: 1,
    image:['../assets/images/air13.png', "../assets/images/air13(1).png", '../assets/images/air13(3).png'],
    name:'MacBook Air 13" Apple M1',
    rating:4.9,
    description:"Apple's thinnest and lightest laptop has been completely transformed with the advent of the Apple M1 chip. The CPU is now up to 3.5 times faster. Graphic — up to 5 times. And thanks to Apple's advanced Neural Engine system, the speed of machine learning has increased up to 9 times. The new MacBook Air runs longer on a single charge than previous models.",
    reference:"https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=511010000&sr=1&qid=dca2d2a8acf4f7b2e03e984fb7fde2bd&ref=shared_link",
    like: 21,
    category:'laptop',
    i:0
  },
  {
    id: 2,
    image:['../assets/images/air136(1).png', '../assets/images/air136(2).png', '../assets/images/air136(3).png'],
    name:'MacBook Air 13.6" Apple M2',
    rating: 4.8,
    description: 'The new generation MacBook Air based on the M2 chip is characterized by incredible speed and energy efficiency, and its surprisingly thin body is made entirely of aluminum. This is a super portable and heavy—duty laptop on which you can work, play or create anything - wherever it is convenient.',
    reference: 'https://kaspi.kz/shop/p/noutbuk-apple-macbook-air-13-6-a2681-m2-chip-8gb-ssd-512gb-midnight-ios-mly43ru-a--111249127/?c=511010000&sr=6&qid=7c10f66393fe1d5cffd117bfb2e6b512&ref=shared_link',
    like: 19,
    category:'laptop',
    i:0
  },
  {
    id: 3,
    image:['../assets/images/air153(1).png', '../assets/images/air153(2).png', '../assets/images/air153(3).png'],
    name:'MacBook Air 15.3" Apple M2',
    rating: 4.9,
    description: 'The 15-inch MacBook Air is an excellent choice for connoisseurs of thin and light laptops. It offers a large and high-quality screen, ideal for those who appreciate spacious display and comfort at work. Thanks to the base M2 processor, the laptop provides sufficient performance for most tasks. Visually, the 15-inch model is almost indistinguishable from the already familiar 13-inch version of the MacBook Air with the M2 processor.',
    reference: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=511010000&sr=2&qid=cf1e8f4ec9b6d72586de343c413e1a40&ref=shared_link',
    like: 34,
    category:'laptop',
    i:0
  },
  {
    id: 4,
    image:['../assets/images/pro162(1).png', '../assets/images/pro162(2).png', '../assets/images/pro162(3).png'],
    name:'MacBook Pro 16.2" Apple M1 Pro',
    rating: 4.6,
    description: 'The super fast M1 Pro and M1 Max chips deliver phenomenal performance and provide surprisingly long battery life. Add to this the stunning Liquid Retina XBM display and even more ports for professional work. This is the laptop you\'ve been waiting for.',
    reference: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=511010000&sr=1&qid=b936e882798135b0de0b751c32ad4dda&ref=shared_link',
    like: 23,
    category:'laptop',
    i:0
  },
  {
    id: 21,
    image: ['../assets/images/21_1.png', '../assets/images/21_2.png', '../assets/images/21_3.png'],
    name: 'Apple MacBook Pro 14 M2',
    rating: 4.8,
    description: 'The Apple MacBook Pro 14 M2 is a powerhouse designed for professionals and creative enthusiasts, combining cutting-edge technology with a sleek and portable design. With the latest M2 chip, this laptop delivers unparalleled performance and efficiency.',
    reference: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 29,
    category: 'laptop',
    i: 0
  },
  {
    id: 23,
    image:['../assets/images/air153(1).png', '../assets/images/air153(2).png', '../assets/images/air153(3).png'],
    name:'MacBook Air 15.3" Apple M2',
    rating: 4.2,
    description: 'The 15-inch MacBook Air is an excellent choice for connoisseurs of thin and light laptops. It offers a large and high-quality screen, ideal for those who appreciate spacious display and comfort at work. Thanks to the base M2 processor, the laptop provides sufficient performance for most tasks. Visually, the 15-inch model is almost indistinguishable from the already familiar 13-inch version of the MacBook Air with the M2 processor.',
    reference: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=511010000&sr=2&qid=cf1e8f4ec9b6d72586de343c413e1a40&ref=shared_link',
    like: 22,
    category:'laptop',
    i:0
  },
  {
    id: 5,
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro',
    rating: 4.7,
    description: 'The Apple iPhone 15 Pro is a heavy-duty smartphone made of titanium. The device runs on a powerful Apple A17 Pro processor and has advanced professional-level optics.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-chernyi-113138109/?c=750000000',
    like: 16,
    category:'Phone',
    i:0
  },
  {
    id: 6,
    image: ['../assets/images/iphone15pro-1.webp', '../assets/images/iphone15pro-2.jpg', '../assets/images/iphone15pro-3.webp'],
    name:'Apple Iphone 15pro max',
    rating: 4.9,
    description: 'The Apple iPhone 15 Pro Max is a heavy-duty flagship made of titanium. The latest Apple A17 Pro chip is responsible for the uncompromising performance of the smartphone. The device received an advanced camera system, thoughtful ergonomics, an updated design and a new programmable button.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
    like: 10,
    category:'Phone',
    i:0
  },
  {
    id: 7,
    image: ['../assets/images/iphone14promax-1.png', '../assets/images/iphone14promax-2.jpeg', '../assets/images/iphone14promax-3.jpg'],
    name:'Apple Iphone 14 pro max',
    rating: 4.7,
    description: 'The Apple iPhone 14 ProMax is Apple\'s flagship smartphone, which has impressive technical specifications and stylish design.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000',
    like: 51,
    category:'Phone',
    i:0
  },
  {
    id: 8,
    image: ['../assets/images/iphone12-1.jpg', '../assets/images/iphone12-2.jpg', '../assets/images/iphone12-3.jpeg'],
    name:'Apple Iphone 12',
    rating: 4.2,
    description: 'Incredibly durable Ceramic Shield front panel. A gorgeous bright OLED display. A powerful chip. And a two-camera system. All this is available in the Apple iPhone 12.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-12-128gb-chernyi-100656960/?c=750000000',
    like: 70,
    category:'Phone',
    i:0
  },
  {
    id: 9,
    image: ['../assets/images/iphone13promax-1.jpeg', '../assets/images/iphone13promax-2.jpeg', '../assets/images/iphone13promax-3.jpeg'],
    name:'Apple Iphone 13 pro max',
    rating: 4.5,
    description: 'The Apple iPhone 13 ProMax has received a 6.7-inch Super Retina XDR1 display with an adaptive refresh rate of up to 120 Ghz and ProMotion technology for faster and smoother interaction. Thanks to the Ceramic Shield front panel, the screen is protected from cracks, scratches and other minor damages.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-128gb-goluboi-102298789/?c=750000000',
    like: 31,
    category:'Phone',
    i:0
  },
  {
    id: 10,
    image: ['../assets/images/iphone14plus-1.jpeg', '../assets/images/iphone14plus-2.jpeg', '../assets/images/iphone14plus-3.jpeg'],
    name:'Apple Iphone 14 plus',
    rating: 4.5,
    description: 'The iPhone 14 Plus is very difficult after the basic iPhone 14. It would be possible to limit ourselves to just one phrase: just an enlarged 14th with all the consequences. But it is also impossible not to tell anything at all.',
    reference: 'https://kaspi.kz/shop/p/apple-iphone-14-plus-128gb-chernyi-106363170/?c=750000000',
    like: 14,
    category:'Phone',
    i:0
  },
  {
    id: 11,
    image: ['../assets/images/11_1.png', '../assets/images/11_2.png', '../assets/images/11_3.png'],
    name: 'Samsung 55-inch QLED 4K Smart TV',
    rating: 4.8,
    description: 'Immerse yourself in stunning visuals with the Samsung 55-inch QLED 4K Smart TV. Featuring Quantum Dot technology, this TV delivers vibrant colors and sharp contrast. With smart capabilities, enjoy seamless access to your favorite streaming services and apps.',
    reference: 'https://kaspi.kz/shop/p/samsung-qe55q70bauxce-140-sm-chernyi-106970331/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 38,
    category: 'TV',
    i: 0
  },
  {
    id: 12,
    image: ['../assets/images/12_1.png', '../assets/images/12_2.png', '../assets/images/12_3.png'],
    name: 'Sony 65-inch Bravia OLED 4K TV',
    rating: 4.9,
    description: 'Elevate your home entertainment with the Sony 65-inch Bravia OLED 4K TV. Boasting OLED technology, this TV offers deep blacks and incredible contrast. With Acoustic Surface Audio, enjoy immersive sound directly from the screen.',
    reference: 'https://kaspi.kz/shop/p/sony-xr65a80jcep-165-sm-chernyi-102832110/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 45,
    category: 'TV',
    i: 0
  },
  {
    id: 13,
    image: ['../assets/images/13_1.png', '../assets/images/13_2.png', '../assets/images/13_3.png'],
    name: 'LG 75-inch NanoCell 8K Smart TV',
    rating: 4.7,
    description: 'Experience the future of television with the LG 75-inch NanoCell 8K Smart TV. With NanoCell technology, enjoy accurate colors and wide viewing angles. The 8K resolution provides a breathtaking visual experience, making every detail come to life.',
    reference: 'https://kaspi.kz/shop/p/lg-75qned996pb-191-sm-chernyi-103187673/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 52,
    category: 'TV',
    i: 0
  },
  {
    id: 14,
    image: ['../assets/images/14_1.png', '../assets/images/14_2.png', '../assets/images/14_3.png'],
    name: 'TCL 50-inch Roku Smart LED TV',
    rating: 4.5,
    description: 'Transform your living room with the TCL 50-inch Roku Smart LED TV. Featuring built-in Roku for easy streaming, this TV offers Full HD resolution and vibrant colors. Enjoy a personalized home screen and access to thousands of channels.',
    reference: 'https://kaspi.kz/shop/p/tcl-50p635-127-sm-chernyi-107914777/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 29,
    category: 'TV',
    i: 0
  },
  {
    id: 15,
    image: ['../assets/images/15_1.png', '../assets/images/15_2.png', '../assets/images/15_3.png'],
    name: 'Hisense 32-inch HD Smart TV',
    rating: 4.3,
    description: 'Bring entertainment to any room with the Hisense 32-inch HD Smart TV. This compact TV delivers crisp HD resolution and smart features for streaming your favorite shows. Ideal for smaller spaces or as a secondary TV in your home.',
    reference: 'example.com/hisense-32-inch-hd-tv',
    like: 18,
    category: 'TV',
    i: 0
  },
  {
    id: 22,
    image: ['../assets/images/13_1.png', '../assets/images/13_2.png', '../assets/images/13_3.png'],
    name: 'LG 75-inch NanoCell 8K Smart TV',
    rating: 4.7,
    description: 'Experience the future of television with the LG 75-inch NanoCell 8K Smart TV. With NanoCell technology, enjoy accurate colors and wide viewing angles. The 8K resolution provides a breathtaking visual experience, making every detail come to life.',
    reference: 'https://kaspi.kz/shop/p/lg-75qned996pb-191-sm-chernyi-103187673/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 22,
    category: 'TV',
    i: 0
  },
  {
    id: 20,
    image: ['../assets/images/20_1.png', '../assets/images/20_2.png', '../assets/images/20_3.png'],
    name: 'WeatherTech All-Weather Floor Mats',
    rating: 4.8,
    description: 'Protect your car\'s interior with WeatherTech All-Weather Floor Mats. These high-quality mats are designed to trap water, mud, and debris, keeping your vehicle\'s floors clean and pristine. Durable and easy to clean, they are the perfect addition to your car accessories.',
    reference: 'https://kaspi.kz/shop/p/avto-mats-12272897-jac-js4-2023-chernyi-113585957/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 29,
    category: 'Car',
    i: 0
  },
  {
    id: 17,
    image: ['../assets/images/17_1.png', '../assets/images/17_2.png', '../assets/images/17_3.png'],
    name: 'Garmin DriveSmart 65 GPS Navigator',
    rating: 4.7,
    description: 'Navigate with confidence using the Garmin DriveSmart 65 GPS Navigator. With a large 6.95-inch display, voice-activated navigation, and real-time traffic updates, this device ensures a smooth and stress-free driving experience. Stay connected and reach your destination effortlessly.',
    reference: 'https://kaspi.kz/shop/p/gps-navigator-garmin-portativnyi-gpsmap-65-chernyi-seryi-103709662/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 19,
    category: 'Car',
    i: 0
  },
  {
    id: 18,
    image: ['../assets/images/18_1.png', '../assets/images/18_2.png', '../assets/images/18_3.png'],
    name: "Meguiar's Ultimate Car Care Kit",
    rating: 4.6,
    description: 'Keep your car looking brand new with Meguiar\'s Ultimate Car Care Kit. This comprehensive kit includes everything you need for washing, waxing, and maintaining your vehicle\'s exterior and interior. Achieve a showroom shine with ease.',
    reference: 'https://kaspi.kz/shop/p/greenway-nabor-dlja-uhoda-za-avtomobilem-auto-set-universal-4-sht-103498837/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 32,
    category: 'Car',
    i: 0
  },
  {
    id: 19,
    image: ['../assets/images/19_1.png', '../assets/images/19_2.png', '../assets/images/19_3.png'],
    name: 'Black & Decker Portable Car Vacuum Cleaner',
    rating: 4.5,
    description: 'Keep your car interior clean with the Black & Decker Portable Car Vacuum Cleaner. This compact and powerful vacuum is designed for car use, making it easy to remove dirt, dust, and debris from your vehicle. Enjoy a tidy and fresh car environment.',
    reference: 'https://kaspi.kz/shop/p/black-decker-adv1200-0-61-l-seryi-krasnyi-41900005/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 24,
    category: 'Car',
    i: 0
  },
  {
    id: 16,
    image: ['../assets/images/16_1.png', '../assets/images/16_2.png', '../assets/images/16_3.png'],
    name: 'Anker Roav DashCam C2 Pro',
    rating: 4.4,
    description: 'Capture every moment on the road with the Anker Roav DashCam C2 Pro. This compact and high-definition dashcam records clear footage, providing security and peace of mind while driving. Equipped with advanced features, it\'s a reliable companion for your car.',
    reference: 'https://kaspi.kz/shop/p/videoregistrator-neoline-g-tech-x32-chernyi-104766742/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=CjwKCAiA0PuuBhBsEiwAS7fsNbaMPzMyIPc2XrZi3BMaRWs7FHb34LH3OvhyP5Phr3v35xmq1ijqyhoCHGkQAvD_BwE',
    like: 25,
    category: 'Car',
    i: 0
  }
];



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/