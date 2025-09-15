public class Lasagna {

    // 1. Expected minutes in oven (always 40)
    public int expectedMinutesInOven() {
        return 40;
    }

    // 2. Remaining minutes in oven (expected - actual)
    public int remainingMinutesInOven(int actualMinutesInOven) {
        return expectedMinutesInOven() - actualMinutesInOven;
    }

    // 3. Preparation time: 2 minutes per layer
    public int preparationTimeInMinutes(int numberOfLayers) {
        return 2 * numberOfLayers;
    }

    // 4. Total time = preparation time + oven time already elapsed
    public int totalTimeInMinutes(int numberOfLayers, int actualMinutesInOven) {
        return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
    }
}
