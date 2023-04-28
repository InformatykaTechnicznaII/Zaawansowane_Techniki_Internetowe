import BulbModule.Colour;

public class DiscoBulb extends BulbI{
    int twinkleFrequency;

    public DiscoBulb() {
        super();
        twinkleFrequency = 0;
    }

    public DiscoBulb(int twinkleFrequency) {
        this.twinkleFrequency = twinkleFrequency;
    }

    public DiscoBulb(boolean isTurnedOn, Colour colour, int twinkleFrequency) {
        super(isTurnedOn, colour);
        this.twinkleFrequency = twinkleFrequency;
    }

    public int getTwinkleFrequency(){
        return twinkleFrequency;
    }

    public boolean setTwinkleFrequency(int frequency){
        twinkleFrequency = frequency;
        return true;
    }
}
