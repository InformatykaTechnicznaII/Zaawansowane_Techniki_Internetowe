import BulbModule.Colour;

public class BrightnessControlBulb extends BulbI{
    int brightness;

    public BrightnessControlBulb() {
        super();
        brightness = 0;
    }

    public BrightnessControlBulb(int brightness) {
        this.brightness = brightness;
    }

    public BrightnessControlBulb(boolean isTurnedOn, Colour colour, int brightness) {
        super(isTurnedOn, colour);
        this.brightness = brightness;
    }

    public int getBrightness(){
        return brightness;
    }

    public boolean setBrightness(int brightness){
        this.brightness = brightness;
        return true;
    }
}
