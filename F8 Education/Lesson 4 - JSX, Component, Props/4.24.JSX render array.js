/**
 * 
 * Khi children trong React.createElement có từ 2 giá trị trở lên nó được coi như là 1 mảng => có thẻ truyền mảng vào children
 * 
 * Render nhiều element trong jsx dùng thẻ <React.Fragment> 'Các Element cần dùng' </React.Fragment>
 * 
 */

const courses = [
    {
        name: 'HTML, CSS',
    },
    {
        name: 'Responsive web design',
    },
    {
        name: 'ReactJS'
    }
];

const jsx = (
    <ul>
        {courses.map(course =>
            <li>{course.name}</li>
        )}
    </ul>
)

ReactDOM.render(jsx, document.getElementById('root'))