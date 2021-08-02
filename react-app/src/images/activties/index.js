import Culture from './culture.jpg';
import CultureSm from './culture-sm.jpg';
import Culture2x from './culture@2x.jpg';

import Games from './games.jpg';
import GamesSm from './games-sm.jpg';
import Games2x from './games@2x.jpg';

import Sports from './sports.jpg';
import SportsSm from './sports-sm.jpg';
import Sports2x from './sports@2x.jpg';

import Enjoyment from './enjoyment.jpg';
import EnjoymentSm from './enjoyment-sm.jpg';
import Enjoyment2x from './enjoyment@2x.jpg';

import ExtremeSport from './extreme-sport.jpg';
import ExtremeSportSm from './extreme-sport-sm.jpg';
import ExtremeSport2x from './extreme-sport@2x.jpg';

import Travelling from './travelling.jpg';
import TravellingSm from './travelling-sm.jpg';
import Travelling2x from './travelling@2x.jpg';

import Wellness from './wellness.jpg';
import WellnessSm from './wellness-sm.jpg';
import Wellness2x from './wellness@2x.jpg';

const activities = {
  culture: { base: Culture, sm: CultureSm, retina: Culture2x },
  games: { base: Games, sm: GamesSm, retina: Games2x },
  sports: { base: Sports, sm: SportsSm, retina: Sports2x },
  enjoyment: { base: Enjoyment, sm: EnjoymentSm, retina: Enjoyment2x },
  extremeSport: {
    base: ExtremeSport,
    sm: ExtremeSportSm,
    retina: ExtremeSport2x,
  },
  travelling: { base: Travelling, sm: TravellingSm, retina: Travelling2x },
  wellness: { base: Wellness, sm: WellnessSm, retina: Wellness2x },
};

export default activities;
