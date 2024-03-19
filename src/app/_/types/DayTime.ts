type oneToZero = 1|2|3|4|5|6|7|8|9|0;
type oneToNine = 1|2|3|4|5|6|7|8|9;

type yyyy = `2${0|1}${oneToZero}${oneToZero}`;


type MM = `0${oneToNine}` | `1${0|1|2}`;

type dd = `${0}${oneToNine}` | `${1|2}${oneToZero}` | `3${0|1}`;

export type Day = `${yyyy}-${MM}-${dd}`;

type HH = `${0|1}${oneToZero}`| `2${0|1|2|3}`;
type mm = `${0|1|2|3|4}${oneToZero}` | `5${oneToNine}`;

export type Time = `${HH}:${mm}`;

export type DayTime = `${yyyy}-${MM}-${dd} ${HH}:${mm}`;

