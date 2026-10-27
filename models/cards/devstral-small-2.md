---
type: Model
title: Devstral Small 2
creator: Mistral
license: Open
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 26.4, z: -0.77, r: 38.4, estimated: false }  # 전문 지식
  reasoning: { s: 17.8, z: -0.88, r: 36.8, estimated: false }  # 추론
  coding: { s: 36.4, z: -0.05, r: 49.2, estimated: false }  # 코딩
  agentic: { s: 25.2, z: -0.33, r: 45.0, estimated: false }  # 에이전트
  trust: { s: 11.3, z: -0.72, r: 39.2, estimated: false }  # 신뢰성
  multimodal: { s: 41.1, z: -1.55, r: 26.7, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.65, r: 40.3, estimated: false }  # 긴문맥
  instruction: { s: 26.8, z: -1.18, r: 32.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Small 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Devstral Small 2

Mistral · Open · Small · 컨텍스트 256k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 멀티모달

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 38.4 | -0.77 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 53.0%×0.4, [[humanitys-last-exam]] 3.0%×0.3 |
| 추론 | 36.8 | -0.88 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 53.0%×1.0, [[humanitys-last-exam]] 3.0%×1.0 |
| 코딩 | 49.2 | -0.05 | 실측 | [[scicode]] 32.0%×1.0, [[terminal-bench]] 17.0%×0.5 |
| 에이전트 | 45.0 | -0.33 | 실측 | [[gdpval]] 528.0%×1.0, [[tau3-banking]] 11.0%×1.0, [[terminal-bench]] 17.0%×1.0 |
| 신뢰성 | 39.2 | -0.72 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | 26.7 | -1.55 | 실측 | [[mmmu-pro]] 45.0%×1.0 |
| 긴문맥 | 40.3 | -0.65 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 32.2 | -1.18 | 실측 | [[ifbench]] 31.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
