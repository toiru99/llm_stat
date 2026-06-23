# AA-Omniscience & Omniscience Index — Methodology

**Sources:**
- Evaluation page: https://artificialanalysis.ai/evaluations/omniscience
- Methodology page: https://artificialanalysis.ai/methodology/intelligence-benchmarking
- Paper: "AA-Omniscience: Evaluating Cross-Domain Knowledge Reliability in Large Language
  Models," arXiv:2511.13029 (Declan Jackson et al.) — PDF saved as `aa-omniscience-2511.13029.pdf`
- Dataset: https://huggingface.co/datasets/ArtificialAnalysis/AA-Omniscience-Public

**Retrieved:** 2026-06-23
**Type:** Methodology webpage + arXiv paper

## What it measures (요약)
AA-Omniscience는 LLM의 **사실 회상(factual recall)과 지식 보정(calibration)**을 측정하는
벤치마크다. 정답을 맞히는 능력뿐 아니라 **환각(hallucination)을 얼마나 피하는지**, 모를 때
**기권(abstention)하는지**까지 함께 평가한다. 리더보드에서는 "Accuracy — Knowledge"와
"Non-Hallucination Rate (= 1 − Hallucination Rate)" 두 지표로 나타난다.

## Scope
- **Questions:** 6,000 total.
- **Domains:** 6 major domains — Business; Humanities & Social Sciences;
  Science/Engineering/Mathematics; Health; Law; Software Engineering.
- **Topics:** 42 economically relevant topics across those domains.
- Questions derived from authoritative academic and industry sources, generated via an
  LLM-based question-generation agent for unambiguity, scalability, and factual precision.

## The Omniscience Index (headline metric)
- A **bounded metric ranging from −100 to 100** measuring factual recall that **jointly
  penalizes hallucinations and rewards abstention when uncertain.**
- It "assigns points for correct answers, subtracts points for hallucinated responses, and
  keeps abstentions neutral, rewarding abstentions over incorrect guesses."
- **0** = a model that answers correctly as often as incorrectly.
- **Negative** = more incorrect than correct responses.
- At launch, Claude 4.1 Opus had the highest score (4.8) and was one of only three models
  scoring above zero — "all but three models are more likely to hallucinate than give a
  correct answer" on difficult questions.

## Grading
Responses are categorized as **CORRECT, PARTIALLY_CORRECT, INCORRECT, or NOT_ATTEMPTED.**

## The two metrics
- **Accuracy (Knowledge):** proportion of correctly answered questions, regardless of
  attempt rate.
- **Hallucination Rate:** proportion of incorrect answers out of all non-correct responses
  = incorrect ÷ (incorrect + partial + not attempted).
- **Non-Hallucination Rate** = 1 − Hallucination Rate.

## Relationship to the Intelligence Index
AA-Omniscience contributes **two separate components** to Intelligence Index v4.1
(12% total, 2:1 split):
- **Accuracy** — weighted at **8%** of the overall Index.
- **Non-Hallucination Rate** (1 − hallucination rate) — weighted at **4%** of the Index.

Note: The standalone **Omniscience Index** (−100 to 100) is a distinct calibration-aware
score; the Intelligence Index instead consumes Accuracy and Non-Hallucination separately.

## Key facts
- 6,000 questions, 42 topics, 6 domains.
- Omniscience Index is calibration-aware: penalizes hallucination, rewards abstention,
  bounded −100 to 100.
- Has a peer-style arXiv report (2511.13029), unlike most AA indices.
- Feeds the Intelligence Index as two components (Accuracy 8%, Non-Hallucination 4%).
