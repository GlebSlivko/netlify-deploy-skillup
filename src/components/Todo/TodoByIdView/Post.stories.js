import { TodoByIdView } from '../TodoByIdView/TodoByIdView'
import { PostView } from '../PostView/PostView'

export default {
    component: TodoByIdView,
    title: "Posts/Post",
    argTypes: {      
        color: {type: 'string'},        
        variant: {type: 'string'},        
    }
};

const PostViewTemplate = (args) =>  <PostView {...args} />

export const Post = PostViewTemplate.bind({});

Post.args = {
    children:'quis ut nam facilis et officia qui',
    color: "yellow",
    variant: "h4",
};