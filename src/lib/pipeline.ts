/**
 * The production pipeline, in order. Every tool and claim here is lifted from the
 * existing site copy (About stack list, CineFlow card, project details).
 */
export interface PipelineTool {
  tool: string;
  use: string;
}

export interface PipelineStage {
  id: string;
  name: string;
  summary: string;
  tools: PipelineTool[];
}

export const PIPELINE: PipelineStage[] = [
  {
    id: "script",
    name: "Your script",
    summary: "You send the script. I produce the video from it.",
    tools: [
      {
        tool: "CineFlow",
        use: "My own tool: turns a script into timed voice tracks, generation prompts, and a draft assembly",
      },
    ],
  },
  {
    id: "voice",
    name: "Voice",
    summary: "Voiceover is generated and timed before any shot is generated.",
    tools: [{ tool: "ElevenLabs", use: "Voiceover generation" }],
  },
  {
    id: "reference",
    name: "Reference",
    summary: "The character is locked once: same face, same outfit, shot to shot.",
    tools: [
      { tool: "Google Flow", use: "Character locks and reference images" },
      { tool: "Nano Banana Pro", use: "Hero references on The CEO's Forbidden Assistant" },
    ],
  },
  {
    id: "shot",
    name: "Shot",
    summary: "Each shot generated frame by frame, so the picture matches the words.",
    tools: [
      {
        tool: "ComfyUI (local)",
        use: "Wan 2.2 14B and MiniMax H3 image-to-video, self-hosted",
      },
      { tool: "MiniMax H3", use: "Primary generator, about 3-4 min per 5-second shot" },
      { tool: "Wan 2.2 14B I2V", use: "Fallback generator, 24fps native duration" },
      { tool: "Veo 3.1 / 3.1 Lite", use: "Hero shots and native in-shot dialogue" },
    ],
  },
  {
    id: "cut",
    name: "Cut",
    summary: "Edited into a final sequence.",
    tools: [{ tool: "CapCut / Premiere Pro", use: "Editing and final assembly" }],
  },
];
