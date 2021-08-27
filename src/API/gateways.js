const key = 'AIzaSyCBFtDjKegL9nuvU1BxTH0t1YERDEm5mtw'; // 'AIzaSyCBFtDjKegL9nuvU1BxTH0t1YERDEm5mtw' \ AIzaSyAA4wioIXprC3PE3n2WL6CXu2DZZXGq5S8
const popularUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&maxResults=8&
part=recordingDetails&part=player&chart=mostPopular&key=${key}`;

export default class Request {
    static async getPopular() {
        let arrChannels = [];
        
        const response = await fetch(popularUrl);
        if (response.status == 200) {
            let json = await response.json();


            await (async function (array) {

                for (let item of array) {

                    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${key}`)
                    let json = await response.json();
                    arrChannels.push(json.items[0]);
                }
            })(json.items);
            return [json.items, arrChannels, json.nextPageToken];
        }
    };

    static async getSearch(input) {
        let arrChannels = [];
        let arr = [];

        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${input}&type=video&key=${key}`);
        if (response.status == 200) {
            let json = await response.json();

            await (async function (array) {

                for (let item of array) {

                    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${key}`)
                    let json = await response.json();
                    arrChannels.push(json.items[0]);
                }
            })(json.items);

            await (async function (array) {
                
                for (let item of array) {

                    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${key}`);
                    
                    if (response.status == 200) {
                        let json = await response.json();
                        arr.push(json.items[0]);
                    }
                }
            })(json.items);
            return [json.items, arrChannels, arr, json.nextPageToken];
        }
    };

    static async getPlayer() {
        let response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&part=snippet&id=${location.search.slice(2)}&key=${key}`);
        if (response.status == 200) {
            let json = await response.json();
            let resChannel = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${json.items[0].snippet.channelId}&key=${key}`);

            if (resChannel.status == 200) {
                let jsonChannel = await resChannel.json();
                return [json.items[0], jsonChannel.items[0]];
            }
        }
    };

    static async getMore(token) {
        let arr = [];
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&maxResults=4&
        part=recordingDetails&part=player&pageToken=${token}&chart=mostPopular&key=${key}`);
        if (response.status == 200) {
            let json = await response.json();
            await (async function (array) {

                for (let item of array) {

                    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${key}`)
                    let json = await response.json();
                    arr.push(json.items[0]);
                }
            })(json.items);

            return [json.items, arr, json.nextPageToken];
        }
    }

    static async getMoreSearch(token, input) {
        let arrChannels = [];
        let arr = [];

        let response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&pageToken=${token}&q=${input}&key=${key}`);
        if (response.status === 200) {
            let json = await response.json();
            await (async function(array) {
                for (let item of array) {

                    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=${key}`);
                    if (response.status === 200) {
                        let json = await response.json();
                        arrChannels.push(json.items[0]);
                    }
                }
            })(json.items)

            await (async function (array) {
                
                for (let item of array) {

                    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=statistics&id=${item.id.videoId}&key=${key}`);
                    
                    if (response.status == 200) {
                        let json = await response.json();
                        arr.push(json.items[0]);
                    }
                }
            })(json.items);
            return [json.items, arrChannels, arr, json.nextPageToken];
        }
    }
};
