export const checkPolicy = async(ctx, next) => {
    const url = ctx.url;
    console.log(url);
    await next();
}