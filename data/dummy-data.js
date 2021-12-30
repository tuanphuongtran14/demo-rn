import Product from '../models/product';

const PRODUCTS = [
  new Product(
    'p1',
    'u1',
    'Áo phông đỏ',
    'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
    'Một chiếc áo phông đỏ hoàn hảo cho tiết trời thu.',
    29.99
  ),
  new Product(
    'p2',
    'u1',
    'Thảm xanh',
    'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'Vừa vặn với chiếc áo sơ mi đỏ của bạn một cách hoàn hảo. Để đứng vững. Không phải để mặc nó.',
    99.99
  ),
  new Product(
    'p3',
    'u2',
    'Cốc cà phê',
    'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
    'Cũng có thể dùng để pha trà!',
    8.99
  ),
  new Product(
    'p4',
    'u3',
    'Sách - Phiên bản giới hạn',
    'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
    "Nội dung là gì? Tại sao điều đó lại quan trọng? Đó là một phiên bản giới hạn!",
    15.99
  ),
  new Product(
    'p5',
    'u3',
    'Máy tính xách tay',
    'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
    'Phần cứng tuyệt vời, bàn phím dở tệ và một mức giá cực đắt. Hãy mua ngay bây giờ trước khi một cái mới được phát hành!',
    2299.99
  ),
  new Product(
    'p6',
    'u1',
    'Bút và Giấy',
    'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
    "Có thể sử dụng giấy để chùi (Không phải kiểu chùi bạn đang nghĩ đến...).",
    5.49
  )
];

export default PRODUCTS;
