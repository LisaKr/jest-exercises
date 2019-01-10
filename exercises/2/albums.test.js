const {getAlbumNames} = require('./albums');
const spotify = require('./spotify');

jest.mock('./spotify');

test('album names are in alphabetical order', () => {

    spotify.search.mockResolvedValue(
        {
            albums: {
                items: [
                    {
                        name: "soethinf else"
                    },

                    {
                        name: "bat out of hell"
                    },

                    {
                        name: "i cant type"
                    }
                ]
            }
        }
    );

    return getAlbumNames('meat loaf').then(
        albumNames => {
            expect(albumNames).toEqual(albumNames.sort());
        }
    );
});
