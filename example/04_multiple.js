const generator = require("../index");

(async ()=>{

    await generator
        .TextStyle2BitmapFont(
            {
                textStyle: {
                    fontFamily: 'Arial',
                    fontSize: '25px',
                    color: '#19db6d',
                }
            }
        );

    await generator
        .TextStyle2BitmapFont(
            {
                textStyle: {
                    fontFamily: 'Impact',
                    fontSize: '50px',
                    color: '#db7128',
                }
            }
        );

    return process.exit(1);

})();

