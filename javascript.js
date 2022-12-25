const n = line[0]
const c = line[1]
const H = line[2]

    function wallClimber(arr) {
        const n = arr[0];
        const m = arr[1];
        const H = arr[2];

        const currentHeight = 0;
        const daysTaken = 0;

        if (n >= H) {
            return 1;
        } 

        for (let i = 0; i <= H; i++) {
            currentHeight += n;
            daysTaken ++;

            if (currentHeight >= H) {
                return daysTaken;
            }

            currentHeight -= m;

            if (i > 1000) {
                return false;
            }
        }
    }

