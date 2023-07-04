import { Event } from '../../constants';

import type { PlaybackState } from '../PlaybackState';
import type { PlaybackActiveTrackChangedEvent } from './PlaybackActiveTrackChangedEvent';
import type { PlaybackErrorEvent } from './PlaybackErrorEvent';
import type { PlaybackMetadataReceivedEvent } from './PlaybackMetadataReceivedEvent';
import type { PlaybackPlayWhenReadyChangedEvent } from './PlaybackPlayWhenReadyChangedEvent';
import type { PlaybackProgressUpdatedEvent } from './PlaybackProgressUpdatedEvent';
import type { PlaybackQueueEndedEvent } from './PlaybackQueueEndedEvent';
import type { PlaybackTrackChangedEvent } from './PlaybackTrackChangedEvent';
import { PlayerErrorEvent } from './PlayerErrorEvent';
import type { RemoteDuckEvent } from './RemoteDuckEvent';
import type { RemoteJumpBackwardEvent } from './RemoteJumpBackwardEvent';
import type { RemoteJumpForwardEvent } from './RemoteJumpForwardEvent';
import type { RemotePlayIdEvent } from './RemotePlayIdEvent';
import type { RemotePlaySearchEvent } from './RemotePlaySearchEvent';
import type { RemoteSeekEvent } from './RemoteSeekEvent';
import type { RemoteSetRatingEvent } from './RemoteSetRatingEvent';
import type { RemoteSkipEvent } from './RemoteSkipEvent';

export interface EventPayloadByEvent {
  [Event.PlayerError]: PlayerErrorEvent;
  [Event.PlaybackState]: PlaybackState;
  [Event.PlaybackError]: PlaybackErrorEvent;
  [Event.PlaybackQueueEnded]: PlaybackQueueEndedEvent;
  [Event.PlaybackTrackChanged]: PlaybackTrackChangedEvent;
  [Event.PlaybackActiveTrackChanged]: PlaybackActiveTrackChangedEvent;
  [Event.PlaybackMetadataReceived]: PlaybackMetadataReceivedEvent;
  [Event.PlaybackPlayWhenReadyChanged]: PlaybackPlayWhenReadyChangedEvent;
  [Event.PlaybackProgressUpdated]: PlaybackProgressUpdatedEvent;
  [Event.RemotePlay]: never;
  [Event.RemotePlayId]: RemotePlayIdEvent;
  [Event.RemotePlaySearch]: RemotePlaySearchEvent;
  [Event.RemotePause]: never;
  [Event.RemoteStop]: never;
  [Event.RemoteSkip]: RemoteSkipEvent;
  [Event.RemoteNext]: never;
  [Event.RemotePrevious]: never;
  [Event.RemoteJumpForward]: RemoteJumpForwardEvent;
  [Event.RemoteJumpBackward]: RemoteJumpBackwardEvent;
  [Event.RemoteSeek]: RemoteSeekEvent;
  [Event.RemoteSetRating]: RemoteSetRatingEvent;
  [Event.RemoteDuck]: RemoteDuckEvent;
  [Event.RemoteLike]: never;
  [Event.RemoteDislike]: never;
  [Event.RemoteBookmark]: never;
}