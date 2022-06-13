export const getPosts = async () => {
    const WPAPI = require('wpapi');
    const wp = new WPAPI({endpoint: process.env.WP_ENDPOINT});
    const result = await wp.posts().embed().get();

    result.forEach(function (post, index, result) {
        result[index].featured_image = post._embedded['wp:featuredmedia'][0].source_url || '';
        result[index].title = post.title.rendered;
        result[index].excerpt = post.excerpt.rendered.replace(/<[^>]*>?/gm, '');
    });

    return result;
}