import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Article from '../../../PrimarySections/SectionUtils/Article'

const ArticleBody = (props) => {
    const posts = [
        {
            id:1,
            image:'03.png',
            title:'10 Simple Tips To Get Acidity And Heartburn Under Coomponents',
            details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam dolorem recusandae voluptate similique? Libero hic, mollitia, maxime dolores incidunt, quaerat labore eligendi tenetur perspiciatis enim laborum sint asperiores. Ducimus voluptatibus doloremque amet quidem ullam voluptas cumque. Accusantium deleniti voluptas velit quidem, reprehenderit nam totam provident minus officia quisquam nesciunt quis placeat modi dolor alias error voluptate laudantium a doloribus? At, porro nulla! Enim dicta illo non cumque, qui accusamus veniam aperiam voluptatem, sunt porro exercitationem ipsum animi eius quam error! Aliquid nostrum praesentium tempore, aliquam velit distinctio sit consectetur harum eligendi enim hic magni sed! Tempore, nobis excepturi maiores blanditiis consectetur corrupti eos, dolorem numquam voluptatem autem, maxime at asperiores eligendi quia officiis? Expedita voluptatum rem, distinctio, eveniet consectetur assumenda explicabo unde animi hic earum ab, fugit asperiores voluptas fugiat accusantium. Sequi expedita ipsam numquam, modi excepturi deserunt dolores magnam autem nam distinctio tenetur fuga minima dolor sint corporis eaque quae ullam quidem voluptate veniam ratione. Voluptatum dicta, quibusdam nostrum voluptates nam sequi iste modi cumque repellat nihil at dolorem officiis provident sapiente. Hic optio nulla dolor sed est accusantium ullam, a beatae nisi, maiores earum! Quis repudiandae vitae quaerat omnis illo magnam alias ab sequi temporibus quos laborum, numquam assumenda error quo sint suscipit animi, ipsam quidem beatae ipsa veniam ducimus iusto maxime molestias. Nisi odit asperiores laborum quasi corporis minima non sit quidem, minus porro tempora alias sed necessitatibus voluptatem. Ipsa deleniti eos repellat reiciendis, vel eum magni dolor quo, ex, optio repellendus fugit in alias! Aperiam eligendi nam dicta, nobis atque ipsam quaerat rerum, voluptate fuga error necessitatibus voluptatem accusamus natus doloribus assumenda vero veniam eaque quos similique autem. Repudiandae repellat sed commodi temporibus minima nemo numquam nam omnis, nihil consequuntur voluptate, corporis molestiae, eligendi quae sunt est quia consequatur aut non a vitae sapiente odit! Aliquam iure dolore aut a, adipisci repellendus aspernatur sit similique sapiente amet eligendi. Cupiditate, aperiam. Qui rerum, eum inventore fugit nesciunt odio velit ab consectetur tempore eaque molestiae beatae quasi modi quisquam necessitatibus praesentium eius dolores reprehenderit accusamus voluptatum? Magni recusandae aliquam, dicta cum deleniti voluptate voluptas consectetur ad odit ullam repellendus iusto assumenda quas error ex et corrupti iste delectus accusamus quo dolores incidunt molestiae laudantium cupiditate! Sunt expedita, quo nihil laborum sit tempora quis eligendi minima voluptate quidem esse neque, aliquid exercitationem ex! Nemo minima eligendi ea non sequi dolor unde perspiciatis debitis iste? Dolorum facere ex maxime repudiandae laboriosam error a et, aliquam sint ducimus ipsum veniam sequi quo nihil officia iusto! Doloribus enim nisi dolor reiciendis illo esse totam adipisci impedit dicta, labore, ratione numquam magnam beatae ducimus. Nesciunt, exercitationem ipsam dolores aut distinctio accusamus eligendi velit doloribus odit deleniti magni aspernatur, rem similique. Voluptates architecto ipsa nobis temporibus, eveniet reiciendis quisquam ab tempora ratione dolor asperiores perferendis expedita laboriosam deserunt tempore in quae incidunt voluptatibus. Dolore sit porro deserunt. Error dolore sit ullam, voluptatum nihil accusamus! Exercitationem corrupti quasi repellendus possimus nesciunt! Ex accusamus modi itaque, odio fugit unde excepturi nihil, obcaecati, quasi ab labore!',
        },
        {
            id:2,
            image:'04.png',
            title:'10 Simple Tips To Get Acidity And Heartburn Under Coomponents',
            details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam dolorem recusandae voluptate similique? Libero hic, mollitia, maxime dolores incidunt, quaerat labore eligendi tenetur perspiciatis enim laborum sint asperiores. Ducimus voluptatibus doloremque amet quidem ullam voluptas cumque. Accusantium deleniti voluptas velit quidem, reprehenderit nam totam provident minus officia quisquam nesciunt quis placeat modi dolor alias error voluptate laudantium a doloribus? At, porro nulla! Enim dicta illo non cumque, qui accusamus veniam aperiam voluptatem, sunt porro exercitationem ipsum animi eius quam error! Aliquid nostrum praesentium tempore, aliquam velit distinctio sit consectetur harum eligendi enim hic magni sed! Tempore, nobis excepturi maiores blanditiis consectetur corrupti eos, dolorem numquam voluptatem autem, maxime at asperiores eligendi quia officiis? Expedita voluptatum rem, distinctio, eveniet consectetur assumenda explicabo unde animi hic earum ab, fugit asperiores voluptas fugiat accusantium. Sequi expedita ipsam numquam, modi excepturi deserunt dolores magnam autem nam distinctio tenetur fuga minima dolor sint corporis eaque quae ullam quidem voluptate veniam ratione. Voluptatum dicta, quibusdam nostrum voluptates nam sequi iste modi cumque repellat nihil at dolorem officiis provident sapiente. Hic optio nulla dolor sed est accusantium ullam, a beatae nisi, maiores earum! Quis repudiandae vitae quaerat omnis illo magnam alias ab sequi temporibus quos laborum, numquam assumenda error quo sint suscipit animi, ipsam quidem beatae ipsa veniam ducimus iusto maxime molestias. Nisi odit asperiores laborum quasi corporis minima non sit quidem, minus porro tempora alias sed necessitatibus voluptatem. Ipsa deleniti eos repellat reiciendis, vel eum magni dolor quo, ex, optio repellendus fugit in alias! Aperiam eligendi nam dicta, nobis atque ipsam quaerat rerum, voluptate fuga error necessitatibus voluptatem accusamus natus doloribus assumenda vero veniam eaque quos similique autem. Repudiandae repellat sed commodi temporibus minima nemo numquam nam omnis, nihil consequuntur voluptate, corporis molestiae, eligendi quae sunt est quia consequatur aut non a vitae sapiente odit! Aliquam iure dolore aut a, adipisci repellendus aspernatur sit similique sapiente amet eligendi. Cupiditate, aperiam. Qui rerum, eum inventore fugit nesciunt odio velit ab consectetur tempore eaque molestiae beatae quasi modi quisquam necessitatibus praesentium eius dolores reprehenderit accusamus voluptatum? Magni recusandae aliquam, dicta cum deleniti voluptate voluptas consectetur ad odit ullam repellendus iusto assumenda quas error ex et corrupti iste delectus accusamus quo dolores incidunt molestiae laudantium cupiditate! Sunt expedita, quo nihil laborum sit tempora quis eligendi minima voluptate quidem esse neque, aliquid exercitationem ex! Nemo minima eligendi ea non sequi dolor unde perspiciatis debitis iste? Dolorum facere ex maxime repudiandae laboriosam error a et, aliquam sint ducimus ipsum veniam sequi quo nihil officia iusto! Doloribus enim nisi dolor reiciendis illo esse totam adipisci impedit dicta, labore, ratione numquam magnam beatae ducimus. Nesciunt, exercitationem ipsam dolores aut distinctio accusamus eligendi velit doloribus odit deleniti magni aspernatur, rem similique. Voluptates architecto ipsa nobis temporibus, eveniet reiciendis quisquam ab tempora ratione dolor asperiores perferendis expedita laboriosam deserunt tempore in quae incidunt voluptatibus. Dolore sit porro deserunt. Error dolore sit ullam, voluptatum nihil accusamus! Exercitationem corrupti quasi repellendus possimus nesciunt! Ex accusamus modi itaque, odio fugit unde excepturi nihil, obcaecati, quasi ab labore!',
        },
        {
            id:3,
            image:'01.png',
            title:'10 Simple Tips To Get Acidity And Heartburn Under Coomponents',
            details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam dolorem recusandae voluptate similique? Libero hic, mollitia, maxime dolores incidunt, quaerat labore eligendi tenetur perspiciatis enim laborum sint asperiores. Ducimus voluptatibus doloremque amet quidem ullam voluptas cumque. Accusantium deleniti voluptas velit quidem, reprehenderit nam totam provident minus officia quisquam nesciunt quis placeat modi dolor alias error voluptate laudantium a doloribus? At, porro nulla! Enim dicta illo non cumque, qui accusamus veniam aperiam voluptatem, sunt porro exercitationem ipsum animi eius quam error! Aliquid nostrum praesentium tempore, aliquam velit distinctio sit consectetur harum eligendi enim hic magni sed! Tempore, nobis excepturi maiores blanditiis consectetur corrupti eos, dolorem numquam voluptatem autem, maxime at asperiores eligendi quia officiis? Expedita voluptatum rem, distinctio, eveniet consectetur assumenda explicabo unde animi hic earum ab, fugit asperiores voluptas fugiat accusantium. Sequi expedita ipsam numquam, modi excepturi deserunt dolores magnam autem nam distinctio tenetur fuga minima dolor sint corporis eaque quae ullam quidem voluptate veniam ratione. Voluptatum dicta, quibusdam nostrum voluptates nam sequi iste modi cumque repellat nihil at dolorem officiis provident sapiente. Hic optio nulla dolor sed est accusantium ullam, a beatae nisi, maiores earum! Quis repudiandae vitae quaerat omnis illo magnam alias ab sequi temporibus quos laborum, numquam assumenda error quo sint suscipit animi, ipsam quidem beatae ipsa veniam ducimus iusto maxime molestias. Nisi odit asperiores laborum quasi corporis minima non sit quidem, minus porro tempora alias sed necessitatibus voluptatem. Ipsa deleniti eos repellat reiciendis, vel eum magni dolor quo, ex, optio repellendus fugit in alias! Aperiam eligendi nam dicta, nobis atque ipsam quaerat rerum, voluptate fuga error necessitatibus voluptatem accusamus natus doloribus assumenda vero veniam eaque quos similique autem. Repudiandae repellat sed commodi temporibus minima nemo numquam nam omnis, nihil consequuntur voluptate, corporis molestiae, eligendi quae sunt est quia consequatur aut non a vitae sapiente odit! Aliquam iure dolore aut a, adipisci repellendus aspernatur sit similique sapiente amet eligendi. Cupiditate, aperiam. Qui rerum, eum inventore fugit nesciunt odio velit ab consectetur tempore eaque molestiae beatae quasi modi quisquam necessitatibus praesentium eius dolores reprehenderit accusamus voluptatum? Magni recusandae aliquam, dicta cum deleniti voluptate voluptas consectetur ad odit ullam repellendus iusto assumenda quas error ex et corrupti iste delectus accusamus quo dolores incidunt molestiae laudantium cupiditate! Sunt expedita, quo nihil laborum sit tempora quis eligendi minima voluptate quidem esse neque, aliquid exercitationem ex! Nemo minima eligendi ea non sequi dolor unde perspiciatis debitis iste? Dolorum facere ex maxime repudiandae laboriosam error a et, aliquam sint ducimus ipsum veniam sequi quo nihil officia iusto! Doloribus enim nisi dolor reiciendis illo esse totam adipisci impedit dicta, labore, ratione numquam magnam beatae ducimus. Nesciunt, exercitationem ipsam dolores aut distinctio accusamus eligendi velit doloribus odit deleniti magni aspernatur, rem similique. Voluptates architecto ipsa nobis temporibus, eveniet reiciendis quisquam ab tempora ratione dolor asperiores perferendis expedita laboriosam deserunt tempore in quae incidunt voluptatibus. Dolore sit porro deserunt. Error dolore sit ullam, voluptatum nihil accusamus! Exercitationem corrupti quasi repellendus possimus nesciunt! Ex accusamus modi itaque, odio fugit unde excepturi nihil, obcaecati, quasi ab labore!',
        },
        {
            id:4,
            image:'02.png',
            title:'10 Simple Tips To Get Acidity And Heartburn Under Coomponents',
            details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam dolorem recusandae voluptate similique? Libero hic, mollitia, maxime dolores incidunt, quaerat labore eligendi tenetur perspiciatis enim laborum sint asperiores. Ducimus voluptatibus doloremque amet quidem ullam voluptas cumque. Accusantium deleniti voluptas velit quidem, reprehenderit nam totam provident minus officia quisquam nesciunt quis placeat modi dolor alias error voluptate laudantium a doloribus? At, porro nulla! Enim dicta illo non cumque, qui accusamus veniam aperiam voluptatem, sunt porro exercitationem ipsum animi eius quam error! Aliquid nostrum praesentium tempore, aliquam velit distinctio sit consectetur harum eligendi enim hic magni sed! Tempore, nobis excepturi maiores blanditiis consectetur corrupti eos, dolorem numquam voluptatem autem, maxime at asperiores eligendi quia officiis? Expedita voluptatum rem, distinctio, eveniet consectetur assumenda explicabo unde animi hic earum ab, fugit asperiores voluptas fugiat accusantium. Sequi expedita ipsam numquam, modi excepturi deserunt dolores magnam autem nam distinctio tenetur fuga minima dolor sint corporis eaque quae ullam quidem voluptate veniam ratione. Voluptatum dicta, quibusdam nostrum voluptates nam sequi iste modi cumque repellat nihil at dolorem officiis provident sapiente. Hic optio nulla dolor sed est accusantium ullam, a beatae nisi, maiores earum! Quis repudiandae vitae quaerat omnis illo magnam alias ab sequi temporibus quos laborum, numquam assumenda error quo sint suscipit animi, ipsam quidem beatae ipsa veniam ducimus iusto maxime molestias. Nisi odit asperiores laborum quasi corporis minima non sit quidem, minus porro tempora alias sed necessitatibus voluptatem. Ipsa deleniti eos repellat reiciendis, vel eum magni dolor quo, ex, optio repellendus fugit in alias! Aperiam eligendi nam dicta, nobis atque ipsam quaerat rerum, voluptate fuga error necessitatibus voluptatem accusamus natus doloribus assumenda vero veniam eaque quos similique autem. Repudiandae repellat sed commodi temporibus minima nemo numquam nam omnis, nihil consequuntur voluptate, corporis molestiae, eligendi quae sunt est quia consequatur aut non a vitae sapiente odit! Aliquam iure dolore aut a, adipisci repellendus aspernatur sit similique sapiente amet eligendi. Cupiditate, aperiam. Qui rerum, eum inventore fugit nesciunt odio velit ab consectetur tempore eaque molestiae beatae quasi modi quisquam necessitatibus praesentium eius dolores reprehenderit accusamus voluptatum? Magni recusandae aliquam, dicta cum deleniti voluptate voluptas consectetur ad odit ullam repellendus iusto assumenda quas error ex et corrupti iste delectus accusamus quo dolores incidunt molestiae laudantium cupiditate! Sunt expedita, quo nihil laborum sit tempora quis eligendi minima voluptate quidem esse neque, aliquid exercitationem ex! Nemo minima eligendi ea non sequi dolor unde perspiciatis debitis iste? Dolorum facere ex maxime repudiandae laboriosam error a et, aliquam sint ducimus ipsum veniam sequi quo nihil officia iusto! Doloribus enim nisi dolor reiciendis illo esse totam adipisci impedit dicta, labore, ratione numquam magnam beatae ducimus. Nesciunt, exercitationem ipsam dolores aut distinctio accusamus eligendi velit doloribus odit deleniti magni aspernatur, rem similique. Voluptates architecto ipsa nobis temporibus, eveniet reiciendis quisquam ab tempora ratione dolor asperiores perferendis expedita laboriosam deserunt tempore in quae incidunt voluptatibus. Dolore sit porro deserunt. Error dolore sit ullam, voluptatum nihil accusamus! Exercitationem corrupti quasi repellendus possimus nesciunt! Ex accusamus modi itaque, odio fugit unde excepturi nihil, obcaecati, quasi ab labore!',
        },
        {
            id:5,
            image:'03.png',
            title:'10 Simple Tips To Get Acidity And Heartburn Under Coomponents',
            details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam dolorem recusandae voluptate similique? Libero hic, mollitia, maxime dolores incidunt, quaerat labore eligendi tenetur perspiciatis enim laborum sint asperiores. Ducimus voluptatibus doloremque amet quidem ullam voluptas cumque. Accusantium deleniti voluptas velit quidem, reprehenderit nam totam provident minus officia quisquam nesciunt quis placeat modi dolor alias error voluptate laudantium a doloribus? At, porro nulla! Enim dicta illo non cumque, qui accusamus veniam aperiam voluptatem, sunt porro exercitationem ipsum animi eius quam error! Aliquid nostrum praesentium tempore, aliquam velit distinctio sit consectetur harum eligendi enim hic magni sed! Tempore, nobis excepturi maiores blanditiis consectetur corrupti eos, dolorem numquam voluptatem autem, maxime at asperiores eligendi quia officiis? Expedita voluptatum rem, distinctio, eveniet consectetur assumenda explicabo unde animi hic earum ab, fugit asperiores voluptas fugiat accusantium. Sequi expedita ipsam numquam, modi excepturi deserunt dolores magnam autem nam distinctio tenetur fuga minima dolor sint corporis eaque quae ullam quidem voluptate veniam ratione. Voluptatum dicta, quibusdam nostrum voluptates nam sequi iste modi cumque repellat nihil at dolorem officiis provident sapiente. Hic optio nulla dolor sed est accusantium ullam, a beatae nisi, maiores earum! Quis repudiandae vitae quaerat omnis illo magnam alias ab sequi temporibus quos laborum, numquam assumenda error quo sint suscipit animi, ipsam quidem beatae ipsa veniam ducimus iusto maxime molestias. Nisi odit asperiores laborum quasi corporis minima non sit quidem, minus porro tempora alias sed necessitatibus voluptatem. Ipsa deleniti eos repellat reiciendis, vel eum magni dolor quo, ex, optio repellendus fugit in alias! Aperiam eligendi nam dicta, nobis atque ipsam quaerat rerum, voluptate fuga error necessitatibus voluptatem accusamus natus doloribus assumenda vero veniam eaque quos similique autem. Repudiandae repellat sed commodi temporibus minima nemo numquam nam omnis, nihil consequuntur voluptate, corporis molestiae, eligendi quae sunt est quia consequatur aut non a vitae sapiente odit! Aliquam iure dolore aut a, adipisci repellendus aspernatur sit similique sapiente amet eligendi. Cupiditate, aperiam. Qui rerum, eum inventore fugit nesciunt odio velit ab consectetur tempore eaque molestiae beatae quasi modi quisquam necessitatibus praesentium eius dolores reprehenderit accusamus voluptatum? Magni recusandae aliquam, dicta cum deleniti voluptate voluptas consectetur ad odit ullam repellendus iusto assumenda quas error ex et corrupti iste delectus accusamus quo dolores incidunt molestiae laudantium cupiditate! Sunt expedita, quo nihil laborum sit tempora quis eligendi minima voluptate quidem esse neque, aliquid exercitationem ex! Nemo minima eligendi ea non sequi dolor unde perspiciatis debitis iste? Dolorum facere ex maxime repudiandae laboriosam error a et, aliquam sint ducimus ipsum veniam sequi quo nihil officia iusto! Doloribus enim nisi dolor reiciendis illo esse totam adipisci impedit dicta, labore, ratione numquam magnam beatae ducimus. Nesciunt, exercitationem ipsam dolores aut distinctio accusamus eligendi velit doloribus odit deleniti magni aspernatur, rem similique. Voluptates architecto ipsa nobis temporibus, eveniet reiciendis quisquam ab tempora ratione dolor asperiores perferendis expedita laboriosam deserunt tempore in quae incidunt voluptatibus. Dolore sit porro deserunt. Error dolore sit ullam, voluptatum nihil accusamus! Exercitationem corrupti quasi repellendus possimus nesciunt! Ex accusamus modi itaque, odio fugit unde excepturi nihil, obcaecati, quasi ab labore!',
        },
        {
            id:6,
            image:'04.png',
            title:'10 Simple Tips To Get Acidity And Heartburn Under Coomponents',
            details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit veniam dolorem recusandae voluptate similique? Libero hic, mollitia, maxime dolores incidunt, quaerat labore eligendi tenetur perspiciatis enim laborum sint asperiores. Ducimus voluptatibus doloremque amet quidem ullam voluptas cumque. Accusantium deleniti voluptas velit quidem, reprehenderit nam totam provident minus officia quisquam nesciunt quis placeat modi dolor alias error voluptate laudantium a doloribus? At, porro nulla! Enim dicta illo non cumque, qui accusamus veniam aperiam voluptatem, sunt porro exercitationem ipsum animi eius quam error! Aliquid nostrum praesentium tempore, aliquam velit distinctio sit consectetur harum eligendi enim hic magni sed! Tempore, nobis excepturi maiores blanditiis consectetur corrupti eos, dolorem numquam voluptatem autem, maxime at asperiores eligendi quia officiis? Expedita voluptatum rem, distinctio, eveniet consectetur assumenda explicabo unde animi hic earum ab, fugit asperiores voluptas fugiat accusantium. Sequi expedita ipsam numquam, modi excepturi deserunt dolores magnam autem nam distinctio tenetur fuga minima dolor sint corporis eaque quae ullam quidem voluptate veniam ratione. Voluptatum dicta, quibusdam nostrum voluptates nam sequi iste modi cumque repellat nihil at dolorem officiis provident sapiente. Hic optio nulla dolor sed est accusantium ullam, a beatae nisi, maiores earum! Quis repudiandae vitae quaerat omnis illo magnam alias ab sequi temporibus quos laborum, numquam assumenda error quo sint suscipit animi, ipsam quidem beatae ipsa veniam ducimus iusto maxime molestias. Nisi odit asperiores laborum quasi corporis minima non sit quidem, minus porro tempora alias sed necessitatibus voluptatem. Ipsa deleniti eos repellat reiciendis, vel eum magni dolor quo, ex, optio repellendus fugit in alias! Aperiam eligendi nam dicta, nobis atque ipsam quaerat rerum, voluptate fuga error necessitatibus voluptatem accusamus natus doloribus assumenda vero veniam eaque quos similique autem. Repudiandae repellat sed commodi temporibus minima nemo numquam nam omnis, nihil consequuntur voluptate, corporis molestiae, eligendi quae sunt est quia consequatur aut non a vitae sapiente odit! Aliquam iure dolore aut a, adipisci repellendus aspernatur sit similique sapiente amet eligendi. Cupiditate, aperiam. Qui rerum, eum inventore fugit nesciunt odio velit ab consectetur tempore eaque molestiae beatae quasi modi quisquam necessitatibus praesentium eius dolores reprehenderit accusamus voluptatum? Magni recusandae aliquam, dicta cum deleniti voluptate voluptas consectetur ad odit ullam repellendus iusto assumenda quas error ex et corrupti iste delectus accusamus quo dolores incidunt molestiae laudantium cupiditate! Sunt expedita, quo nihil laborum sit tempora quis eligendi minima voluptate quidem esse neque, aliquid exercitationem ex! Nemo minima eligendi ea non sequi dolor unde perspiciatis debitis iste? Dolorum facere ex maxime repudiandae laboriosam error a et, aliquam sint ducimus ipsum veniam sequi quo nihil officia iusto! Doloribus enim nisi dolor reiciendis illo esse totam adipisci impedit dicta, labore, ratione numquam magnam beatae ducimus. Nesciunt, exercitationem ipsam dolores aut distinctio accusamus eligendi velit doloribus odit deleniti magni aspernatur, rem similique. Voluptates architecto ipsa nobis temporibus, eveniet reiciendis quisquam ab tempora ratione dolor asperiores perferendis expedita laboriosam deserunt tempore in quae incidunt voluptatibus. Dolore sit porro deserunt. Error dolore sit ullam, voluptatum nihil accusamus! Exercitationem corrupti quasi repellendus possimus nesciunt! Ex accusamus modi itaque, odio fugit unde excepturi nihil, obcaecati, quasi ab labore!',
        },
    ]
    return (
        <div className='health_article_body row'>
            {posts.map(post=>(
                <div className="col-12 col-md-3" key={post.id}>
                        <Article key={post.id} post={post}/>
                    </div>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBody)