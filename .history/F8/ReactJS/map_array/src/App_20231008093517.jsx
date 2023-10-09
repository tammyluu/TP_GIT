
import './App.css';
const courses = [{"id":15,"title":"HTML CSS Pro","slug":"htmlcss","description":"T\u1eeb c\u01a1 b\u1ea3n t\u1edbi chuy\u00ean s\u00e2u, th\u1ef1c h\u00e0nh 8 d\u1ef1 \u00e1n, h\u00e0ng tr\u0103m b\u00e0i t\u1eadp, trang h\u1ecfi \u0111\u00e1p ri\u00eang, c\u1ea5p ch\u1ee9ng ch\u1ec9 sau kh\u00f3a h\u1ecdc v\u00e0 mua m\u1ed9t l\u1ea7n h\u1ecdc m\u00e3i m\u00e3i.","image":"courses\/15\/62f13d2424a47.png","icon":"courses\/15\/62385d6c63dfa.png","video_type":"upload","video":null,"old_price":2500000,"price":1299000,"pre_order_price":699000,"students_count":3837,"is_pro":true,"is_coming_soon":false,"is_selling":true,"published_at":"2022-08-18T17:00:00.000000Z","is_registered":false,"user_progress":0,"last_completed_at":null,"image_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/15\/62f13d2424a47.png","icon_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/15\/62385d6c63dfa.png","video_url":"","landing_page_url":"\/landing\/htmlcss","is_pre_order":false,"is_published":true},{"id":27,"title":"Ng\u00f4n ng\u1eef ti\u1ec1n x\u1eed l\u00fd Sass","slug":"sass","description":"\u0110\u00e2y l\u00e0 m\u1ed9t kh\u00f3a h\u1ecdc nh\u1ecf \u0111\u01b0\u1ee3c t\u00e1ch ra t\u1eeb 2 ch\u01b0\u01a1ng h\u1ecdc trong kh\u00f3a HTML CSS Pro. Ki\u1ebfn th\u1ee9c v\u1ec1 Sass trong kh\u00f3a n\u00e0y b\u1ea1n c\u00f3 th\u1ec3 \u00e1p d\u1ee5ng ngay v\u00e0o c\u00e1c d\u1ef1 \u00e1n c\u1ee7a b\u1ea1n.","image":"courses\/27\/64e184ee5d7a2.png","icon":"courses\/27\/64e0daf212fad.png","video_type":"upload","video":"courses\/27\/oeT5zTmdk8KlHwU2meMJpnR7uihkX6OvYxnkjiB9.mp4","old_price":400000,"price":299000,"pre_order_price":0,"students_count":0,"is_pro":true,"is_coming_soon":false,"is_selling":true,"published_at":"2023-08-19T15:06:00.000000Z","is_registered":false,"user_progress":0,"last_completed_at":null,"image_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/27\/64e184ee5d7a2.png","icon_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/27\/64e0daf212fad.png","video_url":"https:\/\/videos.fullstack.edu.vn\/f8-prod\/courses\/27\/oeT5zTmdk8KlHwU2meMJpnR7uihkX6OvYxnkjiB9.mp4","landing_page_url":"\/landing\/sass","is_pre_order":false,"is_published":true},{"id":19,"title":"JavaScript Pro","slug":"javascript-pro","description":"Kh\u00f3a h\u1ecdc JavaScript Pro","image":"courses\/19\/62f13cb607b4b.png","icon":"courses\/19\/62f13cb685c81.png","video_type":"upload","video":null,"old_price":0,"price":0,"pre_order_price":0,"students_count":0,"is_pro":true,"is_coming_soon":true,"is_selling":false,"published_at":"2023-11-30T17:00:00.000000Z","is_registered":false,"user_progress":0,"last_completed_at":null,"image_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/19\/62f13cb607b4b.png","icon_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/19\/62f13cb685c81.png","video_url":"","landing_page_url":"\/landing\/javascript-pro","is_pre_order":false,"is_published":false},{"id":20,"title":"NextJS Pro","slug":"reactjs-pro","description":"Kh\u00f3a h\u1ecdc NextJS Pro","image":"courses\/20\/648020fc16597.png","icon":"courses\/20\/648020fcc8000.png","video_type":"upload","video":null,"old_price":0,"price":0,"pre_order_price":0,"students_count":0,"is_pro":true,"is_coming_soon":true,"is_selling":false,"published_at":"2024-03-31T17:00:00.000000Z","is_registered":false,"user_progress":0,"last_completed_at":null,"image_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/20\/648020fc16597.png","icon_url":"https:\/\/files.fullstack.edu.vn\/f8-prod\/courses\/20\/648020fcc8000.png","video_url":"","landing_page_url":"\/landing\/reactjs-pro","is_pre_order":false,"is_published":false}]
const CourseItem = ({toto}) => (
    <div>
        <h2 onClick={() => onClick(toto)} >{toto.title}</h2>
        {/* <img src="{toto.image}" alt="" /> */}
        <img  width ="100%" src="{toto.thumbnail_cdn}" alt="" />
        <p>{toto.description}</p>
        <p>{toto.slug}</p>
        {/* <h2>{toto.studentsCount}</h2> */}
        <p>{toto.students_count}</p>
    </div>
)
function App() {
  const handleClick = (course)=> {
    console.log(course.title);
  }
  return (
    <div className="App">
        {courses.map(course =>(
                <CourseItem
                    key={course.id}
                    // title={course.title}
                    // image={course.thumbnail_cdn}
                    // description={course.description}
                    // studentsCount={course.students_count}
                    toto = {course}
                    onClick = {handleClick(course)}
                />
            ))}
    </div>
  );
}

export default App;
