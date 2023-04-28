import BulbModule.Colour;
import SpeakerModule.Track;
import com.zeroc.Ice.*;

import java.lang.Exception;

public class IceServer {
    public void t1(String[] args){
        int status = 0;
        Communicator communicator = null;
        try	{
            // 1. Inicjalizacja ICE - utworzenie communicatora
            communicator = Util.initialize(args);

            // 2. Konfiguracja adaptera
            int port = Integer.parseInt(args[0]);
            ObjectAdapter adapter = communicator.createObjectAdapterWithEndpoints("Adapter1", String.format("tcp -h 127.0.0.2 -p %d -z : udp -h 127.0.0.2 -p %d -z", port, port));

            // 3. Stworzenie serwanta/serwantów
            BulbI bulbServant1 = new BulbI(false, new Colour(255, 255, 0));
            BulbI bulbServant2 = new BulbI(true, new Colour(0, 0, 0));
            BrightnessControlBulb brightnessControlBulbServant1 = new BrightnessControlBulb(true, new Colour(0, 0, 0), 15);
            DiscoBulb discoBulbServant1 = new DiscoBulb(false, new Colour(255, 0, 235), 12);
            SpeakerI speakerServant1 = new SpeakerI(false, false, new Track("none", "none"));
            SpeakerI speakerServant2 = new SpeakerI(true, false, new Track("none", "none"));
            SpeakerI speakerServant3 = new SpeakerI(true, true, new Track("a-ha", "Take On Me"));
            ThermostatI thermostatServant1 = new ThermostatI(25);

            // 4. Dodanie wpisów do tablicy ASM, skojarzenie nazwy obiektu (Identity) z serwantem
            adapter.add(bulbServant1, new Identity("bulb11", "bulb"));
            adapter.add(bulbServant2, new Identity("bulb22", "bulb"));
            adapter.add(brightnessControlBulbServant1, new Identity("brightBulb11", "brightnessControlBulb"));
            adapter.add(discoBulbServant1, new Identity("discoBulb11", "discoBulb"));
            adapter.add(speakerServant1, new Identity("speaker11", "speaker"));
            adapter.add(speakerServant2, new Identity("speaker22", "speaker"));
            adapter.add(speakerServant3, new Identity("speaker33", "speaker"));
            adapter.add(thermostatServant1, new Identity("thermostat11", "thermostat"));

            // 5. Aktywacja adaptera i wejście w pętlę przetwarzania żądań
            adapter.activate();

            System.out.println("Server listening on port " + port);

            communicator.waitForShutdown();

        }
        catch (Exception e) {
            System.err.println(e);
            status = 1;
        }
        if (communicator != null) {
            try {
                communicator.destroy();
            }
            catch (Exception e) {
                System.err.println(e);
                status = 1;
            }
        }
        System.exit(status);
    }

    public static void main(String[] args)
    {
        IceServer app = new IceServer();
        app.t1(args);
    }
}
