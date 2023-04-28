import ThermostatModule.Thermostat;
import com.zeroc.Ice.Current;

import java.text.DecimalFormat;

public class ThermostatI implements Thermostat {
    int temperature;

    public ThermostatI() {
        temperature = 0;
    }

    public ThermostatI(int temperature) {
        this.temperature = temperature;
    }

    @Override
    public int getTemperature(Current current) {
        return temperature;
    }

    @Override
    public boolean setTemperature(int temperature, Current current) {
        this.temperature = temperature;
        return true;
    }
}
