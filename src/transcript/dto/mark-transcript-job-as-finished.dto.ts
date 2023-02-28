import { Utterance } from '../schemas/utterance.schema';
export class MarkTranscriptJobAsFinishedDto {
  transcription_job_id: string;
  utterances: Utterance[];
}
