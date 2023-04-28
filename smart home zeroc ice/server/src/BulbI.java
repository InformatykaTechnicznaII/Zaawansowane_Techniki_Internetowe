import BulbModule.Bulb;
import BulbModule.Colour;
import com.zeroc.Ice.Current;

public class BulbI implements Bulb{
    private boolean isTurnedOn;
    private Colour colour;

    public BulbI() {
        isTurnedOn = false;
        colour = new Colour(0, 0, 0);
    }

    public BulbI(boolean isTurnedOn, Colour colour) {
        this.isTurnedOn = isTurnedOn;
        this.colour = colour;
    }

    @Override
    public boolean turnOn(Current current) {
        isTurnedOn = true;
        return true;
    }

    @Override
    public boolean turnOff(Current current) {
        isTurnedOn = false;
        return true;
    }

    @Override
    public boolean changeColour(Colour colour, Current current) {
        this.colour = colour;
        return true;
    }

    @Override
    public boolean isTurnedOn(Current current) {
        return isTurnedOn;
    }

    @Override
    public Colour getColour(Current current) {
        return colour;
    }
}
