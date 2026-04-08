Records of Resistance — AI 201: Hero Faction Screen
A log of moments where AI output was rejected, revised, or redirected by the Art Director. These records document creative agency and authorship decisions made by the human.

Resistance Record 1
What AI produced:
During Session 2, when Claude Code was given the infrastructure scaffold prompt, it began generating design questions unprompted — asking about theme, mood, number of characters, and color palette before any creative direction had been given.
Why I rejected/revised it:
This was a direct violation of the Art Director boundary established at the start of the project. The Design Intent had not yet been written. AI touching creative decisions before the human spec exists defeats the entire purpose of the ESF workflow — the spec must precede the code, not emerge from AI suggestions.
What I did instead:
Stopped Claude Code immediately. Responded: "That is my work. I will do that and hand it to you when I am ready." Redirected AI to infrastructure only. Design Intent was written entirely by hand before Session 3 began.

Resistance Record 2
What AI produced:
During Session 4, Claude assumed generic filenames for all character and background images — character-60s.png, background-60s.png — when wiring image src attributes in the carousel JavaScript.
Why I rejected/revised it:
My actual exported files use the -FINAL suffix. The assumed filenames did not match the assets on disk, causing all character and background images to fail loading entirely. AI made an assumption about my file naming without asking.
What I did instead:
Directed Claude to update every image reference across index.html and selector.js to use the correct -FINAL suffix filenames matching my actual assets. Documented this as a reminder that AI assumptions about asset naming are unreliable — file conventions belong to the Art Director.

Resistance Record 3
What AI produced:
Gemini rendered Kate Moss with an older, harder facial structure — the face read as mid-30s rather than the early 20s specified. The bone structure was more angular and gaunt than the young 1990s Kate Moss the Design Intent called for.
Why I rejected/revised it:
The face is the identity of the character. The 1990s Calvin Klein aesthetic was defined specifically by Kate Moss's youth — the waif-like, barely-there quality that made her radical in that era. An older face directly contradicts the heroin chic narrative the card is supposed to communicate. Accepting this would have meant accepting a character that told the wrong story.
What I did instead:
Directed Gemini with precise facial adjustments: softer jawline, rounder cheeks, slightly wider more open eyes, smoother skin with fewer hard shadows. Kept everything below the neck completely unchanged. Result matched the young Kate Moss reference.

Resistance Record 4
What AI produced:
The intro overlay sequence was rebuilt three times before a correct version was achieved. First attempt mixed all text stages into one screen simultaneously. Second attempt erased text between stages making the sequence unreadable. Third attempt centered text using text-align: center which caused the typewriter to appear to jump and reposition as each character was added.
Why I rejected/revised it:
The intro was designed as a deliberate cinematic editorial progression — each stage building on the last, all text remaining visible, the typewriter moving naturally left to right within a stable text block. Each failed version broke the cinematic pacing in a different way and made the text actively unreadable. Accepting any of these versions would have undermined the editorial quality the project requires.
What I did instead:
Required a complete rebuild from scratch each time with explicit structural requirements: separate div elements per stage, fixed-width container centered on screen, left-aligned text inside the container, strict rule that no text disappears until the button is clicked. Specified the exact HTML structure rather than letting Claude decide the implementation approach.

Resistance Record 5
What AI produced:
Christie Brinkley was rendered by Gemini with an over-saturated, hyper-glossy appearance across multiple attempts — exaggerated proportions, plastic skin texture, and an overall visual quality resembling mobile entertainment game art rather than luxury fashion CGI.
Why I rejected/revised it:
The 1980s Versace card requires maximum glamour but it must be editorial and high-end — not entertainment product art. The over-rendering violated the visual consistency of the entire character set. All other characters (Twiggy, Lauren Hutton, Kate Moss, Gisele) share a polished CGI illustrated aesthetic. Christie standing out as clearly lower quality would have broken the cohesion of the archive and undermined its luxury fashion positioning.
What I did instead:
Used Twiggy and Kate Moss as reference images in the Gemini prompt, explicitly benchmarking the correct rendering style. Specified what was wrong with the current output (too glossy, too saturated, exaggerated proportions) and what the correct output should feel like (smooth but natural skin, refined fabric rendering, editorial restraint). Result matched the visual language of the other four characters.

Resistance Record 6
What AI produced:
The CSS spotlight effect across multiple era cards appeared as a large circular halo illuminating the entire background image rather than a focused directional light on the character. Multiple CSS approaches were attempted — radial gradient, linear gradient, CSS border triangle — each producing a different incorrect result.
Why I rejected/revised it:
My Design Intent states that the background must never distract from the character. A halo flooding the background surface does the opposite — it draws attention to the environment rather than the model. The spotlight should feel like a theater stage light directed at the character, not a vignette over the whole scene. Every version that made the background glow was rejected because it violated this non-negotiable rule.
What I did instead:
Identified the Kate Moss 1990s card as the only spotlight implementation that worked correctly. Used it as the explicit reference and directed Claude to find that exact CSS implementation and replicate it across the 1960s, 1970s, and 1980s cards rather than generating new approaches. Specified: "copy the exact CSS" rather than "create something similar."
