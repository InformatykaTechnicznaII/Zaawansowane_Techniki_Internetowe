import SpeakerModule.Speaker;
import SpeakerModule.Track;
import com.zeroc.Ice.Current;

public class SpeakerI implements Speaker {
    boolean isTurnedOn;
    boolean isPlaying;
    Track currentTrack;

    public SpeakerI() {
        isTurnedOn = false;
        isPlaying = false;
        currentTrack = new Track("none", "none");
    }

    public SpeakerI(boolean isTurnedOn, boolean isPlaying, Track currentTrack) {
        this.isTurnedOn = isTurnedOn;
        this.isPlaying = isPlaying;
        this.currentTrack = currentTrack;
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
    public boolean play(Current current) {
        isPlaying = true;
        return true;
    }

    @Override
    public boolean pause(Current current) {
        isPlaying = false;
        return true;
    }

    @Override
    public boolean setTrack(Track track, Current current) {
        currentTrack = track;
        return true;
    }

    @Override
    public Track getCurrentTrack(Current current) {
        return currentTrack;
    }
}
