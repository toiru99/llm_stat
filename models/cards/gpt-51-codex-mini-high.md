---
type: Model
title: GPT-5.1 Codex mini (high)
creator: OpenAI
license: Proprietary
intelligence_index: 31.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 46.9, z: 0.27, r: 54.0, estimated: false }  # 전문 지식
  reasoning: { s: 38.4, z: 0.21, r: 53.1, estimated: false }  # 추론
  coding: { s: 64.4, z: 0.73, r: 61.0, estimated: false }  # 코딩
  agentic: { s: 56.8, z: 0.79, r: 61.9, estimated: false }  # 에이전트
  trust: { s: 55.2, z: 1.27, r: 69.1, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.27, r: 54.1, estimated: false }  # 멀티모달
  long_context: { s: 82.9, z: 0.99, r: 64.9, estimated: false }  # 긴문맥
  instruction: { s: 78.9, z: 1.07, r: 66.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.1 Codex mini (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-27
timestamp: 2026-07-27T00:00:00Z
---

# GPT-5.1 Codex mini (high)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **31.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 지시 따르기
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $0.25 · 출력 $2.0 · 혼합 $None/1M · None t/s · TTFT Nones · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 54.0 | +0.27 | 실측 | [[aa-omniscience]] 23.0%×1.0, [[gpqa-diamond]] 81.0%×0.4, [[humanitys-last-exam]] 17.0%×0.3 |
| 추론 | 53.1 | +0.21 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 81.0%×1.0, [[humanitys-last-exam]] 17.0%×1.0 |
| 코딩 | 61.0 | +0.73 | 실측 | [[scicode]] 43.0%×1.0, [[terminal-bench]] 33.0%×0.5 |
| 에이전트 | 61.9 | +0.79 | 실측 | [[tau2-bench]] 63.0%×1.0, [[terminal-bench]] 33.0%×1.0 |
| 신뢰성 | 69.1 | +1.27 | 실측 | [[aa-omniscience]] 49.0%×1.0 |
| 멀티모달 | 54.1 | +0.27 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 64.9 | +0.99 | 실측 | [[aa-lcr]] 63.0%×1.0 |
| 지시 따르기 | 66.0 | +1.07 | 실측 | [[ifbench]] 68.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
