export const navigatorShare = (id) => {

    const hasShare = navigator.share;

    const shareData = {
        title: 'Article Preview Component',
        url: id,
    }

    if(hasShare)
        navigator.share(shareData)
    else
        navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`)

}