#ifndef BULB_ICE
#define BULB_ICE

module BulbModule

{

  exception NoInput {};

  struct Colour
  {
    int red;
    int green;
    int blue;
  };

  interface Bulb
  {
    idempotent bool turnOn(); //turnOn(string name);
    idempotent bool turnOff();
    idempotent bool changeColour(Colour colour);
    idempotent bool isTurnedOn();
    idempotent Colour getColour();
  };

};

#endif
