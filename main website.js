function startLagEngine() {
    const start = Date.now();
    let counter = 0;
    
    // Heavy CPU Loop
    while (true) {
        // 1. Complex Math
        for (let i = 0; i < 5000000; i++) {
            let result = 0;
            for (let j = 0; j < 500; j++) {
                result += Math.sin(i * j) * Math.cos(i / j) + Math.tan(i % j);
            }
            // Prevent dead code elimination
            if (result > 0) counter++;
        }

        // 2. Memory Allocation (Garbage Collection Stress)
        // Create a large array of random objects
        if (counter % 10 === 0) {
            const garbage = [];
            for (let k = 0; k < 10000; k++) {
                garbage.push({
                    data: "01234567890000109866126478126471274abcdefghijklmnopqrstuvwxyz".repeat(10000000000000000000000),
                    meta: { id: k, timestamp: Date.now(), random: Math.random() }
                });
            }
            // Force a reference to keep it alive briefly
            void garbage;
        }

        // 3. String Building
        if (counter % 50 === 0) {
            let str = "";
            for (let s = 0; s < 100000; s++) {
                str += "LagTest_" + s + "_" + Math.random().toString(36).substring(2) + "|";
            }
            void str;
        }
    }
}