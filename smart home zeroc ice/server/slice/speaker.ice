#ifndef SPEAKER_ICE
#define SPEAKER_ICE

module SpeakerModule

{

  exception NoInput {};

  struct Track
  {
    string artist;
    string title;
  };

  interface Speaker
  {
    idempotent bool turnOn(); //turnOn(string name);
    idempotent bool turnOff();
    idempotent bool play();
    idempotent bool pause();
    idempotent bool setTrack(Track track);
    idempotent Track getCurrentTrack();
  };

};

#endif
